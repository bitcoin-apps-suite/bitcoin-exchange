import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin Exchange | $bEX - The Exchange of Exchanges",
  description: "Trade Bitcoin Apps tokens and computational resources on the most scalable blockchain infrastructure. Access $bWriter, $bCode, $bMail, and more on Teranode's unlimited TPS platform.",
  keywords: "bitcoin exchange, bEX, bitcoin apps, cryptocurrency trading, BSV, blockchain exchange, decentralized exchange, teranode, bitcoin tokens",
  authors: [{ name: "The Bitcoin Corporation LTD" }],
  creator: "The Bitcoin Corporation LTD",
  publisher: "The Bitcoin Corporation LTD",
  robots: "index, follow",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitcoin-exchange-iota.vercel.app",
    title: "Bitcoin Exchange | $bEX - The Exchange of Exchanges",
    description: "Trade Bitcoin Apps tokens and computational resources on the most scalable blockchain infrastructure. Legacy exchanges can't compete with Teranode's unlimited TPS.",
    siteName: "Bitcoin Exchange",
    images: [
      {
        url: "/bEX.jpg",
        width: 1200,
        height: 630,
        alt: "Bitcoin Exchange - The Exchange of Exchanges",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Exchange | $bEX - The Exchange of Exchanges",
    description: "Trade Bitcoin Apps tokens on the most scalable blockchain. Access $bWriter, $bCode, $bMail, and more with unlimited TPS.",
    images: ["/bEX.jpg"],
    creator: "@BitcoinCorp",
    site: "@BitcoinExchange",
  },

  // App-specific
  applicationName: "Bitcoin Exchange",
  category: "Finance",
  classification: "Cryptocurrency Exchange",
  
  // Viewport and mobile
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // Manifest
  manifest: "/manifest.json",

  // Additional meta
  other: {
    "theme-color": "#10b981",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
