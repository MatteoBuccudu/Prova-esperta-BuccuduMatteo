"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CentroDiurnoAnchisePage = () => {
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
          src="/images/centro_diurno_anchise/hero.jpg" // Placeholder image
          alt="Centro Diurno Anchise Hero"
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
            CENTRO DIURNO "ANCHISE"
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Un ambiente sereno e stimolante per il benessere dei nostri anziani.
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
            Il centro diurno è un servizio territoriale di tipo
            semi-residenziale rivolto prevalentemente ad anziani con vario grado
            di non autosufficienza, con prevalente disturbo cognitivo. Offriamo
            un ambiente accogliente e professionale, dove ogni ospite riceve
            cure personalizzate e stimolanti.
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
              Obiettivi del servizio
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Sostegno e sollievo ai familiari e alla rete sociale di
                  supporto.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Contrastare fenomeni di isolamento e solitudine.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Potenziare, mantenere e/o compensare abilità e competenze
                  relative alla sfera dell'autonomia, dell'identità e
                  dell'orientamento spazio-temporale, delle relazioni
                  interpersonali e della socializzazione.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Potenziare la rete di servizi per le persone anziane,
                  proponendo interventi personalizzati, con progetti specifici
                  rispondenti ai bisogni dei singoli.
                </span>
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
              src="/images/centro_diurno_anchise/anziano_carte.jpg" // Placeholder image
              alt="Obiettivi del servizio"
              width={500}
              height={350}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.section>

        {/* Attività del servizio */}
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
              src="/images/centro_diurno_anchise/anziani_abbraccio.jpg" // Placeholder image
              alt="Attività del servizio"
              width={500}
              height={350}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
              Attività del servizio
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Assistenza tutelare diurna.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Igiene e cura della persona, con stimolazione delle capacità
                  residue.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Somministrazione di colazione, pranzo e merenda con aiuto
                  nell'alimentazione.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Attività ricreative, culturali, occupazionali, per il
                  mantenimento delle capacità espressive e relazionali,
                  compatibilmente con le condizioni psico-fisiche.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Attività terapeutico riabilitativa-fisioterapica.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>
                  Supporto psicologico e sociale sia agli utenti che ai
                  familiari.
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span>Assistenza sanitaria.</span>
              </motion.li>
            </ul>
          </div>
        </motion.section>

        {/* Figure professionali */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-lg rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
            Le figure professionali
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
            {[
              "Coordinatore responsabile",
              "Infermiere professionale",
              "Operatore socio-sanitario",
              "Assistente sociale",
              "Educatore professionale",
              "Fisioterapista",
              "Psicologo",
            ].map((role, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center"
              >
                <span>{role}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default CentroDiurnoAnchisePage;
