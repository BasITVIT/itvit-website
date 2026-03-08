import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Diensten" },
  { id: "about", label: "Over ons" },
];

const SERVICES = [
  { num: "01", title: "Netwerkinfrastructuur", desc: "Ontwerp, implementatie en beheer van robuuste en schaalbare netwerken — van LAN/WAN tot SD-WAN.", tags: ["Cisco", "SD-WAN", "VLAN"] },
  { num: "02", title: "Cloudoplossingen", desc: "Naadloze migratie en beheer van cloudomgevingen op Azure, AWS en hybride platformen.", tags: ["Azure", "AWS", "Hybrid"] },
  { num: "03", title: "Cyberbeveiliging", desc: "End-to-end beveiligingsaudits, firewallbeheer en strategieën voor bedreigingsbeheersing.", tags: ["FortiGate", "SOC", "Compliance"] },
  { num: "04", title: "Beheerde IT-diensten", desc: "Proactieve monitoring, onderhoud en ondersteuning van uw volledige IT-omgeving.", tags: ["24/7 Monitoring", "Helpdesk", "SLA"] },
  { num: "05", title: "IT-advies", desc: "Strategisch IT-advies afgestemd op uw bedrijfsdoelstellingen en digitale transformatie.", tags: ["Roadmap", "Audit", "Strategie"] },
  { num: "06", title: "IT-training & Onboarding", desc: "Maatwerk trainingsprogramma's en onboardingworkflows afgestemd op uw technologiestack.", tags: ["Microsoft 365", "Teams", "Maatwerk"] },
];

const STATS = [
  { value: "150+", label: "Projecten" },
  { value: "60+", label: "Klanten" },
  { value: "10+", label: "Jaar ervaring" },
  { value: "99,9%", label: "Uptime SLA" },
];

