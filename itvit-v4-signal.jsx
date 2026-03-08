import { useState, useEffect } from "react";

const CYCLING_WORDS = ["schaalbaar", "veilig", "betrouwbaar", "toekomstbestendig"];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "diensten", label: "Diensten" },
  { id: "over-ons", label: "Over ons" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Netwerkinfrastructuur",
    desc: "Ontwerp, implementatie en beheer van robuuste en schaalbare netwerken — van LAN/WAN tot SD-WAN en verder.",
    tags: ["Cisco", "SD-WAN", "VLAN"],
    placement: { gridColumn: "span 2" },
  },
  {
    num: "02",
    title: "Cloudoplossingen",
    desc: "Naadloze migratie en beheer van cloudomgevingen op Azure, AWS en hybride platformen.",
    tags: ["Azure", "AWS", "Hybrid"],
    placement: {},
  },
  {
    num: "03",
    title: "Cyberbeveiliging",
    desc: "End-to-end beveiligingsaudits, firewallbeheer en strategieën voor bedreigingsbeheersing.",
    tags: ["FortiGate", "SOC", "Compliance"],
    placement: {},
  },
  {
    num: "04",
    title: "Beheerde IT-diensten",
    desc: "Proactieve monitoring, onderhoud en ondersteuning van uw volledige IT-omgeving — 24/7.",
    tags: ["24/7 Monitoring", "Helpdesk", "SLA"],
    placement: { gridColumn: "span 2" },
  },
  {
    num: "05",
    title: "IT-advies",
    desc: "Strategisch IT-advies afgestemd op uw bedrijfsdoelstellingen en digitale transformatie.",
    tags: ["Roadmap", "Audit", "Strategie"],
    placement: {},
  },
  {
    num: "06",
    title: "IT-training & Onboarding",
    desc: "Maatwerk trainingsprogramma's en onboardingworkflows afgestemd op uw technologiestack.",
    tags: ["Microsoft 365", "Teams", "Maatwerk"],
    placement: {},
  },
];

const STATS = [
  { value: "150+", label: "Projecten opgeleverd" },
  { value: "60+", label: "Tevreden klanten" },
  { value: "10+", label: "Jaar ervaring" },
  { value: "99,9%", label: "Uptime SLA" },
];

const WHY = [
  {
    title: "Technisch diepgaand",
    desc: "Onze engineers denken mee op architectuurniveau — structurele oplossingen, geen symptoombestrijding.",
  },
  {
    title: "Altijd bereikbaar",
    desc: "Met een gegarandeerde reactietijd van minder dan 4 uur bent u nooit lang aan uw lot overgelaten.",
  },
  {
    title: "Groei-ready",
    desc: "Wij bouwen IT-omgevingen die meegroeien met uw organisatie — schaalbaar en toekomstbestendig.",
  },
];

