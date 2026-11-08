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
  title: {
    default: "MedVision AI",
    template: "%s | MedVision AI",
  },
  description:
    "Clinician-facing medical imaging research and decision-support platform. Research use only; clinician review required.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // "dark" is the default theme. suppressHydrationWarning is needed
    // because a theme switcher will change this class on the client later.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
