"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AmministrazioneTrasparentePage = () => {
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
          Amministrazione Trasparente
        </motion.h1>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-lg rounded-xl p-8 md:p-12 text-lg leading-relaxed text-gray-700"
        >
          <p>
            In questa sezione sono pubblicati, raggruppati secondo le indicazioni di legge, documenti, informazioni e dati concernenti l'organizzazione dell'amministrazione, le attivita' e le sue modalita' di realizzazione.
          </p>
          <p className="mt-4">
            Il decreto legislativo 14 marzo 2013 n. 33 recante disposizioni in materia di "Riordino della disciplina riguardante gli obblighi di pubblicità, trasparenza e diffusione di informazioni da parte delle pubbliche amministrazioni", introduce le seguenti novità:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>viene istituito l'obbligo di pubblicità: delle situazioni patrimoniali di politici, e parenti entro il secondo grado; degli atti dei procedimenti di approvazione dei piani regolatori e delle varianti urbanistiche; dei dati, in materia sanitaria, relativi alle nomine dei direttori generali, oltre che agli accreditamenti delle strutture cliniche.</li>
            <li>viene data una definizione del principio generale di trasparenza: accessibilità totale delle informazioni che riguardano l'organizzazione e l'attività delle P.A., allo scopo di favorire forme diffuse di controllo sul perseguimento delle funzioni istituzionali e sull'utilizzo delle risorse pubbliche.</li>
            <li>si stabilisce il principio della totale accessibilità delle informazioni. Il modello di ispirazione è quello del Freedom of Information Act statunitense, che garantisce l'accessibilità di chiunque lo richieda a qualsiasi documento o dato in possesso delle P.A., salvo i casi in cui la legge lo esclude espressamente (es. per motivi di sicurezza).</li>
            <li>viene introdotto un nuovo istituto: il diritto di accesso civico. Questa nuova forma di accesso mira ad alimentare il rapporto di fiducia tra cittadini e P.A. e a promuovere il principio di legalità (e prevenzione della corruzione). In sostanza, tutti i cittadini hanno diritto di chiedere e ottenere che le P.A. pubblichino atti, documenti e informazioni che detengono e che, per qualsiasi motivo, non hanno ancora divulgato.</li>
            <li>si prevede l'obbligo per i siti istituzionali di creare un'apposita sezione - «Amministrazione trasparente» - nella quale inserire tutto quello che stabilisce il provvedimento.</li>
            <li>viene disciplinato il Piano triennale per la trasparenza e l'integrità – che è parte integrante del Piano di prevenzione della corruzione – e che deve indicare le modalità di attuazione degli obblighi di trasparenza e gli obiettivi collegati con il piano della performance.</li>
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {[            "BANDI DI GARA",
            "Disposizioni generali",
            "Consulenti e collaboratori",
            "Personale",
            "Bandi di concorso",
            "Enti controllati",
            "Performance",
            "Attività e procedimenti",
            "Organizzazione",
            "Provvedimenti",
            "Bandi di gara e contratti",
            "Sovvenzioni, contributi, sussidi, vantaggi economici",
            "Bilanci",
            "Beni immobili e gestione patrimonio",
            "Controlli e rilievi sull'amministrazione",
            "Servizi erogati",
            "Pagamenti dell'amministrazione",
            "Opere pubbliche",
            "Pianificazione e governo del territorio",
            "Strutture sanitarie private accreditate",
            "Interventi straordinari e di emergenza",
            "Altri contenuti",
            "Altri contenuti - Dati ulteriori",
            "Altri contenuti - Prevenzione della Corruzione",
            "Altri contenuti - Accesso civico",
            "Altri contenuti - Accessibilità e Catalogo di dati, metadati e banche dati",
            "Sotto-sezioni eliminate dal D.Lgs 97/2016",          ].map((item, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center transition-transform transform hover:scale-105 cursor-pointer"
            >
              <span className="text-lg font-semibold text-gray-800">{item}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1F426E]"
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
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AmministrazioneTrasparentePage;
