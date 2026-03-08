import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Bedankt voor uw bericht! We nemen binnenkort contact op.');
  };

  const services = [
    {
      icon: '🌐',
      title: 'Netwerkinfrastructuur',
      description: 'Ontwerp en beheer van robuuste netwerken — van LAN/WAN tot SD-WAN.'
    },
    {
      icon: '☁️',
      title: 'Cloudoplossingen',
      description: 'Migratie en beheer van cloudomgevingen op Azure, AWS en hybride platformen.'
    },
    {
      icon: '🔒',
      title: 'Cyberbeveiliging',
      description: 'Beveiligingsaudits, firewallbeheer en bedreigingsbeheersing voor uw organisatie.'
    },
    {
      icon: '🛡️',
      title: 'Beheerde IT-diensten',
      description: 'Proactieve monitoring en ondersteuning van uw volledige IT-omgeving.'
    },
    {
      icon: '💡',
      title: 'IT-advies',
      description: 'Strategisch advies voor uw IT-roadmap en digitale transformatie.'
    },
    {
      icon: '👥',
      title: 'IT-training',
      description: 'Maatwerk trainingsprogramma\'s en onboarding voor uw medewerkers.'
    }
  ];

  const aboutPoints = [
    'Gecertificeerde Microsoft-partner',
    'ISO 27001 gecertificeerd',
    ' 24/7 ondersteuning beschikbaar',
    'Zes jaar jarenlange expertise'
  ];

  const NavBar = () => (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded"></div>
            <span className="font-bold text-blue-900 text-lg">ITVIT</span>
            <span className="text-gray-600 font-normal text-sm">IT-Solutions</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-blue-900 hover:text-blue-700 transition">Diensten</a>
            <a href="#about" className="text-blue-900 hover:text-blue-700 transition">Over ons</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-700 transition">Contact</a>
            <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
              Plan een gesprek
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-blue-900" /> : <Menu size={24} className="text-blue-900" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <a href="#services" className="block py-2 text-blue-900 hover:text-blue-700">Diensten</a>
            <a href="#about" className="block py-2 text-blue-900 hover:text-blue-700">Over ons</a>
            <a href="#contact" className="block py-2 text-blue-900 hover:text-blue-700">Contact</a>
            <button className="w-full mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
              Plan een gesprek
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const NetworkDiagram = () => (
    <svg viewBox="0 0 300 300" className="w-full h-auto mb-8">
      {/* Connecting lines */}
      <line x1="150" y1="50" x2="100" y2="120" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="150" y1="50" x2="200" y2="120" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="100" y1="120" x2="50" y2="200" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="100" y1="120" x2="150" y2="200" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="200" y1="120" x2="150" y2="200" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="200" y1="120" x2="250" y2="200" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="150" y1="200" x2="50" y2="250" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>
      <line x1="150" y1="200" x2="250" y2="250" stroke="#1e3a8a" strokeWidth="2" opacity="0.3"/>

      {/* Central node */}
      <circle cx="150" cy="50" r="16" fill="#1e3a8a"/>
      <circle cx="150" cy="50" r="14" fill="#3b82f6"/>

      {/* Upper left */}
      <circle cx="100" cy="120" r="12" fill="#1e3a8a"/>
      <circle cx="100" cy="120" r="10" fill="#60a5fa"/>

      {/* Upper right */}
      <circle cx="200" cy="120" r="12" fill="#1e3a8a"/>
      <circle cx="200" cy="120" r="10" fill="#60a5fa"/>

      {/* Middle center */}
      <circle cx="150" cy="200" r="14" fill="#1e3a8a"/>
      <circle cx="150" cy="200" r="12" fill="#3b82f6"/>

      {/* Lower left */}
      <circle cx="50" cy="200" r="10" fill="#1e3a8a"/>
      <circle cx="50" cy="200" r="8" fill="#93c5fd"/>

      {/* Lower center-left */}
      <circle cx="50" cy="250" r="9" fill="#1e3a8a"/>
      <circle cx="50" cy="250" r="7" fill="#93c5fd"/>

      {/* Lower right */}
      <circle cx="250" cy="200" r="10" fill="#1e3a8a"/>
      <circle cx="250" cy="200" r="8" fill="#93c5fd"/>

      {/* Lower center-right */}
      <circle cx="250" cy="250" r="9" fill="#1e3a8a"/>
      <circle cx="250" cy="250" r="7" fill="#93c5fd"/>
    </svg>
  );

  const Hero = () => (
    <section className="bg-white pt-16 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Betrouwbare IT voor groeiende bedrijven.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wij helpen uw organisatie groeien met veilige, schaalbare en innovatieve IT-oplossingen op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition flex items-center justify-center gap-2">
                Onze diensten <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                Neem contact op
              </button>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <NetworkDiagram />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-blue-900">150+</div>
                  <div className="text-sm text-gray-600">Projecten afgerond</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-blue-900">99,9%</div>
                  <div className="text-sm text-gray-600">Uptime garantie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const TrustBar = () => (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8">
          Technologie Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-semibold text-gray-700">
          <span>Cisco</span>
          <span className="text-gray-300">|</span>
          <span>Microsoft</span>
          <span className="text-gray-300">|</span>
          <span>VMware</span>
          <span className="text-gray-300">|</span>
          <span>FortiGate</span>
          <span className="text-gray-300">|</span>
          <span>HPE</span>
          <span className="text-gray-300">|</span>
          <span>Azure</span>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Onze Diensten</h2>
          <div className="w-12 h-1 bg-amber-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="border border-gray-200 border-l-4 border-l-blue-700 rounded-xl p-6 hover:shadow-md transition bg-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contact" className="text-amber-500 font-semibold hover:text-amber-600 transition flex items-center gap-1">
                Meer info <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Over ITVIT</h2>
            <p className="text-gray-700 mb-4">
              ITVIT IT-Solutions is uw vertrouwde partner voor complete IT-infrastructuur en beheerde services. 
              Met meer dan zes jaar ervaring helpen we bedrijven van alle maten hun IT-ambities waar te maken.
            </p>
            <p className="text-gray-700 mb-8">
              Onze team van gecertificeerde specialisten staat klaar om uw organisatie 24/7 te ondersteunen, 
              van strategische planning tot operationele excellence.
            </p>

            <div className="space-y-3">
              {aboutPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Opgericht</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">2018</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 uppercase tracking-widest">Locatie</p>
                <p className="text-lg text-gray-800 mt-2">Nederland</p>
              </div>
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Reactietijd</p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">&lt; 4 uur</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Klantbehoud</p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">94%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Uptime</p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">99,9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Contact</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">E-mail</p>
                  <a href="mailto:info@itvit.nl" className="text-lg text-gray-800 hover:text-blue-900 transition">
                    info@itvit.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Telefoon</p>
                  <a href="tel:+31203700123" className="text-lg text-gray-800 hover:text-blue-900 transition">
                    +31 (0)20 3700 123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Adres</p>
                  <p className="text-lg text-gray-800">
                    Zuidas Business Center<br/>
                    Amsterdam, Nederland
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Stuur ons een bericht</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  Uw naam
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                  placeholder="Jan Jansen"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                  placeholder="jan@bedrijf.nl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                  placeholder="+31 (0)20 1234 567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">
                  Bericht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition resize-none"
                  placeholder="Beschrijf uw IT-vraag of project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition font-semibold"
              >
                Verstuur bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded"></div>
              <span className="font-bold text-lg">ITVIT</span>
            </div>
            <p className="text-blue-100 text-sm">
              IT-Solutions partner voor bedrijven die groeien. Betrouwbare, veilige en innovatieve IT-infrastructuur.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Snelle links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#services" className="hover:text-white transition">Diensten</a></li>
              <li><a href="#about" className="hover:text-white transition">Over ons</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy & Security</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact informatie</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="mailto:info@itvit.nl" className="hover:text-white transition">info@itvit.nl</a>
              </li>
              <li>
                <a href="tel:+31203700123" className="hover:text-white transition">+31 (0)20 3700 123</a>
              </li>
              <li>Zuidas Business Center<br/>Amsterdam, Nederland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <p className="text-center text-sm text-blue-700">
            &copy; 2026 ITVIT IT-Solutions. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
