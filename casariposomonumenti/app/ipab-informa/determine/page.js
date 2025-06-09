"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DeterminePage = () => {
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
          className="text-5xl md:text-6xl font-extrabold text-[#1F426E] mb-2 leading-tight tracking-wider"
        >
          Atti amministrativi
        </motion.h1>
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-[#1F426E] mb-8 border-b-2 border-[#1F426E] pb-3"
        >
          Determine
        </motion.h2>

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
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            CSV
          </button>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="overflow-x-auto bg-white shadow-lg rounded-xl"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Unità organizzativa
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reg.Gen.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data Reg. Gen.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Oggetto
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  DETERMINAZIONE
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  4
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  29/03/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  AFFIDAMENTO DIRETTO PER ELABORAZIONE CEDOLINI AMMINISTRATORI E
                  ADEMPIMENTI OBBLI...
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  DETERMINAZIONE
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  29/03/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO
                  ASSISTENTI FAMILIARI FI...
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  DETERMINAZIONE
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  19/02/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  PRESA D'ATTO DIFFIDA VIOLAZIONI FORMALI IN CUMULO MATERIALE
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  DETERMINAZIONE
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  05/02/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  AFFIDAMENTO DIRETTO PER RINNOVO CONTRATTO ANNUALE DI
                  MANUTENZIONE ED ASSISTENZA...
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  DETERMINAZIONE
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  45
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  21/12/2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  PROROGA DEL SERVIZIO DI ASSISTENZA SOCIALE PRESSO LO SPORTELLO
                  ASSISTENTI FAMILIARI FI...
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DeterminePage;
