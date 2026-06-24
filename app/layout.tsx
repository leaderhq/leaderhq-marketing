import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";
import { SuiteBar } from "@leader/marketing-ui";

const APP_URL = "https://app.leaderhq.io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leaderhq.io"),
  title: "LeaderHQ — Your MLM Command Center",
  description: "LeaderHQ reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every single morning.",
  applicationName: "LeaderHQ",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderHQ",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderHQ",
    title: "LeaderHQ — Your MLM Command Center",
    description: "Reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every single morning.",
    url: "https://leaderhq.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderHQ — Your MLM Command Center",
    description: "Reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every single morning.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SuiteBar appUrl={APP_URL} />
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