const TECHS = ["Cisco", "Microsoft Azure", "VMware", "FortiGate", "Office 365", "HPE", "Veeam", "Palo Alto"];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

  :root {
    --bg:        #ffffff;
    --surface:   #f7f9fb;
    --surface2:  #eef2f6;
    --border:    #dde4ed;
    --border2:   #c4cfdc;
    --blue:      #3ab4e8;
    --blue-mid:  #29a5db;
    --blue-light:#e8f5fd;
    --blue-dim:  rgba(58,180,232,0.07);
    --blue-border: rgba(58,180,232,0.3);
    --navy:      #1e3852;
    --text:      #1e3852;
    --text2:     #4a6278;
    --muted:     #8aa0b2;
    --ff-head:   'Outfit', sans-serif;
    --ff-body:   'DM Sans', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  #signal-root {
    background: var(--bg);
    color: var(--text);
    font-family: var(--ff-body);
    min-height: 100vh;
    line-height: 1.6;
  }

  /* ── NAV ── */
  .sig-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
  }
  .sig-nav-inner {
    max-width: 1160px; margin: 0 auto; padding: 0 28px;
    height: 64px; display: flex; align-items: center; justify-content: space-between;
  }
  .sig-logo {
    background: none; border: none; cursor: pointer;
    display: flex; align-items: center; gap: 10px;
  }
  .sig-logo-icon {
    width: 32px; height: 32px;
    background: var(--blue); border-radius: 8px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .sig-logo-icon span {
    font-family: var(--ff-head); font-weight: 800; font-size: 11px;
    color: #fff; letter-spacing: 0.04em;
  }
  .sig-logo-name {
    font-family: var(--ff-head); font-weight: 700; font-size: 1rem;
    color: var(--navy); letter-spacing: -0.01em;
  }
  .sig-logo-name em { font-style: normal; color: var(--blue); font-weight: 500; }

  .sig-nav-links { display: flex; align-items: center; gap: 2px; }
  .sig-navbtn {
    background: none; border: none; cursor: pointer;
    font-family: var(--ff-body); font-size: 0.875rem; font-weight: 500;
    color: var(--text2); padding: 7px 14px; border-radius: 8px;
    transition: color 0.2s, background 0.2s;
  }
  .sig-navbtn:hover { color: var(--navy); background: var(--surface2); }
  .sig-nav-cta {
    margin-left: 10px; background: var(--blue); border: none; cursor: pointer;
    font-family: var(--ff-body); font-size: 0.875rem; font-weight: 600;
    color: #fff; padding: 9px 20px; border-radius: 9px;
    transition: background 0.2s, transform 0.15s;
  }
  .sig-nav-cta:hover { background: var(--blue-mid); transform: translateY(-1px); }
  .sig-hamburger {
    display: none; background: none; border: none; cursor: pointer;
    color: var(--text2); padding: 4px;
  }
  .sig-mobile-menu {
    background: var(--bg); border-top: 1px solid var(--border);
    padding: 12px 20px; display: flex; flex-direction: column; gap: 2px;
  }
  .sig-mobile-item {
    background: none; border: none; cursor: pointer; text-align: left;
    font-family: var(--ff-body); font-size: 0.95rem; font-weight: 500;
    color: var(--text2); padding: 10px 10px; border-radius: 8px;
    transition: color 0.2s, background 0.2s;
  }
  .sig-mobile-item:hover { color: var(--blue); background: var(--blue-dim); }

  /* ── HERO ── */
  .sig-hero {
    padding-top: 64px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .sig-hero-inner {
    max-width: 1160px; margin: 0 auto; padding: 80px 28px 72px;
    display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 72px; align-items: center;
  }
  .sig-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue-dim); border: 1px solid var(--blue-border);
    border-radius: 100px; padding: 5px 14px; margin-bottom: 24px;
  }
  .sig-badge-dot {
    width: 7px; height: 7px; background: var(--blue); border-radius: 50%;
    animation: blink 2.2s ease-in-out infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .sig-badge-text {
    font-size: 0.72rem; font-weight: 600; color: var(--blue);
    letter-spacing: 0.08em; text-transform: uppercase;
  }

  .sig-h1 {
    font-family: var(--ff-head); font-weight: 800;
    font-size: clamp(2.2rem, 3.6vw, 3.4rem);
    line-height: 1.12; letter-spacing: -0.025em;
    color: var(--navy); margin-bottom: 8px;
  }
  .sig-h1-sub {
    font-family: var(--ff-head); font-weight: 500;
    font-size: clamp(1.4rem, 2.4vw, 2.1rem);
    line-height: 1.3; letter-spacing: -0.015em;
    color: var(--text2); margin-bottom: 24px;
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  }
  .sig-cycling-word {
    color: var(--blue); font-weight: 700;
    transition: opacity 0.25s ease, transform 0.25s ease;
    display: inline-block;
  }
  .sig-cycling-word.hidden { opacity: 0; transform: translateY(6px); }
  .sig-cycling-word.visible { opacity: 1; transform: translateY(0); }

  .sig-subtext {
    font-size: 1rem; color: var(--text2); line-height: 1.75;
    max-width: 480px; margin-bottom: 36px;
  }
  .sig-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
  .sig-btn-primary {
    background: var(--blue); color: #fff;
    font-family: var(--ff-body); font-weight: 600; font-size: 0.9rem;
    border: none; border-radius: 9px; padding: 12px 26px; cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }
  .sig-btn-primary:hover { background: var(--blue-mid); transform: translateY(-1px); }
  .sig-btn-secondary {
    background: transparent; color: var(--text2);
    font-family: var(--ff-body); font-weight: 500; font-size: 0.9rem;
    border: 1px solid var(--border2); border-radius: 9px; padding: 12px 26px; cursor: pointer;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
  }
  .sig-btn-secondary:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-dim); }

  /* Stats */
  .sig-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .sig-stat {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 22px 20px;
    cursor: default;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  .sig-stat:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(3,105,161,0.1);
    border-color: var(--blue-border);
  }
  .sig-stat:first-child {
    border-color: var(--blue-border);
    background: var(--blue-light);
  }
  .sig-stat:first-child:hover {
    box-shadow: 0 8px 24px rgba(3,105,161,0.15);
  }
  .sig-stat-val {
    font-family: var(--ff-head); font-weight: 800; font-size: 2.2rem;
    letter-spacing: -0.03em; line-height: 1; color: var(--blue);
  }
  .sig-stat:not(:first-child) .sig-stat-val { color: var(--navy); }
  .sig-stat-label { font-size: 0.78rem; color: var(--text2); margin-top: 6px; font-weight: 500; }

  /* ── SHARED SECTION ── */
  .sig-section { padding: 88px 28px; }
  .sig-section-alt { background: var(--surface); }
  .sig-inner { max-width: 1160px; margin: 0 auto; }
  .sig-section-label {
    display: block; font-size: 0.7rem; font-weight: 700;
    color: var(--blue); text-transform: uppercase; letter-spacing: 0.14em;
    margin-bottom: 10px;
  }
  .sig-h2 {
    font-family: var(--ff-head); font-weight: 700;
    font-size: clamp(1.7rem, 2.8vw, 2.4rem);
    letter-spacing: -0.02em; line-height: 1.15; color: var(--navy);
    margin-bottom: 12px;
  }
  .sig-section-desc {
    color: var(--text2); max-width: 500px; line-height: 1.7; font-size: 0.95rem;
  }

  /* ── DIENSTEN ── */
  .sig-services-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    gap: 24px; margin-bottom: 36px; flex-wrap: wrap;
  }
  .sig-bento {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
  }
  .sig-card {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 14px; padding: 26px;
    transition: border-color 0.22s, box-shadow 0.22s;
    cursor: default; display: flex; flex-direction: column;
  }
  .sig-card:hover {
    border-color: var(--blue-border);
    box-shadow: 0 4px 20px rgba(3,105,161,0.08);
  }
  .sig-card-top {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 16px;
  }
  .sig-card-num {
    font-family: var(--ff-head); font-size: 0.7rem; font-weight: 700;
    color: var(--muted); letter-spacing: 0.06em;
  }
  .sig-card-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--border2); transition: background 0.22s;
  }
  .sig-card:hover .sig-card-dot { background: var(--blue); }
  .sig-card-title {
    font-family: var(--ff-head); font-weight: 700; font-size: 1rem;
    color: var(--navy); margin-bottom: 10px; letter-spacing: -0.01em; line-height: 1.3;
  }
  .sig-card-desc {
    font-size: 0.845rem; color: var(--text2); line-height: 1.7; flex: 1; margin-bottom: 18px;
  }
  .sig-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
  .sig-tag {
    font-size: 0.69rem; color: var(--muted); border: 1px solid var(--border);
    border-radius: 5px; padding: 3px 9px; letter-spacing: 0.02em; font-weight: 500;
    transition: border-color 0.2s, color 0.2s;
  }
  .sig-card:hover .sig-tag { border-color: var(--blue-border); color: var(--blue); }

  /* ── ABOUT ── */
  .sig-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
  .sig-about-body { font-size: 0.92rem; color: var(--text2); line-height: 1.8; margin-bottom: 16px; }
  .sig-techs-label {
    font-size: 0.68rem; font-weight: 700; color: var(--muted); text-transform: uppercase;
    letter-spacing: 0.12em; margin-bottom: 12px;
    border-top: 1px solid var(--border); padding-top: 22px; margin-top: 24px;
  }
  .sig-techs { display: flex; flex-wrap: wrap; gap: 8px; }
  .sig-tech {
    font-size: 0.8rem; font-weight: 500; color: var(--text2);
    background: var(--bg); border: 1px solid var(--border); border-radius: 8px;
    padding: 5px 13px; transition: border-color 0.2s, color 0.2s;
  }
  .sig-tech:hover { border-color: var(--blue-border); color: var(--blue); }

  .sig-why-col { display: flex; flex-direction: column; gap: 10px; }
  .sig-why-label {
    font-size: 0.68rem; font-weight: 700; color: var(--muted);
    text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px;
  }
  .sig-why-card {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 13px; padding: 20px 22px; display: flex; gap: 16px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .sig-why-card:hover { border-color: var(--blue-border); box-shadow: 0 2px 12px rgba(3,105,161,0.06); }
  .sig-why-num {
    width: 36px; height: 36px; flex-shrink: 0;
    background: var(--blue-dim); border: 1px solid var(--blue-border);
    border-radius: 9px; display: flex; align-items: center; justify-content: center;
  }
  .sig-why-num span {
    font-family: var(--ff-head); font-size: 0.72rem; font-weight: 800; color: var(--blue);
  }
  .sig-why-title {
    font-family: var(--ff-head); font-size: 0.9rem; font-weight: 700;
    color: var(--navy); margin-bottom: 4px;
  }
  .sig-why-desc { font-size: 0.83rem; color: var(--text2); line-height: 1.65; }

  .sig-sla-card {
    background: var(--navy); border-radius: 13px; padding: 24px;
  }
  .sig-sla-label {
    font-size: 0.7rem; font-weight: 600; color: rgba(255,255,255,0.7);
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;
  }
  .sig-sla-val {
    font-family: var(--ff-head); font-size: 2.8rem; font-weight: 800;
    color: #fff; letter-spacing: -0.035em; line-height: 1;
  }
  .sig-sla-note { font-size: 0.78rem; color: rgba(255,255,255,0.65); margin-top: 8px; }

  /* ── CONTACT ── */
  .sig-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
  .sig-contact-desc { font-size: 0.92rem; color: var(--text2); line-height: 1.8; margin-bottom: 36px; }
  .sig-contact-items { display: flex; flex-direction: column; gap: 18px; }
  .sig-contact-item { display: flex; align-items: center; gap: 14px; }
  .sig-contact-icon {
    width: 40px; height: 40px; flex-shrink: 0;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 10px; display: flex; align-items: center; justify-content: center;
  }
  .sig-contact-icon-label {
    font-family: var(--ff-head); font-size: 0.65rem; font-weight: 700;
    color: var(--muted); text-transform: uppercase;
  }
  .sig-contact-meta-label {
    font-size: 0.68rem; font-weight: 600; color: var(--muted);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px;
  }
  .sig-contact-meta-val {
    font-size: 0.9rem; font-weight: 500; color: var(--navy);
    text-decoration: none; transition: color 0.2s;
  }
  .sig-contact-meta-val:hover { color: var(--blue); }

  .sig-form {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 16px; padding: 32px;
    display: flex; flex-direction: column; gap: 18px;
  }
  .sig-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .sig-form-group { display: flex; flex-direction: column; gap: 7px; }
  .sig-label {
    font-size: 0.7rem; font-weight: 700; color: var(--navy);
    text-transform: uppercase; letter-spacing: 0.09em;
  }
  .sig-input {
    background: var(--surface); border: 1px solid var(--border); border-radius: 9px;
    padding: 11px 14px; color: var(--navy);
    font-family: var(--ff-body); font-size: 0.875rem; outline: none;
    transition: border-color 0.2s, background 0.2s; width: 100%;
  }
  .sig-input:focus { border-color: var(--blue); background: #fff; }
  .sig-input::placeholder { color: var(--muted); }
  .sig-textarea { resize: none; }
  .sig-submit {
    background: var(--blue); color: #fff;
    font-family: var(--ff-body); font-weight: 600; font-size: 0.9rem;
    border: none; border-radius: 9px; padding: 13px;
    cursor: pointer; width: 100%; transition: background 0.2s, transform 0.15s;
  }
  .sig-submit:hover { background: var(--blue-mid); transform: translateY(-1px); }
  .sig-form-note { font-size: 0.75rem; color: var(--muted); text-align: center; }

  .sig-success {
    background: var(--surface); border: 1px solid var(--blue-border);
    border-radius: 16px; padding: 56px 32px; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 14px;
  }
  .sig-success-check {
    width: 52px; height: 52px; border-radius: 50%;
    background: var(--blue); display: flex; align-items: center; justify-content: center;
  }
  .sig-success-title {
    font-family: var(--ff-head); font-size: 1.2rem; font-weight: 700; color: var(--navy);
  }
  .sig-success-desc { font-size: 0.875rem; color: var(--text2); }

  /* ── FOOTER ── */
  .sig-footer {
    background: var(--navy); padding: 28px 28px;
  }
  .sig-footer-inner {
    max-width: 1160px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
  }
  .sig-footer-logo { display: flex; align-items: center; gap: 10px; }
  .sig-footer-logo-icon {
    width: 30px; height: 30px; background: var(--blue); border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
  }
  .sig-footer-logo-icon span {
    font-family: var(--ff-head); font-weight: 800; font-size: 10px; color: #fff;
  }
  .sig-footer-logo-name {
    font-family: var(--ff-head); font-weight: 600; font-size: 0.9rem; color: #fff;
  }
  .sig-footer-logo-name em { font-style: normal; color: rgba(255,255,255,0.5); font-weight: 400; }
  .sig-footer-contact { display: flex; flex-direction: column; gap: 4px; }
  .sig-footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
  .sig-footer-links { display: flex; gap: 20px; }
  .sig-footer-link {
    font-size: 0.78rem; color: rgba(255,255,255,0.4); text-decoration: none;
    transition: color 0.2s;
  }
  .sig-footer-link:hover { color: rgba(255,255,255,0.85); }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .sig-nav-links { display: none !important; }
    .sig-hamburger { display: block !important; }
    .sig-hero-inner { grid-template-columns: 1fr; gap: 40px; padding: 56px 24px 56px; }
    .sig-bento { grid-template-columns: 1fr 1fr !important; }
    .sig-bento .sig-card { grid-column: auto !important; }
    .sig-about-grid { grid-template-columns: 1fr; gap: 48px; }
    .sig-contact-grid { grid-template-columns: 1fr; gap: 48px; }
    .sig-form-row { grid-template-columns: 1fr; }
    .sig-services-head { flex-direction: column; align-items: flex-start; }
  }
  @media (max-width: 560px) {
    .sig-bento { grid-template-columns: 1fr !important; }
    .sig-stats { grid-template-columns: 1fr 1fr; }
  }
`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setWordVisible(true);
      }, 260);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{CSS}</style>
      <div id="signal-root">

        {/* ── NAV ── */}
        <nav className="sig-nav">
          <div className="sig-nav-inner">
            <button className="sig-logo" onClick={() => scrollTo("home")}>
              <img src="/brand/itvit-logo-kleur.svg" alt="itvit IT-Solutions" style={{ height: "36px", width: "auto" }} />
            </button>
            <div className="sig-nav-links">
              {NAV_ITEMS.map(({ id, label }) => (
                <button key={id} className="sig-navbtn" onClick={() => scrollTo(id)}>{label}</button>
              ))}
              <button className="sig-nav-cta" onClick={() => scrollTo("contact")}>Plan een gesprek</button>
            </div>
            <button className="sig-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width={22} height={22} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="sig-mobile-menu">
              {NAV_ITEMS.map(({ id, label }) => (
                <button key={id} className="sig-mobile-item" onClick={() => scrollTo(id)}>{label}</button>
              ))}
            </div>
          )}
        </nav>

        {/* ── HERO ── */}
        <section id="home" className="sig-hero">
          <div className="sig-hero-inner">
            <div>
              <div className="sig-badge">
                <span className="sig-badge-dot" />
                <span className="sig-badge-text">IT-Solutions · Nederland</span>
              </div>

              <h1 className="sig-h1">Uw IT-partner voor<br />professionele oplossingen.</h1>

              <p className="sig-h1-sub">
                Altijd{" "}
                <span className={`sig-cycling-word ${wordVisible ? "visible" : "hidden"}`}>{CYCLING_WORDS[wordIndex]}.</span>
              </p>

              <p className="sig-subtext">
                ITVIT IT-Solutions levert enterprise-grade netwerkinfrastructuur,
                cloudoplossingen en beheerde IT-diensten — zodat uw bedrijf verbonden,
                veilig en klaar voor de toekomst blijft.
              </p>

              <div className="sig-ctas">
                <button className="sig-btn-primary" onClick={() => scrollTo("diensten")}>Bekijk diensten</button>
                <button className="sig-btn-secondary" onClick={() => scrollTo("contact")}>Neem contact op</button>
              </div>
            </div>

            <div className="sig-stats">
              {STATS.map((s) => (
                <div key={s.label} className="sig-stat">
                  <div className="sig-stat-val">{s.value}</div>
                  <div className="sig-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIENSTEN ── */}
        <section id="diensten" className="sig-section sig-section-alt">
          <div className="sig-inner">
            <div className="sig-services-head">
              <div>
                <span className="sig-section-label">Wat wij doen</span>
                <h2 className="sig-h2">Onze Diensten</h2>
              </div>
              <p className="sig-section-desc">
                Van netwerkontwerp tot cloudmigratie — end-to-end IT die meeschaalt met uw organisatie.
              </p>
            </div>
            <div className="sig-bento">
              {SERVICES.map((svc) => (
                <div key={svc.num} className="sig-card" style={{ ...svc.placement }}>
                  <div className="sig-card-top">
                    <span className="sig-card-num">{svc.num}</span>
                    <span className="sig-card-dot" />
                  </div>
                  <h3 className="sig-card-title">{svc.title}</h3>
                  <p className="sig-card-desc">{svc.desc}</p>
                  <div className="sig-tags">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="sig-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OVER ONS ── */}
        <section id="over-ons" className="sig-section">
          <div className="sig-inner">
            <div className="sig-about-grid">
              <div>
                <span className="sig-section-label">Wie wij zijn</span>
                <h2 className="sig-h2">Gebouwd door engineers,<br />voor bedrijven.</h2>
                <p className="sig-about-body">
                  ITVIT IT-Solutions is een Nederlands IT-adviesbureau gespecialiseerd in
                  netwerkinfrastructuur, cloudoplossingen en beheerde IT-diensten. Opgericht door
                  ervaren IT-engineers, combineren wij diepgaande technische kennis met een
                  praktische, bedrijfsgerichte aanpak.
                </p>
                <p className="sig-about-body">
                  Wij werken nauw samen met het midden- en kleinbedrijf door heel Nederland om
                  IT-omgevingen te ontwerpen, implementeren en onderhouden die betrouwbaar, veilig
                  en klaar voor groei zijn.
                </p>
                <div className="sig-techs-label">Technologieën &amp; Partners</div>
                <div className="sig-techs">
                  {TECHS.map((t) => <span key={t} className="sig-tech">{t}</span>)}
                </div>
              </div>

              <div className="sig-why-col">
                <div className="sig-why-label">Waarom ITVIT?</div>
                {WHY.map((item, i) => (
                  <div key={i} className="sig-why-card">
                    <div className="sig-why-num">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <div className="sig-why-title">{item.title}</div>
                      <p className="sig-why-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="sig-sla-card">
                  <div className="sig-sla-label">Gegarandeerde reactietijd</div>
                  <div className="sig-sla-val">&lt;&nbsp;4 uur</div>
                  <div className="sig-sla-note">Via SLA · werkdagen &amp; weekend</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="sig-section sig-section-alt">
          <div className="sig-inner">
            <div className="sig-contact-grid">
              <div>
                <span className="sig-section-label">Neem contact op</span>
                <h2 className="sig-h2">Laten we praten<br />over uw IT.</h2>
                <p className="sig-contact-desc">
                  Heeft u een project in gedachten of behoefte aan deskundig advies?
                  Stuur ons een bericht en wij reageren binnen één werkdag.
                </p>
                <div className="sig-contact-items">
                  {[
                    { code: "EM", label: "E-mail", value: "info@itvit.nl", href: "mailto:info@itvit.nl" },
                    { code: "TL", label: "Telefoon", value: "06-83569318", href: "tel:+31683569318" },
                    { code: "LO", label: "Locatie", value: "Nederland", href: null },
                  ].map(({ code, label, value, href }) => (
                    <div key={label} className="sig-contact-item">
                      <div className="sig-contact-icon">
                        <span className="sig-contact-icon-label">{code}</span>
                      </div>
                      <div>
                        <div className="sig-contact-meta-label">{label}</div>
                        {href
                          ? <a href={href} className="sig-contact-meta-val">{value}</a>
                          : <span className="sig-contact-meta-val">{value}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="sig-success">
                  <div className="sig-success-check">
                    <svg width={24} height={24} fill="none" stroke="#fff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="sig-success-title">Bericht ontvangen!</div>
                  <p className="sig-success-desc">Wij nemen zo snel mogelijk contact met u op. Bedankt!</p>
                </div>
              ) : (
                <form className="sig-form" onSubmit={handleSubmit}>
                  <div className="sig-form-row">
                    <div className="sig-form-group">
                      <label className="sig-label">Naam</label>
                      <input type="text" required className="sig-input" placeholder="Jan de Vries"
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="sig-form-group">
                      <label className="sig-label">E-mail</label>
                      <input type="email" required className="sig-input" placeholder="jan@bedrijf.nl"
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="sig-form-group">
                    <label className="sig-label">Bericht</label>
                    <textarea required rows={6} className="sig-input sig-textarea"
                      placeholder="Vertel ons over uw IT-uitdaging..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" className="sig-submit">Verstuur bericht →</button>
                  <p className="sig-form-note">Wij reageren altijd binnen één werkdag.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="sig-footer">
          <div className="sig-footer-inner">
            <div className="sig-footer-logo">
              <img src="/brand/itvit-logo-wit-transparant.svg" alt="itvit IT-Solutions" style={{ height: "32px", width: "auto" }} />
            </div>
            <div className="sig-footer-contact">
              <a href="mailto:info@itvit.nl" className="sig-footer-link">info@itvit.nl</a>
              <a href="tel:+31683569318" className="sig-footer-link">06-83569318</a>
            </div>
            <span className="sig-footer-copy">© {new Date().getFullYear()} ITVIT IT-Solutions · Alle rechten voorbehouden</span>
            <div className="sig-footer-links">
              <a href="#" className="sig-footer-link">Privacybeleid</a>
              <a href="#" className="sig-footer-link">Voorwaarden</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
