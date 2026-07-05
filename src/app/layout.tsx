import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ShriRam Group | Real Estate Developers in Ghaziabad",
  description:
    "ShriRam Group is a trusted real estate developer in Ghaziabad with 25+ years of experience delivering landmark residential and commercial projects.",
  keywords: [
    "ShriRam Group",
    "real estate Ghaziabad",
    "residential projects Ghaziabad",
    "commercial projects Ghaziabad",
    "flats for sale Ghaziabad",
    "property developer Ghaziabad",
  ],
  openGraph: {
    title: "ShriRam Group | Real Estate Developers in Ghaziabad",
    description:
      "25+ years of building landmark residential and commercial developments across Ghaziabad.",
    url: "https://www.shriramgroup.com",
    siteName: "ShriRam Group",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/6a49ccfd539b7e1d4b7d41e1/1jso4hg4b';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
