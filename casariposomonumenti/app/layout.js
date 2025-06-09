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

const footerData = {
  contactInfo: {
    title: "Contatti",
    phone: "0421 330807",
    emails: [
      { label: "PROTOCOLLO", address: "info@cdrmonumento.com" },
      { label: "PRESIDENZA", address: "presidente@cdrmonumento.com" },
      { label: "DIREZIONE", address: "direttore@cdrmonumento.com" },
      { label: "CONTABILITA\' E RETTE", address: "contabilita@cdrmonumento.com" },
      { label: "PEC", address: "cdrmonumento@halleypec.it" },
    ],
  },
  missionInfo: {
    title: "La Nostra Missione",
    description:
      "Dedicati a offrire assistenza e cura di qualità, migliorando la vita dei nostri anziani con dignità e rispetto.",
  },
  copyrightText: "© 2025 Halley Informatica. Tutti i diritti riservati. Halley EG 041433.",
  validatorLinks: [
    { href: "#", src: "https://www.w3.org/Icons/valid-html401", alt: "Valid HTML", width: 50, height: 50 },
    { href: "#", src: "https://www.cdrmonumento.com/ae2131/immagini/yellow_wai-aa.gif", alt: "Valid CSS", width: 50, height: 50 },
    { href: "#", src: "https://www.cdrmonumento.com/ae2131/immagini/valid_css3.png", alt: "Valid CSS", width: 50, height: 50 },
  ],
};

const navbarData = {
  navLinks: [
    { href: "/", label: "Homepage", isActive: true },
    {
      href: "/servizi",
      label: "SERVIZI",
      dropdown: [
        {
          href: "/servizi/centro-diurno-anchise",
          label: 'CENTRO DIURNO "ANCHISE"',
        },
        {
          href: "/servizi/centro-anziani-colora-il-tuo-tempo",
          label: 'CENTRO ANZIANI "COLORA IL TUO TEMPO"',
        },
        {
          href: "/servizi/servizio-assistenza-domiciliare-sad",
          label: "SERVIZIO ASSISTENZA DOMICILIARE S.A.D.",
        },
        {
          href: "/servizi/sportello-assistenti-familiari",
          label: "SPORTELLO ASSISTENTI FAMILIARI",
        },
        {
          href: "/servizi/punto-prelievi-passarella-servizio-infermieristico",
          label: 'PUNTO PRELIEVI "PASSARELLA" SERVIZIO INFERMIERISTICO',
        },
      ],
    },
    {
      href: "/perche-ipab",
      label: "PERCHE\' L\'IPAB",
      dropdown: [
        { href: "/perche-ipab/vision-e-mission", label: "VISION E MISSION" },
        { href: "/perche-ipab/statuto", label: "STATUTO" },
      ],
    },
    {
      href: "/ipab-informa",
      label: "I.P.A.B. informa",
      dropdown: [
        { href: "/ipab-informa/accesso-agli-atti", label: "ACCESSO AGLI ATTI" },
        { href: "/ipab-informa/albo-pretorio", label: "Albo pretorio" },
        { href: "/ipab-informa/delibere", label: "Delibere" },
        { href: "/ipab-informa/determine", label: "Determine" },
        {
          href: "/ipab-informa/amministrazione-trasparente",
          label: "AMMINISTRAZIONE TRASPARENTE",
        },
      ],
    },
    { href: "/sostienici", label: "Sostienici" },
    {
      href: "/accessi-riservati",
      label: "Accessi riservati",
      dropdown: [
        { href: "/accessi-riservati/intranet-sito", label: "Intranet sito" },
        {
          href: "/accessi-riservati/area-dipendenti",
          label: "Area Dipendenti",
        },
      ],
    },
    { href: "/extranet", label: "Extranet" },
    { href: "/privacy", label: "PRIVACY" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} antialiased`}
      >
        <Navbar navbarData={navbarData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