const WHY = [
  { title: "Technisch diepgaand", desc: "Onze engineers denken mee op architectuurniveau — niet alleen symptoombestrijding, maar structurele oplossingen." },
  { title: "Altijd bereikbaar", desc: "Met een gegarandeerde reactietijd van minder dan 4 uur bent u nooit lang aan uw lot overgelaten." },
  { title: "Groei-ready", desc: "Wij bouwen IT-omgevingen die meegroeien met uw organisatie — schaalbaar en toekomstbestendig." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState(null);

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
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 bg-opacity-95 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-500">
              <span className="text-white font-black text-xs tracking-tight">IV</span>
            </div>
            <div className="leading-tight">
              <span className="font-black text-white text-base tracking-tight">ITVIT</span>
              <span className="text-orange-400 font-light text-base tracking-widest ml-1">IT-Solutions</span>
            </div>
          </button>
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg transition-all">{label}</button>
            ))}
            <button onClick={() => scrollTo("contact")} className="ml-4 text-sm bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-2 rounded-lg transition-colors">Plan een gesprek</button>
          </div>
          <button className="md:hidden text-slate-400" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-3">
            {[...NAV_ITEMS, { id: "contact", label: "Contact" }].map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-slate-300 hover:text-orange-400 py-1 transition-colors">{label}</button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 opacity-60" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute right-0 bottom-0 text-slate-800 font-black select-none pointer-events-none" style={{ fontSize: "22vw", lineHeight: 1, opacity: 0.15 }}>IT</div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8 border border-orange-500 border-opacity-30 bg-orange-500 bg-opacity-5 px-3 py-1.5 rounded">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
              IT-advies &amp; Oplossingen · Nederland
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none mb-6 tracking-tight">
              Wij lossen<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #f97316, #fbbf24)" }}>uw IT</span><br />
              vraagstukken op.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">ITVIT IT-Solutions is uw vaste IT-partner voor netwerkinfrastructuur, cloud en beveiliging. Praktisch, betrouwbaar en altijd bereikbaar.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("services")} className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3.5 rounded-lg transition-colors">Onze diensten →</button>
              <button onClick={() => scrollTo("contact")} className="text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 font-medium px-8 py-3.5 rounded-lg transition-colors">Neem contact op</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`rounded-2xl p-6 border ${i === 0 ? "bg-orange-500 border-orange-400 col-span-2" : "bg-slate-900 border-slate-800"}`}>
                <div className={`text-4xl font-black mb-1 ${i === 0 ? "text-white" : "text-orange-400"}`}>{s.value}</div>
                <div className={`text-sm ${i === 0 ? "text-orange-100" : "text-slate-400"}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Wat wij doen</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Onze Diensten</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">Van netwerkontwerp tot cloudmigratie — end-to-end IT die meeschaalt met uw groei.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 rounded-2xl overflow-hidden">
            {SERVICES.map((svc) => (
              <div key={svc.num} className="bg-slate-900 p-7 hover:bg-slate-800 transition-colors cursor-default group" onMouseEnter={() => setActiveService(svc.num)} onMouseLeave={() => setActiveService(null)}>
                <div className="flex items-start justify-between mb-5">
                  <span className="text-orange-500 font-black text-sm">{svc.num}</span>
                  <span className={`w-2 h-2 rounded-full mt-1 transition-colors ${activeService === svc.num ? "bg-orange-400" : "bg-slate-700"}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-orange-300 transition-colors">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Wie wij zijn</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Ervaren engineers.<br /><span className="text-slate-500">Praktische aanpak.</span></h2>
              <p className="text-slate-400 leading-relaxed mb-5">ITVIT IT-Solutions is een Nederlands IT-adviesbureau gespecialiseerd in netwerkinfrastructuur, cloudoplossingen en beheerde IT-diensten. Opgericht door ervaren IT-engineers, combineren wij diepgaande technische kennis met een praktische, bedrijfsgerichte aanpak.</p>
              <p className="text-slate-400 leading-relaxed mb-10">Wij werken nauw samen met het midden- en kleinbedrijf door heel Nederland om IT-omgevingen te ontwerpen, implementeren en onderhouden die betrouwbaar, veilig en klaar voor groei zijn.</p>
              <div className="border-t border-slate-800 pt-8">
                <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">Technologieën &amp; Partners</p>
                <div className="flex flex-wrap gap-2">
                  {["Cisco", "Microsoft Azure", "VMware", "FortiGate", "Office 365", "HPE", "Veeam", "Palo Alto"].map((tech) => (
                    <span key={tech} className="text-sm text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xs text-slate-600 uppercase tracking-widest mb-2">Waarom ITVIT?</p>
              {WHY.map((item, i) => (
                <div key={i} className="flex gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-orange-500 rounded-2xl p-6 text-white">
                <div className="text-sm font-semibold text-orange-100 mb-1">Gemiddelde reactietijd</div>
                <div className="text-4xl font-black mb-1">&lt; 4 uur</div>
                <div className="text-orange-200 text-sm">Gegarandeerd via SLA · Werkdagen &amp; weekend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Neem contact op</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Plan een vrijblijvend gesprek.</h2>
            <p className="text-slate-400 leading-relaxed mb-10">Heeft u een IT-vraagstuk of wilt u meer weten over onze diensten? Wij denken graag met u mee — zonder verplichtingen.</p>
            <div className="space-y-5">
              {[{ icon: "✉", label: "E-mail", value: "info@itvit.nl", href: "mailto:info@itvit.nl" }, { icon: "📞", label: "Telefoon", value: "+31 (0)00 000 0000", href: "tel:+31000000000" }, { icon: "📍", label: "Locatie", value: "Nederland", href: null }].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                  <div>
                    <div className="text-xs text-slate-600 uppercase tracking-widest">{label}</div>
                    {href ? <a href={href} className="text-slate-200 hover:text-orange-400 transition-colors font-medium">{value}</a> : <span className="text-slate-200 font-medium">{value}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {submitted ? (
            <div className="bg-slate-950 border border-orange-500 border-opacity-30 rounded-2xl p-12 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Bericht ontvangen!</h3>
              <p className="text-slate-400 text-sm">Wij nemen zo snel mogelijk contact met u op. Bedankt!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">Uw naam</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jan de Vries" className="w-full bg-slate-900 border border-slate-700 focus:border-orange-500 outline-none rounded-lg px-4 py-3 text-white placeholder-slate-600 transition-colors text-sm" /></div>
                <div><label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">E-mailadres</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jan@bedrijf.nl" className="w-full bg-slate-900 border border-slate-700 focus:border-orange-500 outline-none rounded-lg px-4 py-3 text-white placeholder-slate-600 transition-colors text-sm" /></div>
              </div>
              <div><label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">Bericht</label><textarea required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Vertel ons over uw IT-uitdaging..." className="w-full bg-slate-900 border border-slate-700 focus:border-orange-500 outline-none rounded-lg px-4 py-3 text-white placeholder-slate-600 transition-colors text-sm resize-none" /></div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3.5 rounded-lg transition-colors">Verstuur bericht →</button>
              <p className="text-xs text-slate-600 text-center">Wij reageren altijd binnen één werkdag.</p>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center"><span className="text-white font-black text-xs">IV</span></div>
            <div><span className="font-black text-white">ITVIT</span><span className="text-orange-400 font-light ml-1">IT-Solutions</span></div>
          </div>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} ITVIT IT-Solutions · Alle rechten voorbehouden</p>
          <div className="flex gap-6">
            {["Privacybeleid", "Voorwaarden"].map((l) => (
              <a key={l} href="#" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
