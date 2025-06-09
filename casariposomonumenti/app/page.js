import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventiENews from "@/components/EventiENews";
export default function Home() {
  return (
    <>
      <Navbar
        testo1="Homepage"
        testo2="SERVIZI"
        testo3="PERCHE' L'IPAB"
        testo4="I.P.A.B. informa"
        testo5="Sostienici"
        testo6="Accessi riservati"
        telefonoSuMisura="+39 041 1234567"
        faxSuMisura="+39 041 1234567"
        serviziProfessionali="Servizi Professionali"
        emailSuMisura="info@example.com"
        telefonoIndividuali="+39 041 1234567"
        emailIndividuali="info@example.com"
        linguaItaliano="IT"
        linguaInglese="EN"
        linguaTedesco="DE"
        linguaFrancese="FR"
        linguaSpagnolo="ES"
        titoloDoge="Doge di Venezia"
        titoloHome="Home"
        titoloEscursioni="Escursioni"
        titoloServizi="Servizi"
        titoloChiSiamo="Chi Siamo"
        titoloFlotta="La Flotta"
        titoloNews="News"
        testoContattiSuMisura="Contatti Su Misura"
        maildogedivenezia="info@dogedivenezia.it"
        numeroditelefono="+39 041 1234567"
        testoContattiIndividuali="Contatti Individuali"
        selettorelinguaITA="IT"
        selettorelinguaENG="EN"
        selettorelinguaDE="DE"
        selettorelinguaFR="FR"
        selettorelinguaES="ES"
        numerodicellulare="+39 041 1234567"
        testoescursionigiornaliere="Escursioni Giornaliere"
        posizioneDOGE="Venezia"
        testoTelefono="Telefono"
        mailAPI="api@example.com"
        testoFax="Fax"
        testoEmail="Email"
        testoSocial="Social"
        logoUrl="/images/logo.png"
      />
      <EventiENews/>
    </>
  );
}
