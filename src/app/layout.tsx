import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.scss";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quran For All | 1-on-1 Online Quran Classes & Tajweed Academy",
  description: "Learn Quran online with qualified tutors. Mon-Fri flexible scheduling, 30-min daily 1-on-1 lessons via Google Meet. Start your 1-week free trial today!",
  keywords: ["online quran classes", "learn quran tajweed uk", "quran academy uk", "online quran teacher uk", "quran memorization online", "quran tuition london", "quran for kids", "tajweed rules"],
  openGraph: {
    title: "Quran For All | Online Quran & Tajweed Academy",
    description: "Learn Quran online with certified 1-on-1 tutors. Flexible classes via Google Meet. Get a 1-week free trial today!",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="d-flex flex-column min-vh-100 bg-cream">
        <BootstrapClient />
        <Navbar />
        <main className="flex-shrink-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

