"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AlboPretorioPage = () => {
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
      <div className="container mx-auto px-4 py-16 max-w-6xl mt-40">
        <motion.h1
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold text-[#1F426E] mb-8 text-center leading-tight tracking-wider"
        >
          Albo pretorio
        </motion.h1>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-end space-x-4"
        >
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Cerca
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Storico
          </button>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="overflow-x-auto bg-white shadow-lg rounded-xl mb-8"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Numero pubblicazione
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Numero atto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data inizio
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data fine
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                >
                  Nessuna pubblicazione estratta
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="p-6 bg-blue-50 border-l-4 border-blue-400 text-blue-700 rounded-xl shadow-md"
        >
          <p className="text-sm md:text-base">
            Per leggere i file firmati digitalmente (estensione '.p7m') è
            necessario aver installato il software
            <a
              href="https://www.firma.infocert.it/software/dike.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline ml-1"
            >
              Dike (download)
            </a>
            .
          </p>
          <p className="text-sm md:text-base mt-2">
            Istruzioni per l'apertura di un file con firma digitale.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AlboPretorioPage;
