"use client";

import { useState } from "react";

export default function ExtranetLogin() {
  const [utente, setUtente] = useState("");
  const [password, setPassword] = useState("");
  const [pratica, setPratica] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/70 shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-extrabold text-[#1F426E] mb-2 text-center">Accedi alla extranet</h1>
        <div className="h-1 w-16 bg-gradient-to-r from-[#1F426E] to-[#2A5594] rounded-full mx-auto mb-8" />
        <form className="space-y-6">
          <div>
            <label className="block font-bold text-gray-700 mb-1">Utente</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Login"
                value={utente}
                onChange={e => setUtente(e.target.value)}
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#1F426E] focus:ring-2 focus:ring-[#1F426E]/30 outline-none transition-all bg-white placeholder-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#1F426E] focus:ring-2 focus:ring-[#1F426E]/30 outline-none transition-all bg-white placeholder-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">Rif. pratica</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Riferimento pratica"
                value={pratica}
                onChange={e => setPratica(e.target.value)}
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#1F426E] focus:ring-2 focus:ring-[#1F426E]/30 outline-none transition-all bg-white placeholder-gray-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-[#1F426E] to-[#2A5594] text-white font-bold text-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 tracking-wide"
          >
            ACCEDI
          </button>
        </form>
      </div>
    </div>
  );
}
