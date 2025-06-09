"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EventiENews = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Qualche breve cenno alla Storia dell'IPAB "MONUMENTO AI CADUTI IN GUERRA". Dopo l'annessione del Veneto all'Italia, l'Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad ora: organo Principe divenne il Consiglio comunale, il Sindaco era di nomina regia, ma scelto tra i consiglieri ed affiancato da una Giunta di Assessore eletti dal Consiglio comunale tra i propri membri. A livello nazionale nel 1882 si ammettono all'elettorato politico tutti i cittadini maggiorenni che superino l'esame del corso scolastico obbligatorio oppure paghino un censo di 19,80 lire. Subito dopo nel 1915 diviene elettore amministrativo di un comune chi è cittadino italiano, ha compiuto 21 anni, ha la residenza nel comune ovvero paga nel comune un censo, e contro il quale non siano insorte cause di esclusione per incapacità o indegnità.`;
  const truncatedText = fullText.substring(0, 300) + '...'; // Truncate to first 300 characters for example

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-40">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sezione Presentazione */}
        <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col">
          <h2 className="text-4xl font-extrabold text-[#1F426E] mb-6 border-b-4 border-[#1F426E] pb-4">
            Eventi e News
          </h2>
          
          <div className="mb-6 flex justify-start">
            <Image 
              src="/images/ipab.jpg"
              alt="Eventi e News" 
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="text-gray-700 leading-relaxed flex-grow">
            <p className="mb-4 text-lg">
              {isExpanded ? fullText : truncatedText}
            </p>
            
            <button 
              onClick={toggleExpand}
              className="inline-flex items-center text-[#1F426E] hover:text-[#2A5594] transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {isExpanded ? 'Mostra meno' : 'Continua a leggere'}
              <span className="ml-2 text-sm">→</span>
            </button>
          </div>
        </div>

        {/* Sezione Quick Links */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ), 
              label: "Amministrazione trasparente", 
              href: "/ipab-informa/amministrazione-trasparente" 
            },
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ), 
              label: "Albo pretorio online", 
              href: "/ipab-informa/albo-pretorio" 
            },
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ), 
              label: "Contatti", 
              href: "/contatti" 
            },
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              ), 
              label: "PagoPA", 
              href: "/pagopa" 
            }
          ].map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {link.icon}
              <span className="text-xl font-bold text-[#1F426E]">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventiENews; 