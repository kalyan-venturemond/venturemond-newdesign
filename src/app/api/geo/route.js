import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure this runs on every request

const COUNTRY_CURRENCY_MAP = {
    'US': 'USD', 'GB': 'GBP', 'CA': 'CAD', 'AU': 'AUD',
    'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR', 'ES': 'EUR', 'NL': 'EUR', 'IE': 'EUR',
    'AE': 'AED', 'SG': 'SGD', 'JP': 'JPY', 'IN': 'INR'
};

export async function GET(request) {
    try {
        // 1. Detect Country from Vercel Headers (Fallback to check external API if local)
        let country = request.headers.get('x-vercel-ip-country');

        // If running locally or header missing, try fetching from a free IP service
        // If running locally or header missing, try fetching from a free IP service
        if (!country) {
            // Determine Client IP (critical for self-hosted/VPS deployments)
            const forwardedFor = request.headers.get('x-forwarded-for');
            const realIp = request.headers.get('x-real-ip');
            // Standard format: "client, proxy1, proxy2"
            const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp;

            console.log("Geo Debug - Client IP:", clientIp || "Not Detected");

            // PRIMARY: ipwho.is
            try {
                let geoUrl = 'https://ipwho.is/';
                if (clientIp && clientIp !== '::1' && clientIp !== '127.0.0.1' && !clientIp.startsWith('192.168.') && !clientIp.startsWith('10.')) {
                    geoUrl = `https://ipwho.is/${clientIp}`;
                }

                console.log("Geo Debug - Trying IP Service 1:", geoUrl);
                const ipRes = await fetch(geoUrl, { cache: 'no-store' });
                if (ipRes.ok) {
                    const ipData = await ipRes.json();
                    if (ipData.country_code) {
                        country = ipData.country_code;
                        console.log("Geo Debug - Detected Country (Service 1):", country);
                    } else if (ipData.message) {
                        console.warn("Geo Debug - Service 1 API Error:", ipData.message);
                    }
                } else {
                    console.warn("Geo Debug - Service 1 HTTP Error:", ipRes.status);
                }
            } catch (e) {
                console.warn('Geo Debug - Service 1 failed:', e.message);
            }

            // BACKUP 1: ipapi.co (if primary failed)
            if (!country) {
                try {
                    const backupUrl = clientIp ? `https://ipapi.co/${clientIp}/json/` : 'https://ipapi.co/json/';
                    console.log(`Geo Debug - Trying IP Service 2: ${backupUrl}`);
                    const backupRes = await fetch(backupUrl, { cache: 'no-store' });
                    if (backupRes.ok) {
                        const backupData = await backupRes.json();
                        if (backupData.country_code) {
                            country = backupData.country_code;
                            console.log("Geo Debug - Detected Country (Service 2):", country);
                        }
                    } else {
                        console.warn("Geo Debug - Service 2 HTTP Error:", backupRes.status);
                    }
                } catch (e) {
                    console.warn('Geo Debug - Service 2 failed:', e.message);
                }
            }

            // BACKUP 2: ip-api.com (Very reliable, HTTP only)
            if (!country) {
                try {
                    const backup2Url = clientIp ? `http://ip-api.com/json/${clientIp}` : 'http://ip-api.com/json/';
                    console.log(`Geo Debug - Trying IP Service 3: ${backup2Url}`);
                    // Note: ip-api.com is HTTP only for free tier, but fine for server-side fetch
                    const backup2Res = await fetch(backup2Url, { cache: 'no-store' });
                    if (backup2Res.ok) {
                        const backup2Data = await backup2Res.json();
                        if (backup2Data.countryCode) { // Note: ip-api uses 'countryCode'
                            country = backup2Data.countryCode;
                            console.log("Geo Debug - Detected Country (Service 3):", country);
                        }
                    } else {
                        console.warn("Geo Debug - Service 3 HTTP Error:", backup2Res.status);
                    }
                } catch (e) {
                    console.warn('Geo Debug - Service 3 failed:', e.message);
                }
            }
        }

        country = country || 'US'; // Final Fallback

        // 2. Determine Currency
        // Check static map first for speed/reliability
        let currency = COUNTRY_CURRENCY_MAP[country];

        // If not in map, fetch from restcountries
        if (!currency) {
            try {
                const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${country}?fields=currencies`);
                if (countryRes.ok) {
                    const countryData = await countryRes.json();
                    // countryData is sometimes an array or object depending on endpoint
                    // /alpha/{code} usually returns the object directly or in array. 
                    // To be safe, handle both if using standard libraries, but here we simply assume the structure or fall back.
                    // The previous code handled: const currencies = countryData.currencies;
                    // API v3.1 alpha returns array for some inputs, but let's be safe.

                    const data = Array.isArray(countryData) ? countryData[0] : countryData;
                    if (data?.currencies) {
                        currency = Object.keys(data.currencies)[0];
                    }
                }
            } catch (e) {
                console.warn('Country currency fetch failed', e);
            }
        }

        // Default to INR if currency still unknown
        currency = currency || 'USD';

        // 3. Get Exchange Rate (Base USD)
        let rate = 1;

        if (currency === 'USD') {
            rate = 1;
        } else {
            try {
                // Use a reliable exchange rate API
                const rateRes = await fetch('https://api.exchangerate-api.com/v4/latest/USD', { next: { revalidate: 3600 } });
                if (rateRes.ok) {
                    const rateData = await rateRes.json();
                    rate = rateData.rates[currency] || (currency === 'INR' ? 87 : 1);
                }
            } catch (e) {
                console.error('Exchange rate fetch failed', e);
                // Keep default rate 84 (approx INR) if failed
                // Does not matter much if we aren't INR, but better to have something.
            }
        }

        return NextResponse.json({
            country,
            currency,
            rate,
            source: 'live'
        });

    } catch (error) {
        console.error('Geo API Critical Error:', error);
        return NextResponse.json({
            country: 'US',
            currency: 'USD',
            rate: 1,
            source: 'fallback_error'
        });
    }
}
