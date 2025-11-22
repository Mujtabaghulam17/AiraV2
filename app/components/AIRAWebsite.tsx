'use client'

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, 
  CheckCircle, Brain, TrendingUp, Zap, Shield, 
  ExternalLink, Cpu, Linkedin, Lock, Code
} from 'lucide-react';

// --- TYPES ---
type Language = 'nl' | 'en';
type FormType = 'quickscan' | 'consultation';

const AIRAWebsite = () => {
  const [language, setLanguage] = useState<Language>('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState<FormType>('quickscan');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // --- SEO & GEO STRATEGY (JSON-LD) ---
  // Dit vertelt Google: AIRA is de eigenaar, GlowExamen is het product.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIRA AI",
    "url": "https://www.aira-ai.nl",
    "logo": "https://www.aira-ai.nl/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/aira-artificialintelligence-readiness-adaptability"
    ],
    "description": "Leading AI Transformation Consultancy & Venture Studio. Builders of GlowExamen.",
    "owns": [
      {
        "@type": "SoftwareApplication",
        "name": "GlowExamen",
        "url": "https://www.glowexamen.nl",
        "applicationCategory": "EducationalApplication"
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'ventures', 'why', 'mission'];
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
        ventures: 'Producten (Glow)',
        why: 'Waarom AIRA?',
        mission: 'Missie',
        contact: 'Contact'
      },
      hero: {
        badge: 'AIRA Neural Core™ Technology',
        title: 'Wij bouwen de intelligentie',
        titleHighlight: 'van morgen.',
        subtitle: 'AIRA is een AI Venture Studio & Consultancy. Wij adviseren niet alleen, wij bouwen marktleidende producten zoals GlowExamen.',
        cta: 'Start Quickscan',
        ctaCall: 'Plan Strategisch Gesprek'
      },
      ventures: {
        title: 'Onze Ventures',
        subtitle: 'Het bewijs van onze technologie: wij bouwen en schalen onze eigen SaaS producten.',
        glow: {
          badge: 'Flagship Product',
          desc: 'Het #1 AI-platform voor examentraining in Nederland. Gebouwd op de AIRA Neural Core™.',
          stat: 'Marktleider in Adaptief Leren'
        }
      },
      why: {
        title: 'Waarom marktleiders voor AIRA kiezen',
        subtitle: 'Geen experimenten, maar proven technology.',
        cards: {
          tech: { title: 'Proprietary Tech', desc: 'Wij gebruiken onze eigen AIRA Neural Core™, geen standaard ChatGPT wrappers.' },
          roi: { title: 'ROI-First', desc: 'Geen eindeloze trajecten. Wij leveren meetbare business value in 90 dagen.' },
          security: { title: 'Enterprise Security', desc: 'Volledig AVG/GDPR compliant en enterprise-grade data beveiliging.' },
          human: { title: 'Human-Centric', desc: 'Technologie die medewerkers versterkt, niet vervangt.' }
        }
      },
      mission: {
        title: 'Onze Missie',
        subtitle: 'Nederland AI-ready maken, team voor team.',
        stat1: 'AI Adoptie Partners',
        stat2: 'Succesvolle Implementaties'
      },
      footer: {
        rights: '© 2025 AIRA AI. Alle rechten voorbehouden.',
        tagline: 'Building the intelligence layer for the Netherlands.',
        linkedin: 'Volg ons op LinkedIn'
      }
    },
    en: {
      nav: {
        home: 'Home',
        ventures: 'Ventures (Glow)',
        why: 'Why AIRA?',
        mission: 'Mission',
        contact: 'Contact'
      },
      hero: {
        badge: 'AIRA Neural Core™ Technology',
        title: 'Building the intelligence',
        titleHighlight: 'of tomorrow.',
        subtitle: 'AIRA is an AI Venture Studio & Consultancy. We don\'t just advise, we build market-leading products like GlowExamen.',
        cta: 'Start Quickscan',
        ctaCall: 'Schedule Strategy Call'
      },
      ventures: {
        title: 'Our Ventures',
        subtitle: 'Proof of technology: we build and scale our own successful SaaS products.',
        glow: {
          badge: 'Flagship Product',
          desc: 'The #1 AI platform for exam training in the Netherlands. Built on the AIRA Neural Core™.',
          stat: 'Market Leader in Adaptive Learning'
        }
      },
      why: {
        title: 'Why leaders choose AIRA',
        subtitle: 'No experiments, but proven technology.',
        cards: {
          tech: { title: 'Proprietary Tech', desc: 'We use our own AIRA Neural Core™, not just basic ChatGPT wrappers.' },
          roi: { title: 'ROI-First', desc: 'No endless roadmaps. We deliver measurable business value in 90 days.' },
          security: { title: 'Enterprise Security', desc: 'Fully GDPR compliant and enterprise-grade data security.' },
          human: { title: 'Human-Centric', desc: 'Technology that empowers employees, not replaces them.' }
        }
      },
      mission: {
        title: 'Our Mission',
        subtitle: 'Making the Netherlands AI-ready, one team at a time.',
        stat1: 'AI Adoption Partners',
        stat2: 'Successful Implementations'
      },
      footer: {
        rights: '© 2025 AIRA AI. All rights reserved.',
        tagline: 'Building the intelligence layer for the Netherlands.',
        linkedin: 'Connect on LinkedIn'
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px]"></div>
        
        {/* Mouse Follower */}
        <div 
          className="fixed pointer-events-none w-[400px] h-[400px] rounded-full opacity-20 blur-[80px] transition-transform duration-75 ease-out mix-blend-screen"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-[#020408]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">A</div>
                <span className="text-xl font-bold tracking-tight text-white">AIRA</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {['home', 'ventures', 'why', 'mission'].map((key) => (
                    <button
                        key={key}
                        onClick={() => scrollToSection(key)}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === key ? 'text-white' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {t.nav[key as keyof typeof t.nav]}
                    </button>
                ))}
                
                <div className="h-4 w-px bg-white/10 mx-2"></div>

                {/* Nav Icon: LinkedIn */}
                <a 
                  href="https://linkedin.com/company/aira-artificialintelligence-readiness-adaptability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0077b5] transition-colors"
                  title="LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>

                {/* Nav Icon: Language */}
                <button 
                    onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                    className="text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase"
                >
                    {language === 'nl' ? 'EN' : 'NL'}
                </button>

                {/* Nav Button: CTA */}
                <button 
                    onClick={() => { setFormType('quickscan'); setShowContactForm(true); }}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:border-blue-500/50"
                >
                    {t.nav.contact}
                </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
             <div className="md:hidden absolute top-20 left-0 w-full bg-[#020408] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
                {['home', 'ventures', 'why', 'mission'].map((key) => (
                    <button key={key} onClick={() => scrollToSection(key)} className="text-left text-lg text-slate-300 py-2">
                        {t.nav[key as keyof typeof t.nav]}
                    </button>
                ))}
                 <a 
                  href="https://linkedin.com/company/aira-artificialintelligence-readiness-adaptability" 
                  target="_blank" 
                  className="text-left text-lg text-slate-300 py-2 flex items-center gap-2"
                >
                    LinkedIn <ExternalLink className="w-4 h-4"/>
                </a>
                <button onClick={() => { setFormType('quickscan'); setShowContactForm(true); }} className="bg-blue-600 text-white py-3 rounded-lg font-bold w-full">
                    {t.hero.cta}
                </button>
             </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-blue-300 tracking-wide uppercase">{t.hero.badge}</span>
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
                </button>
                <button 
                    onClick={() => { setFormType('consultation'); setShowContactForm(true); }}
                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                    {t.hero.ctaCall}
                </button>
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* --- VENTURES SECTION (STRATEGIC PROOF) --- */}
      <section id="ventures" className="py-32 relative z-10 border-t border-white/5 bg-[#020408]/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div className="max-w-2xl">
                    <h2 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">Venture Studio</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">{t.ventures.title}</h3>
                    <p className="text-xl text-slate-400">{t.ventures.subtitle}</p>
                </div>
                <a href="https://www.glowexamen.nl" target="_blank" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors mt-4 md:mt-0 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">
                    Visit GlowExamen <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            {/* GlowExamen Card - High End */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-[#0B0D14] to-[#050507] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide mb-6">
                            {t.ventures.glow.badge}
                        </div>
                        <h4 className="text-4xl font-black tracking-tighter text-white mb-2">
                            GLOW<span className="text-slate-600">EXAMEN</span>
                        </h4>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            {t.ventures.glow.desc}
                        </p>
                        
                        <div className="space-y-4 border-l-2 border-white/10 pl-6">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Brain className="w-5 h-5 text-blue-500" />
                                <span>Built on <strong>AIRA Neural Core™</strong></span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Users className="w-5 h-5 text-blue-500" />
                                <span>{t.ventures.glow.stat}</span>
                            </div>
                        </div>

                        <div className="mt-10">
                             {/* LINK NAAR INTERNE CASE STUDY */}
                             <a href="/cases/glow" className="text-white font-bold hover:text-blue-400 transition-colors inline-flex items-center gap-2 border-b border-blue-500/30 pb-1 hover:border-blue-500">
                                View Product Case Study <ArrowRight className="w-4 h-4" />
                             </a>
                        </div>
                    </div>

                    {/* Visual Mockup Area */}
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl bg-[#020408] border border-white/5 overflow-hidden order-1 lg:order-2 group-hover:translate-y-[-5px] transition-transform">
                         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
                         <div className="absolute inset-10 border border-white/10 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-black text-white/10">GLOW</div>
                                <div className="text-sm text-white/20 mt-2">Powered by AIRA</div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- WHY AIRA (BENTO GRID) - NEW SECTION --- */}
      <section id="why" className="py-32 relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.why.title}</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.why.subtitle}</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                
                {/* Card 1: Tech (Large) */}
                <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-slate-900/40 border border-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <Cpu className="w-10 h-10 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t.why.cards.tech.title}</h3>
                    <p className="text-slate-400 text-lg max-w-md">{t.why.cards.tech.desc}</p>
                </div>

                {/* Card 2: ROI */}
                <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-green-500/30 transition-all group">
                    <TrendingUp className="w-10 h-10 text-green-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t.why.cards.roi.title}</h3>
                    <p className="text-slate-400">{t.why.cards.roi.desc}</p>
                </div>

                {/* Card 3: Security */}
                <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-purple-500/30 transition-all group">
                    <Lock className="w-10 h-10 text-purple-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t.why.cards.security.title}</h3>
                    <p className="text-slate-400">{t.why.cards.security.desc}</p>
                </div>

                {/* Card 4: Human (Large) */}
                <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-slate-900/40 border border-white/10 hover:border-purple-500/30 transition-all group relative overflow-hidden">
                     <div className="absolute right-0 top-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
                    <Users className="w-10 h-10 text-pink-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t.why.cards.human.title}</h3>
                    <p className="text-slate-400 text-lg max-w-md">{t.why.cards.human.desc}</p>
                </div>
            </div>
         </div>
      </section>

      {/* --- MISSION STATS --- */}
      <section id="mission" className="py-24 relative z-10 border-y border-white/5 bg-blue-950/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.mission.title}</h2>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">{t.mission.subtitle}</p>
                    <button 
                        onClick={() => { setFormType('consultation'); setShowContactForm(true); }}
                        className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all"
                    >
                        Let's talk Strategy <ArrowRight className="w-4 h-4"/>
                    </button>
                </div>
                <div className="grid gap-6">
                    <div className="p-6 rounded-xl bg-[#020408] border border-white/5 hover:border-blue-500/30 transition-colors flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-500/20 text-blue-500"><Users className="w-6 h-6"/></div>
                        <div>
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-slate-500 text-sm uppercase tracking-wide">{t.mission.stat1}</div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl bg-[#020408] border border-white/5 hover:border-green-500/30 transition-colors flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-500"><CheckCircle className="w-6 h-6"/></div>
                         <div>
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-slate-500 text-sm uppercase tracking-wide">{t.mission.stat2}</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-white/10 bg-[#020408] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white">A</div>
                        <span className="text-xl font-bold text-white">AIRA AI</span>
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs">{t.footer.tagline}</p>
                </div>
                
                {/* LINKEDIN KNOP - Opvallend */}
                <a 
                    href="https://linkedin.com/company/aira-artificialintelligence-readiness-adaptability" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 group"
                >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">{t.footer.linkedin}</span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </a>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                <p>{t.footer.rights}</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
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

export default AIRAWebsite;
