import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Diensten" },
  { id: "about", label: "Over ons" },
];

const SERVICES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Netwerkinfrastructuur",
    desc: "Ontwerp, implementatie en beheer van robuuste en schaalbare netwerkinfrastructuren op maat van uw bedrijf — van LAN/WAN tot SD-WAN en verder.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloudoplossingen",
    desc: "Naadloze migratie, configuratie en doorlopend beheer van cloudomgevingen op Azure, AWS en hybride platformen — veilig, schaalbaar en kostenefficiënt.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Cyberbeveiliging",
    desc: "End-to-end beveiligingsaudits, firewallbeheer en strategieën voor bedreigingsbeheersing om uw kritieke infrastructuur en gevoelige gegevens te beschermen.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Beheerde IT-diensten",
    desc: "Proactieve monitoring, onderhoud en ondersteuning van uw volledige IT-omgeving — zodat u zich kunt richten op uw bedrijf terwijl wij alles draaiende houden.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "IT-advies",
    desc: "Strategisch IT-advies afgestemd op uw bedrijfsdoelstellingen. Van audits en roadmaps tot leveranciersselectie en digitale transformatie — wij begeleiden u op elke stap.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "IT-training & Onboarding",
    desc: "Uw team voorzien van de kennis en tools die zij nodig hebben. Maatwerk trainingsprogramma's en onboardingworkflows afgestemd op uw technologiestack.",
  },
];

const STATS = [
  { value: "150+", label: "Projecten opgeleverd" },
  { value: "60+", label: "Tevreden klanten" },
  { value: "10+", label: "Jaar ervaring" },
  { value: "99,9%", label: "Gegarandeerde uptime" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-950 text-gray-100 font-sans min-h-screen scroll-smooth">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500 flex items-center justify-center">
              <span className="text-gray-950 font-black text-xs">IT</span>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              ITVIT <span className="text-cyan-400">IT-Solutions</span>
            </span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">{label}</button>
            ))}
            <button onClick={() => scrollTo("contact")} className="text-sm bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-4 py-2 rounded transition-colors">Neem contact op</button>
          </div>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-4">
            {[...NAV_ITEMS, { id: "contact", label: "Contact" }].map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-gray-300 hover:text-cyan-400 transition-colors">{label}</button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500 bg-opacity-10 border border-cyan-500 border-opacity-30 text-cyan-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            IT-advies &amp; Oplossingen
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Uw IT.{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}>Onze Expertise.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            ITVIT IT-Solutions levert enterprise-grade netwerkinfrastructuur, cloudoplossingen en beheerde IT-diensten — zodat uw bedrijf verbonden, veilig en klaar voor de toekomst blijft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("services")} className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-8 py-3 rounded-lg transition-colors">Bekijk onze diensten</button>
            <button onClick={() => scrollTo("contact")} className="border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold px-8 py-3 rounded-lg transition-colors">Neem contact op</button>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="bg-gray-900 bg-opacity-60 border border-gray-800 rounded-xl p-4">
                <div className="text-3xl font-black text-cyan-400">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Wat wij doen</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Onze Diensten</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Van netwerkontwerp tot cloudmigratie — wij bieden end-to-end IT-oplossingen die meegroeien met uw ambities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="bg-gray-950 border border-gray-800 hover:border-cyan-500 rounded-2xl p-6 transition-all group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform inline-block">{svc.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Wie wij zijn</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Gebouwd door engineers,<br /><span className="text-cyan-400">voor bedrijven.</span></h2>
              <p className="text-gray-400 leading-relaxed mb-5">ITVIT IT-Solutions is een Nederlands IT-adviesbureau gespecialiseerd in netwerkinfrastructuur, cloudoplossingen en beheerde IT-diensten. Opgericht door ervaren IT-engineers, combineren wij diepgaande technische kennis met een praktische, bedrijfsgerichte aanpak.</p>
              <p className="text-gray-400 leading-relaxed mb-8">Wij werken nauw samen met het midden- en kleinbedrijf door heel Nederland om IT-omgevingen te ontwerpen, implementeren en onderhouden die betrouwbaar, veilig en klaar voor groei zijn.</p>
              <div className="flex flex-wrap gap-3">
                {["Cisco", "Microsoft Azure", "VMware", "FortiGate", "Office 365", "HPE"].map((tech) => (
                  <span key={tech} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center"><span className="text-gray-950 font-black text-sm">IV</span></div>
                  <div>
                    <div className="font-bold text-white">ITVIT IT-Solutions</div>
                    <div className="text-xs text-gray-500">Geregistreerd in Nederland</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[{ label: "Reactietijd", value: "< 4 uur", color: "bg-green-400" }, { label: "Netwerkbeschikbaarheid", value: "99,9% SLA", color: "bg-cyan-400" }, { label: "Klantbehoud", value: "94%", color: "bg-blue-400" }].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${item.color}`} /><span className="text-sm text-gray-300">{item.label}</span></div>
                      <span className="text-sm font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-500 text-center">Wij bedienen bedrijven door heel Nederland en daarbuiten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Neem contact op</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Laten we praten over IT</h2>
          <p className="text-gray-400 mb-12">Heeft u een project in gedachten of behoefte aan deskundig advies? Stuur ons een bericht en wij reageren binnen één werkdag.</p>
          {submitted ? (
            <div className="bg-gray-950 border border-cyan-500 border-opacity-40 rounded-2xl p-10 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Bericht ontvangen!</h3>
              <p className="text-gray-400 text-sm">Wij nemen zo snel mogelijk contact met u op. Bedankt!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-950 border border-gray-800 rounded-2xl p-8 text-left space-y-5">
              <div><label className="block text-sm text-gray-400 mb-1.5">Uw naam</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jan de Vries" className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors text-sm" /></div>
              <div><label className="block text-sm text-gray-400 mb-1.5">E-mailadres</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jan@bedrijf.nl" className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors text-sm" /></div>
              <div><label className="block text-sm text-gray-400 mb-1.5">Bericht</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Vertel ons over uw IT-uitdaging..." className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors text-sm resize-none" /></div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold py-3 rounded-lg transition-colors">Verstuur bericht</button>
            </form>
          )}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-500">
            <a href="mailto:info@itvit.nl" className="hover:text-cyan-400 transition-colors">✉ info@itvit.nl</a>
            <span className="hidden sm:block text-gray-700">|</span>
            <a href="tel:+31000000000" className="hover:text-cyan-400 transition-colors">📞 +31 (0)00 000 0000</a>
            <span className="hidden sm:block text-gray-700">|</span>
            <span>📍 Nederland</span>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500 flex items-center justify-center"><span className="text-gray-950 font-black text-xs">IT</span></div>
            <span className="text-gray-400 font-semibold">ITVIT IT-Solutions</span>
          </div>
          <span>© {new Date().getFullYear()} ITVIT IT-Solutions. Alle rechten voorbehouden.</span>
          <div className="flex gap-4">
            {[["Privacybeleid", "#"], ["Voorwaarden", "#"]].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-cyan-400 transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
