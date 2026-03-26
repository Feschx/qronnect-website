import React from 'react';
import { Mail, MessageCircle, Shield, Globe, Compass, ExternalLink, Instagram, CheckCircle2 } from 'lucide-react';

const App = () => {
  const primaryColor = "text-[#8B4513]"; // Terracotta/Warmes Braun
  const bgColor = "bg-[#FFF9F2]"; // Creme
  const accentColor = "bg-[#D2691E]"; // Schokolade/Orange-Braun

  const packages = [
    {
      title: 'Paket "Primeros Pasos"',
      type: 'REMOTE BERATUNG',
      description: 'Klärung aller Fragen vor dem Umzug. Wir besprechen Schulen, Wohnviertel und Sicherheitsaspekte.',
      details: 'ca. 3 Std. Videocall',
      price: '~ 150 - 200 EUR',
      icon: <Globe className="w-8 h-8 text-white" />
    },
    {
      title: 'Paket "Ritmo de Vida"',
      type: 'INTENSIV-GUIDING',
      description: 'Exklusives Wochenende vor Ort: Tanzkurs-Intro, lokale Märkte und die besten Insider-Bars.',
      details: 'Persönliche Begleitung',
      price: '~ 300 - 500 EUR',
      icon: <Compass className="w-8 h-8 text-white" />
    },
    {
      title: 'WhatsApp-Flatrate',
      type: 'SUPPORT & HILFE',
      description: 'Dein direkter Draht für schnelle Hilfe im Alltag. Schnelle Antworten auf tägliche Fragen.',
      details: 'Täglicher Support',
      price: '50 EUR / MONAT',
      icon: <MessageCircle className="w-8 h-8 text-white" />
    }
  ];

  const faqs = [
    {
      q: "Wie lange dauert die Beratung?",
      a: "Die Dauer hängt vom gewählten Paket ab. 'Primeros Pasos' bietet ca. 3 Stunden Videocall, während 'Ritmo de Vida' ein ganzes Wochenende umfasst."
    },
    {
      q: "Sind die Preise verhandelbar?",
      a: "Die Preise sind Festpreise für unsere Standardpakete. Für maßgeschneiderte Dienstleistungen erstellen wir gerne ein individuelles Angebot."
    },
    {
      q: "Was, wenn ich kein Spanisch spreche?",
      a: "Kein Problem! Unsere Beratung ist komplett auf Deutsch. Wir helfen dir, die Sprachbarriere zu überwinden."
    }
  ];

  return (
    <div className={`min-h-screen ${bgColor} font-sans text-gray-800`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8B4513] rounded-full flex items-center justify-center">
               <span className="text-white font-bold">Q</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#8B4513]">Qronnect</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#uber-uns" className="hover:text-orange-700 transition-colors">Über Uns</a>
            <a href="#pakete" className="hover:text-orange-700 transition-colors">Pakete</a>
            <a href="#faq" className="hover:text-orange-700 transition-colors">FAQ</a>
            <a href="#kontakt" className="hover:text-orange-700 transition-colors">Kontakt</a>
          </div>
          <a href="https://wa.me/524422712910" className={`${accentColor} text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all`}>
            Erstgespräch buchen
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&q=80&w=2070" 
            alt="Querétaro Los Arcos" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF9F2]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-6 tracking-widest uppercase">
            Dein Soft-Landing in Mexiko
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[#4A2C2A] leading-tight">
            Ankommen in <span className="text-[#D2691E]">Querétaro</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Vom ersten Behördengang bis zum ersten Salsa-Schritt. Wir begleiten deutsche Expats und ihre Familien für einen reibungslosen Start in QRO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pakete" className={`${accentColor} text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl`}>
              Unsere Leistungen
            </a>
            <a href="#uber-uns" className="bg-white border-2 border-[#8B4513] text-[#8B4513] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors">
              Wer ist Felix?
            </a>
          </div>
        </div>
      </header>

      {/* Über Uns Section */}
      <section id="uber-uns" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-orange-200 rounded-3xl overflow-hidden shadow-2xl">
                {/* WICHTIG: Ersetze diesen Platzhalter-Link durch dein echtes Foto.
                  Du kannst das Bild in deinen GitHub-Ordner hochladen (z.B. als 'felix.jpg')
                  und dann src="./felix.jpg" nutzen.
                */}
                 <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
                  alt="Felix Schmidt - Qronnect Gründer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-[#8B4513] font-bold italic">"Ich kenne die Stadt nicht nur, ich lebe sie."</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#4A2C2A]">Willkommen bei Qronnect</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ankommen ist mehr als nur ein Umzug. Zwischen Behördengängen geht oft das Wichtigste verloren: das Gefühl, wirklich zu Hause zu sein.
              </p>
              <h3 className="text-xl font-bold mb-4 text-[#D2691E]">Dein Gesicht hinter Qronnect: Felix Schmidt</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hallo, ich bin Felix! Vor zwei Jahren führte mich mein Weg für die Industrie nach Querétaro. Was beruflich begann, wurde zur persönlichen Leidenschaft. Als Ingenieur schätze ich Präzision – als leidenschaftlicher Tänzer die mexikanische Lebensfreude.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ich bin kein Theoretiker. Ich bin ein Brückenbauer, der tief in der Stadt verwurzelt ist und weiß, wie man in Mexiko echte Türen öffnet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-sm font-semibold">Bestens vernetzt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-sm font-semibold">2+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-sm font-semibold">Integrationsexperte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-sm font-semibold">Local Insider</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section id="pakete" className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#4A2C2A]">Unsere Leistungen</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Wähle die Unterstützung, die am besten zu deinem Umzug passt.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-[#FFF9F2] rounded-3xl p-8 border border-orange-100 flex flex-col h-full hover:shadow-xl transition-shadow group">
                <div className={`${accentColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <span className="text-xs font-bold text-orange-700 tracking-wider mb-4">{pkg.type}</span>
                <p className="text-gray-600 mb-6 flex-grow">{pkg.description}</p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-400 mb-2">{pkg.details}</p>
                  <p className="text-2xl font-bold text-[#8B4513] mb-6">{pkg.price}</p>
                  <a href="https://wa.me/524422712910" className="block w-full py-3 bg-white border-2 border-orange-200 rounded-xl font-bold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                    Auswählen
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-[#Fdf7f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#4A2C2A]">Häufig gestellte Fragen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50">
                <h4 className="font-bold text-lg mb-4 text-[#8B4513]">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#4A2C2A]">Kontaktiere Qronnect</h2>
          <p className="text-gray-600 mb-12 text-lg">Bereit für dein mexikanisches Abenteuer? Schreib uns direkt!</p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#FFF9F2] p-8 rounded-3xl border border-orange-100">
              <Mail className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">E-Mail</h4>
              <p className="text-gray-600 mb-4">Schreib uns dein Anliegen</p>
              <a href="mailto:qronnect@outlook.com" className="text-xl font-bold text-[#8B4513] break-all">qronnect@outlook.com</a>
            </div>
            <div className="bg-[#FFF9F2] p-8 rounded-3xl border border-orange-100">
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">WhatsApp</h4>
              <p className="text-gray-600 mb-4">Dein direkter Draht zu Felix</p>
              <a href="https://wa.me/524422712910" className="text-xl font-bold text-[#8B4513]">+52 442 271 2910</a>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl inline-block">
            <p className="font-bold text-[#8B4513]">Bürozeiten: <span className="font-normal text-gray-600 ml-2">nach Vereinbarung</span></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A2C2A] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
               <span className="text-[#4A2C2A] font-bold text-xl">Q</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Qronnect</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://instagram.com" className="hover:text-orange-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <p className="text-orange-200/60 text-sm">
            © 2026 Qronnect - Felix Schmidt. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;