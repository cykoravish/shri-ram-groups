import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

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
        <Header />
        {children}
      </body>
    </html>
  );
}