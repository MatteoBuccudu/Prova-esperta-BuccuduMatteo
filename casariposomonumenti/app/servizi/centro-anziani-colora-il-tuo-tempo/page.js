"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CentroAnzianiColoraIlTuoTempoPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-800"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/centro_diurno_anchise/hero.jpg"
          alt="Centro Anziani Colora il tuo Tempo Hero"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 text-center text-white p-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wider drop-shadow-lg">
            CENTRO ANZIANI "COLORA IL TUO TEMPO"
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Un luogo di incontro per stimolare benessere e serenità.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Descrizione Generale */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 bg-white shadow-lg rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
            Il nostro servizio
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Il centro anziani è un luogo di incontro rivolto alla popolazione anziana autosufficiente del territorio sandonatese che ha come scopo il contrasto di fenomeni di isolamento e solitudine, portando momenti di stimolo, di benessere e serenità per una maggiore integrazione sociale.
            <br /><br />
            Il servizio viene svolto grazie alla collaborazione con le associazioni di volontariato presenti nel territorio e con l'Amministrazione Comunale che mette a disposizione gli spazi siti in Viale Libertà n. 10.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default CentroAnzianiColoraIlTuoTempoPage;