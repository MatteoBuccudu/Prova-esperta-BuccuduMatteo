"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const EventiENews = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fullText = `Qualche breve cenno alla Storia dell'IPAB "MONUMENTO AI CADUTI IN GUERRA". Dopo l'annessione del Veneto all'Italia, l'Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad ora: organo Principe divenne il Consiglio comunale, il Sindaco era di nomina regia, ma scelto tra i consiglieri ed affiancato da una Giunta di Assessore eletti dal Consiglio comunale tra i propri membri. A livello nazionale nel 1882 si ammettono all'elettorato politico tutti i cittadini maggiorenni che superino l'esame del corso scolastico obbligatorio oppure paghino un censo di 19,80 lire. Subito dopo nel 1915 diviene elettore amministrativo di un comune chi è cittadino italiano, ha compiuto 21 anni, ha la residenza nel comune ovvero paga nel comune un censo, e contro il quale non siano insorte cause di esclusione per incapacità o indegnità.`;
  const truncatedText = fullText.substring(0, 300) + "...";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const quickLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      label: "Amministrazione trasparente",
      href: "/ipab-informa/amministrazione-trasparente",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      label: "Albo pretorio online",
      href: "/ipab-informa/albo-pretorio",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Contatti",
      href: "/contatti",
      color: "from-green-500 to-green-700",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "PagoPA",
      href: "/pagopa",
      color: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12 mt-40"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Sezione Presentazione */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-10 flex flex-col backdrop-blur-sm border border-gray-100"
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F426E] to-[#2A5594] mb-8 pb-4 relative"
          >
            Eventi e News
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F426E] to-[#2A5594] rounded-full"
            />
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 overflow-hidden rounded-xl shadow-xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src="/images/ipab.jpg"
              alt="Eventi e News"
              width={600}
              height={400}
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-700 leading-relaxed flex-grow"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={isExpanded ? "expanded" : "truncated"}
                initial={{ opacity: 0, height: "auto" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mb-6 text-lg leading-8"
              >
                {isExpanded ? fullText : truncatedText}
              </motion.p>
            </AnimatePresence>

            <motion.button
              onClick={toggleExpand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-white bg-gradient-to-r from-[#1F426E] to-[#2A5594] hover:from-[#2A5594] hover:to-[#1F426E] px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
              {isExpanded ? "Mostra meno" : "Continua a leggere"}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Sezione Quick Links */}
        <div className="grid grid-cols-2 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Link href={link.href}>
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-white rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center space-y-4 shadow-xl overflow-hidden cursor-pointer"
                >
                  {/* Background gradient animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-10`}
                  />

                  {/* Icon container */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.2 : 1,
                      rotate: hoveredCard === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative z-10 p-4 rounded-full bg-gradient-to-br ${link.color} text-white shadow-lg`}
                  >
                    {link.icon}
                  </motion.div>

                  {/* Label */}
                  <motion.span
                    animate={{
                      scale: hoveredCard === index ? 1.05 : 1,
                    }}
                    className="text-xl font-bold text-gray-800 relative z-10"
                  >
                    {link.label}
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Nuova Sezione Evento Book Crossing */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-10 mt-12 flex flex-col backdrop-blur-sm border border-gray-100"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F426E] to-[#2A5594] mb-8 pb-4 relative"
        >
          Inaugurazione Book Crossing
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F426E] to-[#2A5594] rounded-full"
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-gray-700 leading-relaxed flex-grow"
          >
            <p className="mb-4 text-sm text-gray-500">20/05/2025</p>
            <p className="mb-6 text-lg leading-8">
              Gentilissimi,
              <br />
              <br />
              il Consiglio di Amministrazione ha il piacere di invitarVi
              all'inaugurazione delle casette di book crossing che si terrà
              Lunedì 16 giugno alle ore 16:30 presso il parco della Casa di
              Riposo "Monumento ai Caduti in Guerra".
              <br />
              <br />
              Certi di fare cosa gradita, si porgono cordiali saluti.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-8 md:mb-0 overflow-hidden rounded-xl shadow-xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src="/images/eventinews/Bookcrossing.jpg"
              alt="Inaugurazione Book Crossing"
              width={600}
              height={400}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventiENews;
