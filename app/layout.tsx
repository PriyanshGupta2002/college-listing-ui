import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "College Vidya – Chuno Apna Sahi",
  description:
    "Explore detailed information about top universities, courses, and facilities. Compare programs, EMI options, and apply with ease on College Vidya.",
  keywords: [
    "colleges in India",
    "university comparison",
    "college fees",
    "EMI facility",
    "online courses",
    "hybrid education",
    "college application platform",
  ],
  authors: [{ name: "College Vidya Team", url: "https://collegevidya.com/" }],
  creator: "College Vidya",
  openGraph: {
    title: "College Vidya – Chuno Apna Sahi",
    description:
      "Find and compare universities, courses, fees, and EMI options. Apply online and download brochures instantly.",
    url: "https://collegevidya.com/",
    siteName: "College Vidya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
