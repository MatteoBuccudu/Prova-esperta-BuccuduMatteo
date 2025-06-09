"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const VisionEMissionPage = () => {
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
          src="/images/vision_mission/hero.jpg" // Placeholder image
          alt="Vision e Mission Hero"
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
            LA NASCITA DELL'IPAB
          </h1>

        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Cos'è oggi l'IPAB */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 bg-white shadow-lg rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-[#1F426E] mb-6 border-b-2 border-[#1F426E] pb-3">
            COS'E' OGGI L'IPAB
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            L'IPAB di oggi è un Centro Servizi con obiettivo fondamentale quello del raggiungimento ed il mantenimento del miglior livello possibile della qualità di vita degli utenti, valorizzando ogni risorsa psico-fisica e ogni potenzialità residua, al fine di favorire l'autonomia, le relazioni familiari e sociali, per tramite anche della fattiva collaborazione delle associazioni di volontariato del nostro territorio.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default VisionEMissionPage;
