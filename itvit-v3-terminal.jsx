import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Blinking cursor effect for navbar logo
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      filename: 'netwerk.cfg',
      title: 'Netwerkinfrastructuur',
      description: 'Ontwerp, implementatie en beheer van robuuste netwerken — van LAN/WAN tot SD-WAN.'
    },
    {
      id: 2,
      filename: 'cloud.sh',
      title: 'Cloudoplossingen',
      description: 'Naadloze migratie en beheer van cloudomgevingen op Azure, AWS en hybride platformen.'
    },
    {
      id: 3,
      filename: 'security.exe',
      title: 'Cyberbeveiliging',
      description: 'End-to-end beveiligingsaudits, firewallbeheer en bedreigingsbeheersing.'
    },
    {
      id: 4,
      filename: 'managed-it.service',
      title: 'Beheerde IT-diensten',
      description: 'Proactieve monitoring, onderhoud en ondersteuning van uw volledige IT-omgeving.'
    },
    {
      id: 5,
      filename: 'advies.md',
      title: 'IT-advies',
      description: 'Strategisch IT-advies afgestemd op uw bedrijfsdoelstellingen en digitale transformatie.'
    },
    {
      id: 6,
      filename: 'training.log',
      title: 'IT-training',
      description: 'Maatwerk trainingsprogramma\'s en onboardingworkflows voor uw team.'
    }
  ];

  return (
    <div className="bg-black text-white font-mono scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black border-b border-green-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-500">
                &gt; itvit_<span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>▌</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-green-400 hover:text-green-300 transition text-sm">
                $ ./home
              </a>
              <a href="#diensten" className="text-green-400 hover:text-green-300 transition text-sm">
                $ ls /diensten
              </a>
              <a href="#about" className="text-green-400 hover:text-green-300 transition text-sm">
                $ cat /about
              </a>
              <a href="#contact" className="text-green-400 hover:text-green-300 transition text-sm">
                $ ./contact
              </a>
              <button className="bg-green-500 text-black px-4 py-2 rounded font-bold hover:bg-green-400 transition text-sm">
                [▶ ./contact]
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-green-500 hover:text-green-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-green-900 py-4 space-y-3 bg-black">
              <a href="#home" className="block text-green-400 hover:text-green-300 py-2">
                $ ./home
              </a>
              <a href="#diensten" className="block text-green-400 hover:text-green-300 py-2">
                $ ls /diensten
              </a>
              <a href="#about" className="block text-green-400 hover:text-green-300 py-2">
                $ cat /about
              </a>
              <a href="#contact" className="block text-green-400 hover:text-green-300 py-2">
                $ ./contact
              </a>
              <button className="w-full bg-green-500 text-black px-4 py-2 rounded font-bold hover:bg-green-400 transition">
                [▶ ./contact]
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Terminal Window */}
          <div className="bg-black border-2 border-green-500 rounded-lg p-6 mb-8 shadow-lg shadow-green-500/20">
            <div className="text-green-400 text-sm sm:text-base leading-relaxed font-mono">
              <div className="mb-3">
                <span className="text-green-500">$</span> whoami
              </div>
              <div className="text-white mb-6 pl-4">ITVIT IT-Solutions</div>

              <div className="mb-3">
                <span className="text-green-500">$</span> cat missie.txt
              </div>
              <div className="text-white mb-6 pl-4">Uw IT. Onze Expertise.</div>

              <div className="mb-3">
                <span className="text-green-500">$</span> ping klanten.nl --count=150
              </div>
              <div className="text-white mb-6 pl-4">150+ tevreden klanten — Pakketverlies: 0%</div>

              <div className="mb-3">
                <span className="text-green-500">$</span> uptime
              </div>
              <div className="text-white mb-6 pl-4">
                Beschikbaarheid: 99,9% 
                <span className="ml-2 inline-block">████████████████████</span> ONLINE
              </div>

              <div>
                <span className="text-green-500">$</span> <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>▌</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <button className="bg-green-500 text-black font-bold px-6 py-3 rounded hover:bg-green-400 transition text-sm sm:text-base">
              [▶ ./diensten.sh]
            </button>
            <button className="border-2 border-green-500 text-green-400 font-bold px-6 py-3 rounded hover:bg-green-500/10 transition text-sm sm:text-base">
              [-- contact --]
            </button>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-950 border border-green-500/30 rounded p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500">150+</div>
              <div className="text-xs sm:text-sm text-gray-400">Klanten</div>
            </div>
            <div className="bg-gray-950 border border-green-500/30 rounded p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500">60+</div>
              <div className="text-xs sm:text-sm text-gray-400">Medewerkers</div>
            </div>
            <div className="bg-gray-950 border border-green-500/30 rounded p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500">10+</div>
              <div className="text-xs sm:text-sm text-gray-400">Jaren ervaring</div>
            </div>
            <div className="bg-gray-950 border border-green-500/30 rounded p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-500">99,9%</div>
              <div className="text-xs sm:text-sm text-gray-400">Beschikbaarheid</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="diensten" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-green-500 font-mono">
            $ ls -la /diensten/
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-950 border-l-4 border-green-500 hover:border-green-400 transition p-6 rounded group"
              >
                <div className="text-green-400 text-xs mb-2 font-mono group-hover:text-green-300 transition">
                  {service.filename}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-green-500 text-xs font-mono">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  STATUS: ONLINE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-green-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                <span className="text-green-500">&gt;</span> ITVIT IT-Solutions is uw partner in digitale transformatie. Met meer dan 10 jaar ervaring ondersteunen wij bedrijven van alle groottes in hun IT-ambities.
              </p>
              <p>
                <span className="text-green-500">&gt;</span> Ons team van experts combineert technische diepgang met zakelijk inzicht, zodat wij oplossingen bieden die echt werken.
              </p>
              <p>
                <span className="text-green-500">&gt;</span> Van netwerkinfrastructuur tot cyberbeveiliging, van cloud-migratie tot beheerde diensten — wij hebben de expertise.
              </p>
              <p>
                <span className="text-green-500">&gt;</span> Onze missie is simpel: uw IT uit het hoofd nemen, zodat u zich kunt focussen op wat echt telt.
              </p>
            </div>

            {/* Right Column - System Info */}
            <div className="bg-gray-950 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-green-500 font-mono text-sm mb-6">system-info --status</h3>

              {/* CPU Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">CPU: Technische kennis</span>
                  <span className="text-green-500">98%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '98%' }}></div>
                </div>
              </div>

              {/* UPTIME Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">UPTIME: 10+ jaar</span>
                  <span className="text-green-500">100%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* KLANTEN Bar */}
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">KLANTEN: 60+ tevredenen</span>
                  <span className="text-green-500">94%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-green-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-green-500 font-mono">
            $ ./contact
          </h2>

          <form className="space-y-6">
            {/* Naam Field */}
            <div>
              <label className="text-green-500 text-sm font-mono mb-2 block">
                $ input --field=naam
              </label>
              <input
                type="text"
                placeholder="Uw naam"
                className="w-full bg-gray-950 border border-green-500/30 focus:border-green-500 focus:outline-none rounded px-4 py-3 text-white font-mono text-sm placeholder-gray-600 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-green-500 text-sm font-mono mb-2 block">
                $ input --field=email
              </label>
              <input
                type="email"
                placeholder="uw@email.com"
                className="w-full bg-gray-950 border border-green-500/30 focus:border-green-500 focus:outline-none rounded px-4 py-3 text-white font-mono text-sm placeholder-gray-600 transition"
              />
            </div>

            {/* Bedrijf Field */}
            <div>
              <label className="text-green-500 text-sm font-mono mb-2 block">
                $ input --field=bedrijf
              </label>
              <input
                type="text"
                placeholder="Uw bedrijf"
                className="w-full bg-gray-950 border border-green-500/30 focus:border-green-500 focus:outline-none rounded px-4 py-3 text-white font-mono text-sm placeholder-gray-600 transition"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="text-green-500 text-sm font-mono mb-2 block">
                $ input --field=bericht
              </label>
              <textarea
                placeholder="Uw bericht..."
                rows="5"
                className="w-full bg-gray-950 border border-green-500/30 focus:border-green-500 focus:outline-none rounded px-4 py-3 text-white font-mono text-sm placeholder-gray-600 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-black font-bold py-3 rounded hover:bg-green-400 transition font-mono text-sm"
            >
              [▶ ./verstuur.sh]
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-green-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-xs font-mono">
          © 2026 ITVIT IT-Solutions :: All systems operational :: NL
        </div>
      </footer>
    </div>
  );
}
