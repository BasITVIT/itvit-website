import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const services = [
    {
      title: 'Netwerkinfrastructuur',
      description: 'Robuuste en schaalbare netwerkoplossingen voor uw bedrijf',
      gradient: 'from-violet-500 to-indigo-600'
    },
    {
      title: 'Cloudoplossingen',
      description: 'Veilige en efficiënte cloud migratie en beheer',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cyberbeveiliging',
      description: 'Geavanceerde bescherming tegen digitale dreigingen',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Beheerde IT-diensten',
      description: '24/7 monitoring en ondersteuning van uw systemen',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'IT-advies',
      description: 'Strategische IT-raadgeving voor groei en innovatie',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'IT-training & Onboarding',
      description: 'Trainingen en ondersteuning voor uw team',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            </div>
            <div>
              <p className="text-white font-black text-lg">ITVIT</p>
              <p className="text-violet-300 text-xs font-semibold">IT-Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/70 hover:text-white transition-colors">Diensten</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">Over ons</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Aan de slag
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Blobs */}
        <div className="absolute rounded-full blur-3xl opacity-20 bg-purple-600 w-96 h-96 top-20 left-1/4"></div>
        <div className="absolute rounded-full blur-3xl opacity-20 bg-blue-600 w-80 h-80 bottom-1/4 right-1/4"></div>
        <div className="absolute rounded-full blur-3xl opacity-20 bg-pink-600 w-72 h-72 top-1/2 right-10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur">
                <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  IT-advies & Oplossingen · Nederland
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              <span className="text-white">WIJ BOUWEN</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">DE IT-BASIS</span>
              <br />
              <span className="text-white">VAN UW BEDRIJF.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-purple-200 text-lg md:text-xl mb-10 max-w-xl">
              Wij leveren op maat gemaakte IT-oplossingen die uw bedrijf vooruit helpen. Van cloud tot cyberbeveiliging, wij hebben alles wat u nodig hebt.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:opacity-90 transition-all transform hover:scale-105">
                Maak een afspraak
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur">
                Bekijk onze diensten
              </button>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Stat Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <p className="text-3xl font-black text-white mb-2">150+</p>
              <p className="text-purple-200 text-sm">Projecten opgeleverd</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <p className="text-3xl font-black text-white mb-2">99,9%</p>
              <p className="text-purple-200 text-sm">Uptime gegarandeerd</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">★</span>
              </div>
              <p className="text-3xl font-black text-white mb-2">60+</p>
              <p className="text-purple-200 text-sm">Tevreden klanten</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-violet-400 text-xs font-black uppercase tracking-widest mb-2">WAT WIJ DOEN</p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Onze Diensten</h2>
            <p className="text-purple-300 text-lg">IT-oplossingen die écht werken.</p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <span className="text-white text-xl font-bold">◆</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-purple-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-violet-400 text-xs font-black uppercase tracking-widest mb-4">OVER ONS</p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Gebouwd door engineers.</h2>

            {/* Pull Quote */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-purple-200 italic text-lg">
                "Wij geloven in het bouwen van duurzame IT-oplossingen die echt werken. Met meer dan 150 projecten op onze naam, weten wij hoe je technologie inzet voor echte bedrijfsgroei."
              </p>
            </div>

            {/* Paragraphs */}
            <p className="text-purple-300 mb-4">
              ITVIT is opgericht door ervaren IT-engineers met een passie voor innovatie. Wij combineren technische expertise met een diep inzicht in zakelijke processen.
            </p>
            <p className="text-purple-300 mb-8">
              Onze aanpak is altijd gericht op duurzaamheid, veiligheid en schaalbaarheid. Wij zijn niet alleen leveranciers, maar partners in uw digitale transformatie.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3">
              {['Cloud Computing', 'Cyberbeveiliging', 'Netwerkinfra', 'Automation'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-purple-200 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Metrics Card */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-white mb-8">Onze prestaties</h3>

            {/* Metric 1 */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-white font-bold">Klantbehoud</span>
                <span className="text-violet-300 font-bold">94%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: '94%' }}></div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-white font-bold">Uptime</span>
                <span className="text-violet-300 font-bold">99,9%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: '99.9%' }}></div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-white font-bold">Projecten success</span>
                <span className="text-violet-300 font-bold">97%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: '97%' }}></div>
              </div>
            </div>

            {/* Metric 4 */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-white font-bold">Klanttevredenheid</span>
                <span className="text-violet-300 font-bold">96%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0" style={{ background: "rgba(139,92,246,0.1)" }}></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-12">
            Klaar voor het volgende niveau?
          </h2>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Uw naam</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jan Jansen"
                  className="w-full px-6 py-3 bg-white/5 border border-white/20 focus:border-violet-500 text-white placeholder-white/30 rounded-xl focus:outline-none transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Uw e-mailadres</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jan@bedrijf.nl"
                  className="w-full px-6 py-3 bg-white/5 border border-white/20 focus:border-violet-500 text-white placeholder-white/30 rounded-xl focus:outline-none transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">Uw bericht</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Vertel ons meer over uw IT-uitdagingen..."
                  rows="5"
                  className="w-full px-6 py-3 bg-white/5 border border-white/20 focus:border-violet-500 text-white placeholder-white/30 rounded-xl focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
              >
                Stuur uw bericht
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/30 backdrop-blur border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            </div>
            <div>
              <p className="text-white font-black text-lg">ITVIT</p>
              <p className="text-violet-300 text-xs font-semibold">IT-Solutions</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/40 text-sm">
              © 2026 ITVIT IT-Solutions. Alle rechten voorbehouden.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-6">
            <a href="#services" className="text-white/40 hover:text-violet-400 transition-colors text-sm">
              Diensten
            </a>
            <a href="#about" className="text-white/40 hover:text-violet-400 transition-colors text-sm">
              Over ons
            </a>
            <a href="#contact" className="text-white/40 hover:text-violet-400 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
