// app/layout.tsx
import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  // colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sri Rahul - Portfolio',
  description: 'Portfolio of Sri Rahul',
  metadataBase: new URL("https://www.example.site"),
  generator: "Next.js",
  applicationName: "Portfolio",
  keywords: [
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],
  openGraph: {
    title: "Sri Rahul - Portfolio",
    description: "Portfolio Website of Sri Rahul",
    url: "https://www.example.site",
    siteName: "portfolio.site",
    images: [
      {
        url: "/metadata.jpg", // Use absolute path from public folder
        width: 1200,
        height: 630,
        alt: "Sri Rahul - Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Rahul - Portfolio",
    description: "Portfolio of Sri Rahul - Frontend Developer",
    creator: "@_Sri_Rahul_",
    images: ["/metadata.jpg"], // Use absolute path from public folder
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={syne.className}>
        {children}
      </body>
    </html>
  );
}