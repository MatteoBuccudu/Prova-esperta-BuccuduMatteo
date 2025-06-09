"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

  const navLinks = [
    { href: "/", label: "Homepage", isActive: true },
    {
      href: "/servizi",
      label: "SERVIZI",
      dropdown: [
        { href: "/servizi/centro-diurno-anchise", label: "CENTRO DIURNO \"ANCHISE\"" },
        { href: "/servizi/centro-anziani-colora-il-tuo-tempo", label: "CENTRO ANZIANI \"COLORA IL TUO TEMPO\"" },
        { href: "/servizi/servizio-assistenza-domiciliare-sad", label: "SERVIZIO ASSISTENZA DOMICILIARE S.A.D." },
        { href: "/servizi/sportello-assistenti-familiari", label: "SPORTELLO ASSISTENTI FAMILIARI" },
        { href: "/servizi/punto-prelievi-passarella-servizio-infermieristico", label: "PUNTO PRELIEVI \"PASSARELLA\" SERVIZIO INFERMIERISTICO" },
      ],
    },
    {
      href: "/perche-ipab",
      label: "PERCHE' L'IPAB",
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
        { href: "/ipab-informa/amministrazione-trasparente", label: "AMMINISTRAZIONE TRASPARENTE" },
        { href: "/ipab-informa/amministrazione-trasparente-link", label: "Amministrazione trasparente" },
      ],
    },
    // Sostienici come link semplice senza dropdown
    { href: "/sostienici", label: "Sostienici" },
    {
      href: "/accessi-riservati",
      label: "Accessi riservati",
      dropdown: [
        { href: "/accessi-riservati/intranet-sito", label: "Intranet sito" },
        { href: "/accessi-riservati/area-dipendenti", label: "Area Dipendenti" },
      ],
    },
    { href: "/extranet", label: "Extranet" },
    { href: "/privacy", label: "PRIVACY" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutsideDesktop = (event) => {
      if (openDesktopDropdown && !event.target.closest(".desktop-dropdown-container")) {
        setOpenDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDesktop);
    return () => document.removeEventListener("mousedown", handleClickOutsideDesktop);
  }, [openDesktopDropdown]);

  return (
    <header className="fixed top-0 w-full z-20">
      <div className="flex py-3 items-center border-b border-b-gray-100 bg-gradient-to-r from-[#1F426E] to-[#1F426E] lg:px-12 px-6 shadow-sm justify-between text-white">

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 items-center justify-between">
          <div className="flex gap-3 xl:gap-6 2xl:gap-12 items-center">
            {navLinks.map((link) => (
              <div key={link.href} className="relative desktop-dropdown-container">
                {link.dropdown ? (
                  <button
                    onClick={() =>
                      setOpenDesktopDropdown(
                        openDesktopDropdown === link.label ? null : link.label
                      )
                    }
                    className="flex items-center gap-1 hover:text-gray-200 transition-colors"
                  >
                    <span
                      className={`${
                        link.isActive && !link.dropdown ? "active font-bold" : ""
                      }`}
                    >
                      {link.label}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-chevron-down transition-transform duration-200 ${
                        openDesktopDropdown === link.label ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                ) : (
                  <a href={link.href} className="flex items-center gap-1">
                    <span
                      className={`hover:text-gray-200 ${
                        link.isActive ? "active font-bold" : ""
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                )}
                {/* Render dropdown only if exists and is not "Sostienici" */}
                {link.dropdown && (
                  <div
                    className={`absolute bg-white shadow-lg mt-2 rounded w-auto transition-all duration-200 ease-in-out origin-top ${
                      openDesktopDropdown === link.label
                        ? "scale-y-100 opacity-100 block"
                        : "scale-y-0 opacity-0 hidden"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="bg-white text-[#1F426E] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors ml-auto">
            Regione Veneto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-[#2A5594] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out mobile-menu-container ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={70}
                height={82}
              />
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-80px)] p-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href} className="w-full border-b border-gray-100 pb-4">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className="text-black text-xl font-medium w-full flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className={`transition-transform duration-200 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                      <div className={`${openDropdown === link.label ? "block" : "hidden"} mt-2 space-y-2`}>
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block text-gray-700 pl-4 text-sm"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a href={link.href} className="text-black text-xl font-medium block">
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}