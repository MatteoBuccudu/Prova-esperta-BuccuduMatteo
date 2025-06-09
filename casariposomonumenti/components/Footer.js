"use client";

import React from "react";
import Link from "next/link";

const Footer = ({
  contacts = {
    tel: "0421 330807",
    protocollo: "info@cdrmonumento.com",
    presidenza: "presidente@cdrmonumento.com",
    direzione: "direttore@cdrmonumento.com",
    contabilitaRette: "contabilita@cdrmonumento.com",
    pec: "cdrmonumento@halleypec.it",
  },
  mission = {
    title: "La Nostra Missione",
    description:
      "Dedicati a offrire assistenza e cura di qualità, migliorando la vita dei nostri anziani con dignità e rispetto.",
  },
}) => {
  return (
    <footer className="bg-[#1F426E] text-white py-12 shadow-inner mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Contatti */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contatti</h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                <span className="font-semibold">Tel:</span> {contacts.tel}
              </li>
              <li>
                <span className="font-semibold">PROTOCOLLO:</span>{" "}
                <a
                  href={`mailto:${contacts.protocollo}`}
                  className="hover:underline"
                >
                  {contacts.protocollo}
                </a>
              </li>
              <li>
                <span className="font-semibold">PRESIDENZA:</span>{" "}
                <a
                  href={`mailto:${contacts.presidenza}`}
                  className="hover:underline"
                >
                  {contacts.presidenza}
                </a>
              </li>
              <li>
                <span className="font-semibold">DIREZIONE:</span>{" "}
                <a
                  href={`mailto:${contacts.direzione}`}
                  className="hover:underline"
                >
                  {contacts.direzione}
                </a>
              </li>
              <li>
                <span className="font-semibold">CONTABILITA' E RETTE:</span>{" "}
                <a
                  href={`mailto:${contacts.contabilitaRette}`}
                  className="hover:underline"
                >
                  {contacts.contabilitaRette}
                </a>
              </li>
              <li>
                <span className="font-semibold">PEC:</span>{" "}
                <a href={`mailto:${contacts.pec}`} className="hover:underline">
                  {contacts.pec}
                </a>
              </li>
            </ul>
          </div>

          {/* Logo o Breve Descrizione (nuova sezione) */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-white">
              {mission.title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {mission.description}
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
                width="50"
                height="50"
              />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img
                src="https://www.cdrmonumento.com/ae2131/immagini/yellow_wai-aa.gif"
                alt="Valid CSS"
                width="50"
                height="50"
              />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img
                src="https://www.cdrmonumento.com/ae2131/immagini/valid_css3.png"
                alt="Valid CSS"
                width="50"
                height="50"
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
