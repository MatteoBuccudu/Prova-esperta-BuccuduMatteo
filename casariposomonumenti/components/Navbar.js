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
  ];

  // Previeni lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutsideDesktop = (event) => {
      if (
        openDesktopDropdown &&
        !event.target.closest(".desktop-dropdown-container")
      ) {
        setOpenDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDesktop);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDesktop);
  }, [openDesktopDropdown]);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <div className="flex py-3 items-center border-b border-b-gray-100 bg-gradient-to-r from-[#34568B] to-[#34568B] lg:px-12 px-6 shadow-sm justify-between text-white">
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-between">
            <div className="flex gap-3 xl:gap-6 2xl:gap-12 items-center">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative desktop-dropdown-container"
                >
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
                          link.isActive && !link.dropdown
                            ? "active font-bold"
                            : ""
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

            <button className="bg-white text-[#34568B] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors ml-auto">
              Regione Veneto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="mobile-menu-button p-2 rounded-full hover:bg-[#456C9F] transition-all"
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
      </header>

      {/* Mobile Menu - Fuori dall'header per evitare problemi di z-index */}
      <div
        className={`fixed inset-y-0 right-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Container */}
        <div className="relative h-full w-[85%] max-w-sm bg-white shadow-xl mobile-menu-container ml-auto">
          {/* Header del menu */}
          <div className="flex justify-between items-center p-6 border-b bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition-all"
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
                className="text-gray-600"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-80px)]">
            <nav className="py-4">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className="text-gray-800 text-base font-medium w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <span>{link.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className={`transition-transform duration-200 text-gray-500 ${
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
                      <div
                        className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                          openDropdown === link.label ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-600 pl-10 pr-6 py-3 text-sm hover:bg-gray-100 transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-800 text-base font-medium block px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer del menu con bottone Regione Veneto */}
            <div className="p-6 border-t border-gray-100 mt-4">
              <button className="w-full bg-[#34568B] text-white px-4 py-3 rounded-md hover:bg-[#456C9F] transition-colors">
                Regione Veneto
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
