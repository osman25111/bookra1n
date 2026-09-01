import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://osman25111.github.io/bookra1n/"),
  title: "Bookra1n — BR Team · iOS & FRP Unlocking Tools",
  description:
    "BR Team's official hub — Samsung Qualcomm FRP removal for 200+ models, iOS Hello bypass, MDM & FMI OFF tools. Untethered A5–A12+. Trusted by repair shops worldwide.",
  keywords: ["bookra1n", "BR Team", "FRP", "hello bypass", "MDM bypass", "FMI OFF", "checkm8", "Samsung Qualcomm"],
  authors: [{ name: "BR Team" }],
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }, { url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Bookra1n — BR Team · iOS & FRP Unlocking Tools",
    description: "Samsung Qualcomm FRP for 200+ models. iOS Hello bypass, MDM, FMI OFF. Untethered A5–A12+.",
    url: "https://osman25111.github.io/bookra1n/",
    siteName: "Bookra1n",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
