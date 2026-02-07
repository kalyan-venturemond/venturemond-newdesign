import { NextResponse } from 'next/server';

export async function GET(request) {
    // 1. Detect Country from Vercel Headers (Fallback to 'IN')
    const country = request.headers.get('x-vercel-ip-country') || 'IN';

    // Default State (INR)
    let currency = 'INR';
    let rate = 84; // Approx default fallback

    try {
        // 2. Get Currency Code dynamically (No hardcoded lists)
        // We use restcountries API to map Country Code (IN) -> Currency (INR)
        const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${country}?fields=currencies`);

        if (countryRes.ok) {
            const countryData = await countryRes.json();
            // Extract the first currency key (e.g., "INR", "USD", "EUR")
            const currencies = countryData.currencies;
            currency = Object.keys(currencies)[0];
        }

        // 3. Get Real-time Exchange Rate (Base USD)
        if (currency === 'USD') {
            rate = 1;
        } else {
            const rateRes = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            if (rateRes.ok) {
                const rateData = await rateRes.json();
                // Get rate for detected currency, fallback to 1 if missing
                rate = rateData.rates[currency] || 1;
            }
        }

        return NextResponse.json({
            country,
            currency,
            rate,
            source: 'live'
        });

    } catch (error) {
        console.error('Geo API Error:', error);
        // Fail gracefully to Default (INR)
        return NextResponse.json({
            country: 'IN',
            currency: 'INR',
            rate: 84,
            source: 'fallback'
        });
    }
}
