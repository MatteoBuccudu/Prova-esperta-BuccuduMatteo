"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServizioAssistenzaDomiciliareSADPage = () => {
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
          src="/images/servizio_assistenza_domiciliare_sad/hero.jpg" // Placeholder image
          alt="Servizio di Assistenza Domiciliare S.A.D. Hero"
          layout="fill"
          objectFit="cover"
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
            SERVIZIO DI ASSISTENZA DOMICILIARE S.A.D.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.
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
            Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.
          </p>
        </motion.section>

        {/* Obiettivi del servizio */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
              Obiettivi
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Mantenimento, inserimento e reinserimento delle persone in stato di bisogno nell'ambiente familiare e sociale di appartenenza.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Promozione e recupero delle capacità di autonomia delle persone attraverso le risorse personali, familiari, amicali e di vicinato presenti nel territorio.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Contrasto dei processi di emarginazione sociale, isolamento e solitudine.</span>
              </motion.li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <Image
              src="/images/domiciliare_sad/sociale.jpg" // Placeholder image
              alt="Obiettivi del servizio"
              width={500}
              height={350}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.section>

        {/* Attraverso il SAD, inoltre, si intende */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 grid md:grid-cols-2 gap-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center order-2 md:order-1"
          >
            <Image
              src="/images/domiciliare_sad/immagine_anziani.jpg" // Placeholder image
              alt="Attività del servizio"
              width={500}
              height={350}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
              Attraverso il SAD, inoltre, si intende
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Favorire la creazione di legami significativi e relazioni sociali e supportare la rete sociale esistente attraverso la programmazione di un insieme di servizi e prestazioni a tutela della persona fragile.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Promuovere una comunità sempre più responsabile verso le persone e le situazioni familiari più fragili.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Sviluppare servizi e interventi avviati in tema di promozione della domiciliarità e del lavoro di comunità.</span>
              </motion.li>
            </ul>
          </div>
        </motion.section>

        {/* IPAB Collaboration */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-lg rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
            Collaborazione con l'IPAB
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            L'IPAB collabora con il servizio sociale dell'Amministrazione Comunale nell'erogazione di questo servizio per mantenere il più a lungo possibile l'anziano nel suo "mondo" di appartenenza, evitandone l'istituzionalizzazione prima del tempo necessario.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ServizioAssistenzaDomiciliareSADPage;
