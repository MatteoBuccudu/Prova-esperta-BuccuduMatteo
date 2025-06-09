import { Geist, Geist_Mono } from "next/font/google";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata = {
  title: "Casa di Riposo Monumenti ai Caduti",
  description: "CASA DI RIPOSO MONUMENTO AI CADUTI IN GUERRA (VE)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
