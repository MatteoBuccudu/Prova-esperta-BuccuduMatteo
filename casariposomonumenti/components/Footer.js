"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F426E] text-white py-12 shadow-inner mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Contatti */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contatti</h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                <span className="font-semibold">Tel:</span> 0421 330807
              </li>
              <li>
                <span className="font-semibold">PROTOCOLLO:</span>{" "}
                <a
                  href="mailto:info@cdrmonumento.com"
                  className="hover:underline"
                >
                  info@cdrmonumento.com
                </a>
              </li>
              <li>
                <span className="font-semibold">PRESIDENZA:</span>{" "}
                <a
                  href="mailto:presidente@cdrmonumento.com"
                  className="hover:underline"
                >
                  presidente@cdrmonumento.com
                </a>
              </li>
              <li>
                <span className="font-semibold">DIREZIONE:</span>{" "}
                <a
                  href="mailto:direttore@cdrmonumento.com"
                  className="hover:underline"
                >
                  direttore@cdrmonumento.com
                </a>
              </li>
              <li>
                <span className="font-semibold">CONTABILITA' E RETTE:</span>{" "}
                <a
                  href="mailto:contabilita@cdrmonumento.com"
                  className="hover:underline"
                >
                  contabilita@cdrmonumento.com
                </a>
              </li>
              <li>
                <span className="font-semibold">PEC:</span>{" "}
                <a
                  href="mailto:cdrmonumento@halleypec.it"
                  className="hover:underline"
                >
                  cdrmonumento@halleypec.it
                </a>
              </li>
            </ul>
          </div>

          {/* Sezione Link Utili (da personalizzare con link reali) */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Link Utili</h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                <Link href="#" className="hover:underline transition-colors">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              {/* Aggiungi altri link pertinenti qui */}
            </ul>
          </div>

          {/* Orari (Esempio) */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Orari Ufficio
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                Lunedì - Venerdì:{" "}
                <span className="font-semibold">8:00 - 18:00</span>
              </li>
              <li>
                Sabato: <span className="font-semibold">9:00 - 12:00</span>
              </li>
              <li>
                Domenica: <span className="font-semibold">Chiuso</span>
              </li>
            </ul>
          </div>

          {/* Logo o Breve Descrizione (nuova sezione) */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-white">
              La Nostra Missione
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Dedicati a offrire assistenza e cura di qualità, migliorando la
              vita dei nostri anziani con dignità e rispetto.
            </p>
            {/* Potresti aggiungere qui un logo o un'immagine */}
          </div>
        </div>

        {/* Sezione Copyright e Validatori W3C */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:flex md:justify-between md:items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            © 2025 Halley Informatica. Tutti i diritti riservati. Halley EG
            041433.
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            {/* Esempio di icone validatori - potrebbero essere immagini reali o icone SVG se disponibili */}
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img
                src="https://www.w3.org/Icons/valid-html401"
                alt="Valid HTML"
              />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img
                src="https://www.w3.org/Icons/valid-css"
                alt="Valid CSS"
              />
            </a>
            {/* Aggiungi altri validatori o badge se necessario */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
