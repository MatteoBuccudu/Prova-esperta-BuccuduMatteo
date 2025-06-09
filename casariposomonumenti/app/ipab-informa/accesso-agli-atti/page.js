"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AccessoAgliAttiPage = () => {
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
          src="/images/accesso_atti/hero.jpg" // Placeholder image
          alt="Accesso agli Atti Hero"
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
            ACCESSO AGLI ATTI
          </h1>
        </motion.div>
      </div>

      {/* Main Content - Empty or minimal */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <p className="text-center text-gray-600">
          Il servizio consente la consultazione degli atti amministrativi in
          corso di pubblicazione all'Albo Pretorio on-line, nonché degli atti la
          cui pubblicazione è scaduta.
        </p>
      </div>
    </motion.div>
  );
};

export default AccessoAgliAttiPage;
