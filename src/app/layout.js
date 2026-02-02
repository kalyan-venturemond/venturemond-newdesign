import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venturemond",
  description: "Venturemond SaaS – Modern, scalable, privacy-first software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        {/*  Chatbase Chatbot */}
        <Script id="chatbase-widget">
          {`
            (function() {
              if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...args) => {
                  if (!window.chatbase.q) { window.chatbase.q = []; }
                  window.chatbase.q.push(args);
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                    if (prop === "q") { return target.q; }
                    return (...args) => target(prop, ...args);
                  }
                });
              }

              const onLoad = function() {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "oZNZeuEIo4hju8OflHUeW";  // <-- your real ID
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };

              if (document.readyState === "complete") {
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
