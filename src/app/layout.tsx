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
  title: "Erin Fitzpatric - Senior Software Engineer",
  description: "Senior Software Engineer with startup experience. Specializing in React, Next.js, TypeScript, Node.js and full-stack development.",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "Full Stack Developer", "JavaScript", "Node.js"],
  authors: [{ name: "Erin Fitzpatric" }],
  openGraph: {
    title: "Erin Fitzpatric - Senior Software Engineer",
    description: "Senior Software Engineer with experience across startups and Fortune 500 companies. View my portfolio showcasing real projects and modern development practices.",
    url: "https://erinfitzpatric.com",
    siteName: "Erin Fitzpatric Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erin Fitzpatric - Senior Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, Node.jsand full-stack development.",
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
