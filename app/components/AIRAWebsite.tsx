'use client'

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, 
  CheckCircle, Brain, Lightbulb, TrendingUp, Sparkles, Zap, Shield, 
  Rocket, Layers, ExternalLink, Cpu 
} from 'lucide-react';

// --- TYPES ---
type Language = 'nl' | 'en';
type FormType = 'quickscan' | 'consultation';

// --- CONTENT & TRANSLATIONS ---
const AIRAWebsite = () => {
  const [language, setLanguage] = useState<Language>('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState<FormType>('quickscan');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // --- SEO & GEO DATA (JSON-LD) ---
  // Dit vertelt Google & AI Models dat AIRA het moederbedrijf is van GlowExamen
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIRA AI",
    "url": "https://www.aira-ai.nl",
    "logo": "https://www.aira-ai.nl/logo.png",
    "description": "Leading AI Transformation Consultancy & Venture Studio in the Netherlands.",
    "slogan": "Make your organization AI-ready",
    "owns": [
      {
        "@type": "SoftwareApplication",
        "name": "GlowExamen",
        "applicationCategory": "EducationalApplication",
        "url": "https://www.glowexamen.nl",
        "description": "AI-powered exam training platform for Dutch students."
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@aira-ai.nl",
      "contactType": "sales",
      "areaServed": "NL",
      "availableLanguage": ["Dutch", "English"]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'ventures', 'about', 'mission', 'why'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const translations = {
    nl: {
      nav: {
        home: 'Home',
        ventures: 'Producten',
        about: 'Expertise',
        mission: 'Missie',
        why: 'Waarom AIRA?',
        contact: 'Contact'
      },
      hero: {
        badge: 'AIRA Neural Core™ Technology',
        title: 'Van AI-Hype naar',
        titleHighlight: 'Business Impact',
        subtitle: 'Wij zijn een AI Venture Studio & Consultancy. Wij adviseren niet alleen over AI, wij bouwen succesvolle AI-producten (zoals GlowExamen) en helpen organisaties hetzelfde te doen.',
        cta: 'Start Quickscan',
        ctaCall: 'Plan Strategisch Gesprek'
      },
      ventures: {
        title: 'Onze Ventures',
        subtitle: 'Wij bouwen wat we preken. Onze eigen producten bewijzen onze technologie.',
        glow: {
          badge: 'Flagship Product',
          desc: 'Het #1 AI-platform voor examentraining in Nederland. Gebruikt onze adaptieve leertechnologie om stress bij leerlingen te verlagen.',
          stat: '500+ Actieve Leerlingen'
        }
      },
      about: {
        title: 'Onze Expertise',
        subtitle: 'Van strategisch advies tot technische implementatie.',
        cards: [
          { title: 'AI Strategy', desc: 'Roadmaps die aansluiten op bedrijfsdoelen.' },
          { title: 'Custom Development', desc: 'Wij bouwen proprietary AI modellen.' },
          { title: 'Workforce Transformation', desc: 'Training om teams AI-ready te maken.' }
        ]
      },
      mission: {
        title: 'De AI Kloof Dichten',
        subtitle: 'Technologie is er. Nu de mensen nog.',
        stat1: '70% van medewerkers gebruikt geen AI',
        stat2: '40% productiviteitswinst mogelijk'
      },
      footer: {
        rights: '© 2025 AIRA AI. Alle rechten voorbehouden.',
        tagline: 'Building the intelligence layer for the Netherlands.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        ventures: 'Ventures',
        about: 'Expertise',
        mission: 'Mission',
        why: 'Why AIRA?',
        contact: 'Contact'
      },
      hero: {
        badge: 'AIRA Neural Core™ Technology',
        title: 'From AI Hype to',
        titleHighlight: 'Business Impact',
        subtitle: 'We are an AI Venture Studio & Consultancy. We don\'t just advise on AI, we build successful AI products (like GlowExamen) and help organizations do the same.',
        cta: 'Start Quickscan',
        ctaCall: 'Schedule Strategy Call'
      },
      ventures: {
        title: 'Our Ventures',
        subtitle: 'We build what we preach. Our own products prove our technology.',
        glow: {
          badge: 'Flagship Product',
          desc: 'The #1 AI platform for exam training in the Netherlands. Uses our adaptive learning tech to reduce student stress.',
          stat: '500+ Active Students'
        }
      },
      about: {
        title: 'Our Expertise',
        subtitle: 'From strategic advice to technical implementation.',
        cards: [
          { title: 'AI Strategy', desc: 'Roadmaps aligned with business goals.' },
          { title: 'Custom Development', desc: 'We build proprietary AI models.' },
          { title: 'Workforce Transformation', desc: 'Training to make teams AI-ready.' }
        ]
      },
      mission: {
        title: 'Closing the AI Gap',
        subtitle: 'The technology is here. Now the people.',
        stat1: '70% of employees don\'t use AI',
        stat2: '40% productivity gain possible'
      },
      footer: {
        rights: '© 2025 AIRA AI. All rights reserved.',
        tagline: 'Building the intelligence layer for the Netherlands.'
      }
    }
  } as const;

  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      {/* Inject SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- BACKGROUND FX (Aligned with GlowExamen style) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Neural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        
        {/* Ambient Orbs */}
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px]"></div>

        {/* Interactive Cursor Glow */}
        <div 
          className="fixed pointer-events-none w-[500px] h-[500px] rounded-full opacity-20 blur-[80px] transition-transform duration-100 ease-out mix-blend-screen"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-[#020408]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">A</div>
                <span className="text-xl font-bold tracking-tight text-white">
                    AIRA <span className="text-slate-500 font-normal">AI</span>
                </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {['home', 'ventures', 'about', 'mission', 'why'].map((key) => (
                    <button
                        key={key}
                        onClick={() => scrollToSection(key)}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === key ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {t.nav[key as keyof typeof t.nav]}
                    </button>
                ))}
                
                <a href="/blog" className="text-sm font-medium text-slate-400 hover:text-white">Blog</a>

                <div className="h-4 w-px bg-white/10 mx-2"></div>

                <button 
                    onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                    className="text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase"
                >
                    {language === 'nl' ? 'EN' : 'NL'}
                </button>

                <button 
                    onClick={() => { setFormType('quickscan'); setShowContactForm(true); }}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
                >
                    {t.nav.contact}
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
             <div className="md:hidden absolute top-20 left-0 w-full bg-[#020408] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                {['home', 'ventures', 'about', 'mission', 'why'].map((key) => (
                    <button key={key} onClick={() => scrollToSection(key)} className="text-left text-lg text-slate-300 py-2">
                        {t.nav[key as keyof typeof t.nav]}
                    </button>
                ))}
                <div className="h-px w-full bg-white/10 my-2"></div>
                <button onClick={() => { setFormType('quickscan'); setShowContactForm(true); }} className="bg-blue-600 text-white py-3 rounded-lg font-bold">
                    {t.hero.cta}
                </button>
             </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-mono text-blue-300 tracking-wide uppercase">{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                {t.hero.title} <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    {t.hero.titleHighlight}
                </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => { setFormType('quickscan'); setShowContactForm(true); }}
                    className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-200"
                >
                    <span className="flex items-center gap-2">
                        {t.hero.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-white blur-lg opacity-20 -z-10"></div>
                </button>
                <button 
                    onClick={() => { setFormType('consultation'); setShowContactForm(true); }}
                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                    {t.hero.ctaCall}
                </button>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* --- VENTURES SECTION (THE PROOF) --- */}
      <section id="ventures" className="py-32 relative z-10 border-t border-white/5 bg-[#020408]/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div className="max-w-2xl">
                    <h2 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">Venture Studio</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">{t.ventures.title}</h3>
                    <p className="text-xl text-slate-400">{t.ventures.subtitle}</p>
                </div>
                <a href="https://www.glowexamen.nl" target="_blank" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors mt-4 md:mt-0">
                    Visit GlowExamen <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            {/* GlowExamen Flagship Card */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-[#0B0D14] to-[#050507] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
                    <div className="flex flex-col justify-center">
                        <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide mb-6">
                            {t.ventures.glow.badge}
                        </div>
                        <div className="mb-6">
                            {/* GLOW LOGO REPRESENTATION */}
                            <h4 className="text-4xl font-black tracking-tighter text-white mb-2">
                                GLOW<span className="text-slate-600">EXAMEN</span>
                            </h4>
                        </div>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            {t.ventures.glow.desc}
                        </p>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span>Built on <strong>AIRA Neural Core™</strong></span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span>{t.ventures.glow.stat}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span>Adaptive Stress Management (Zen Mode)</span>
                            </div>
                        </div>

                        <div className="mt-10">
                             <a href="https://www.glowexamen.nl" target="_blank" className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                                Explore Case Study <ArrowRight className="w-4 h-4" />
                             </a>
                        </div>
                    </div>

                    {/* Visual Representation of Glow */}
                    <div className="relative rounded-2xl bg-[#020408] border border-white/5 p-6 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 z-0"></div>
                         {/* Abstract Dashboard UI Mockup */}
                         <div className="relative z-10 space-y-4 opacity-80">
                            <div className="flex gap-4 mb-8">
                                <div className="w-1/3 h-32 rounded-xl bg-white/5 animate-pulse"></div>
                                <div className="w-2/3 h-32 rounded-xl bg-white/5"></div>
                            </div>
                            <div className="w-full h-4 rounded-full bg-white/5">
                                <div className="w-3/4 h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                            </div>
                            <div className="flex justify-between text-xs font-mono text-slate-500 mt-2">
                                <span>AI Confidence Score</span>
                                <span>94%</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
                                <div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
                                <div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="about" className="py-24 relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.about.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Target, ...t.about.cards[0] },
                    { icon: CodeCardIcon, ...t.about.cards[1] }, // Using custom placeholder for code
                    { icon: Users, ...t.about.cards[2] }
                ].map((card, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all group">
                        <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                            <card.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                        <p className="text-slate-400">{card.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- MISSION STATS --- */}
      <section id="mission" className="py-24 relative z-10 border-y border-white/5 bg-blue-950/10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.mission.title}</h2>
                    <p className="text-xl text-slate-300 mb-8">{t.mission.subtitle}</p>
                    <button 
                        onClick={() => { setFormType('consultation'); setShowContactForm(true); }}
                        className="text-blue-400 font-bold hover:text-white flex items-center gap-2"
                    >
                        Let's talk Strategy <ArrowRight className="w-4 h-4"/>
                    </button>
                </div>
                <div className="grid gap-6">
                    <div className="p-6 rounded-xl bg-[#020408] border border-red-500/30 flex items-center gap-4">
                        <div className="p-3 rounded-full bg-red-500/20 text-red-500"><Shield className="w-6 h-6"/></div>
                        <div className="font-mono text-lg">{t.mission.stat1}</div>
                    </div>
                    <div className="p-6 rounded-xl bg-[#020408] border border-green-500/30 flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-500"><TrendingUp className="w-6 h-6"/></div>
                        <div className="font-mono text-lg">{t.mission.stat2}</div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-[#020408] relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">A</div>
                <span className="font-bold">AIRA AI</span>
            </div>
            <p className="text-slate-500 text-sm">{t.footer.rights}</p>
            <p className="text-slate-600 text-xs font-mono hidden md:block">{t.footer.tagline}</p>
        </div>
      </footer>

      {/* --- CONTACT FORM MODAL --- */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4">
          <div className="relative bg-[#0B0D14] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {formType === 'quickscan' ? t.hero.cta : t.hero.ctaCall}
                </h3>
                <p className="text-sm text-slate-400">Powered by AIRA Connect</p>
              </div>
              <button onClick={() => setShowContactForm(false)} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-2 h-[600px]">
              <iframe 
                src={formType === 'quickscan' 
                  ? "https://forms.cloud.microsoft/r/i49jV2AvRa?embed=true"
                  : "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__gBVhUFUNUxRSlNFNDgwRjQ2R0dNQzRBOE0zNFYyVS4u&embed=true"
                }
                width="100%" 
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen 
                title="AIRA Form"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper Icon
const CodeCardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

export default AIRAWebsite;
