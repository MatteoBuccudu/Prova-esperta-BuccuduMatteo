"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PrivacyPage = () => {
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
          src="/images/privacy/hero.jpg" // Placeholder image
          alt="Privacy Hero"
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
            PRIVACY
          </h1>
        </motion.div>
      </div>

      {/* Main Content - Empty or minimal */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <p className="text-center text-gray-600">
          Scarica la nostra privacy di un file.
        </p>
        <motion.a
          href="/images/privacy/privacy.pdf" // Percorso del file PDF della privacy
          download
          className="mt-8 px-8 py-3 bg-[#1F426E] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#153358] transition-colors duration-300 mx-auto block w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Scarica la Privacy
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;
