'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, CheckCircle, Brain, Lightbulb, TrendingUp, Sparkles, Zap, Shield, Rocket } from 'lucide-react';

const AIRAWebsite = () => {
  const [language, setLanguage] = useState('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  // Oorspronkelijke state voor het contactformulier, blijft ongewijzigd
  const [showContactForm, setShowContactForm] = useState(false);
  
  // NIEUWE state specifiek voor de Quickscan modal
  const [showQuickScanForm, setShowQuickScanForm] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'target', 'why'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
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
      nav: { home: 'Home', about: 'Wat doen wij?', target: 'Voor wie?', why: 'Waarom AIRA?', contact: 'Contact' },
      hero: { title: 'Maak jouw organisatie AI-ready', subtitle: 'Wij bieden AI-geletterdheidstrainingen voor teams, begeleide readiness-scans en adoptieprogrammas gericht op mensgerichte AI-transformatie.', cta: 'Vraag een Quickscan aan', ctaSecondary: 'Meer informatie', ctaContact: 'Contact opnemen', ctaCall: '📞 Plan vrijblijvend gesprek' },
      about: { title: 'Wat doen wij?', subtitle: 'AIRA helpt organisaties toekomstbestendig worden door mensen AI-geletterd te maken', card1: { title: 'AI-bewustzijn & training', description: 'Praktische trainingen die AI begrijpelijk en relevant maken voor elk team. Geen technische jargon, maar bruikbare kennis.' }, card2: { title: 'Readiness-scan & advies', description: 'Een grondige analyse van jullie AI-readiness met concrete adviezen en een stappenplan voor implementatie.' }, card3: { title: 'Verandering begeleiden', description: 'Begeleiding bij het adopteren van AI-tools en -processen, met focus op cultuur, communicatie en gedragsverandering.' } },
      target: { title: 'Voor wie?', subtitle: 'Wij helpen diverse organisaties bij hun AI-transformatie', gov: { title: 'Overheid', description: 'Gemeenten en publieke organisaties die AI willen inzetten voor betere dienstverlening' }, education: { title: 'Onderwijs', description: 'Scholen en onderwijsinstellingen die AI verantwoord willen implementeren' }, sme: { title: 'MKB', description: 'Midden- en kleinbedrijf dat AI wil gebruiken voor groei en efficiency' }, consultancy: { title: 'Consultancy', description: 'Adviesbureaus die hun AI-expertise willen uitbreiden' } },
      why: { title: 'Waarom AIRA?', subtitle: 'Wij geloven in mensgerichte AI-transformatie', practical: 'Praktisch: concrete tools en methoden, geen abstracte theorieën', human: 'Mensgericht: focus op mensen en cultuur, niet alleen op technologie', modular: 'Modulair: op maat gemaakte oplossingen voor elke organisatie', realistic: 'Realistisch: geen hype, maar haalbare stappen naar AI-readiness' },
      testimonials: { title: 'Vertrouwen van organisaties', subtitle: 'Zij gingen ons voor in AI-readiness' },
      footer: { contact: 'Contact', email: 'info@aira.nl', phone: '+31 6 12345678', privacy: 'Privacyvoorwaarden', terms: 'Algemene voorwaarden', language: 'Taal' },
      form: { title: 'Neem contact op', subtitle: 'Vul onderstaand formulier in en wij nemen binnen 24 uur contact op.', name: 'Naam', email: 'E-mailadres', organization: 'Organisatie', message: 'Bericht (optioneel)', send: 'Verstuur aanvraag', close: 'Sluiten' },
      // Nieuwe teksten alleen voor de Quickscan modal
      quickScan: { title: 'Vraag jouw Quickscan aan', subtitle: 'Vul het formulier in om de AI Readiness scan te starten.' }
    },
    en: {
      nav: { home: 'Home', about: 'What we do?', target: 'For whom?', why: 'Why AIRA?', contact: 'Contact' },
      hero: { title: 'Make your organisation AI-ready', subtitle: 'We offer AI literacy training for teams, guided readiness scans and adoption programs focused on human-centered AI transformation.', cta: 'Request a Quick Scan', ctaSecondary: 'Learn more', ctaContact: 'Get in touch', ctaCall: '📞 Schedule free consultation' },
      about: { title: 'What we do?', subtitle: 'AIRA helps organizations become future-ready by making people AI-literate', card1: { title: 'AI awareness & training', description: 'Practical training that makes AI understandable and relevant for every team. No technical jargon, but usable knowledge.' }, card2: { title: 'Readiness scan & advice', description: 'A thorough analysis of your AI readiness with concrete advice and a roadmap for implementation.' }, card3: { title: 'Guide change', description: 'Guidance in adopting AI tools and processes, focusing on culture, communication and behavioral change.' } },
      target: { title: 'For whom?', subtitle: 'We help diverse organizations with their AI transformation', gov: { title: 'Government', description: 'Municipalities and public organizations that want to use AI for better service delivery' }, education: { title: 'Education', description: 'Schools and educational institutions that want to implement AI responsibly' }, sme: { title: 'SME', description: 'Small and medium enterprises that want to use AI for growth and efficiency' }, consultancy: { title: 'Consultancy', description: 'Advisory firms that want to expand their AI expertise' } },
      why: { title: 'Why AIRA?', subtitle: 'We believe in human-centered AI transformation', practical: 'Practical: concrete tools and methods, no abstract theories', human: 'Human-centered: focus on people and culture, not just technology', modular: 'Modular: tailor-made solutions for every organization', realistic: 'Realistic: no hype, but achievable steps towards AI readiness' },
      testimonials: { title: 'Trusted by organizations', subtitle: 'They led the way in AI readiness' },
      footer: { contact: 'Contact', email: 'info@aira.nl', phone: '+31 6 12345678', privacy: 'Privacy Policy', terms: 'Terms & Conditions', language: 'Language' },
      form: { title: 'Get in touch', subtitle: 'Fill out the form below and we will contact you within 24 hours.', name: 'Name', email: 'Email address', organization: 'Organization', message: 'Message (optional)', send: 'Send request', close: 'Close' },
      // Nieuwe teksten alleen voor de Quickscan modal
      quickScan: { title: 'Request Your Quick Scan', subtitle: 'Fill in the form to start the AI Readiness scan.' }
    }
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert(language === 'nl' ? 'Bedankt! We nemen binnen 24 uur contact op.' : 'Thank you! We will contact you within 24 hours.');
        setShowContactForm(false);
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        throw new Error('Verzenden mislukt');
      }
    } catch (error) {
      alert(language === 'nl' ? 'Er is een fout opgetreden. Probeer het opnieuw.' : 'An error occurred. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ... (Alle ongewijzigde JSX zoals Animated Background, Cursor, Nav) ... */}
            {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  AIRA
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl -z-10"></div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'target', 'why'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === section 
                      ? 'text-blue-400 font-medium' 
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  {t.nav[section as keyof typeof t.nav]}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg transition-all duration-300 ${
                    activeSection === section ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-50 group-hover:scale-100'
                  }`}></div>
                </button>
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 ml-4">
                <Globe className="w-4 h-4 text-slate-400" />
                <button
                  onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                  className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors px-3 py-1 rounded border border-slate-700 hover:border-blue-500/50 bg-slate-800/50 hover:bg-slate-800"
                >
                  {language === 'nl' ? 'EN' : 'NL'}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-lg text-slate-300 hover:text-blue-400 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['home', 'about', 'target', 'why'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
              <div className="px-4 py-3">
                <button
                  onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                  className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'nl' ? 'English' : 'Nederlands'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* ... (ongewijzigde content) ... */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* --- GEWIJZIGDE KNOP --- */}
            <button 
              onClick={() => setShowQuickScanForm(true)} // Opent de nieuwe Quickscan modal
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
              <div className="relative flex items-center justify-center text-white">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            {/* --- ONGEWIJZIGDE KNOP --- */}
            <button 
              onClick={() => setShowContactForm(true)} // Gebruikt nog steeds de originele state
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center">
                {t.hero.ctaCall}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ... (Alle andere secties blijven ongewijzigd) ... */}
      {/* What We Do Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: t.about.card1.title, description: t.about.card1.description, color: 'from-blue-500 to-cyan-500' },
              { icon: Target, title: t.about.card2.title, description: t.about.card2.description, color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, title: t.about.card3.title, description: t.about.card3.description, color: 'from-green-500 to-emerald-500' }
            ].map((card, index) => (
              <div key={index} className="group relative">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
                  
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.target.title}
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.target.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: t.target.gov.title, description: t.target.gov.description, color: 'from-blue-400 to-blue-600' },
              { icon: Lightbulb, title: t.target.education.title, description: t.target.education.description, color: 'from-yellow-400 to-orange-500' },
              { icon: Rocket, title: t.target.sme.title, description: t.target.sme.description, color: 'from-green-400 to-emerald-600' },
              { icon: Award, title: t.target.consultancy.title, description: t.target.consultancy.description, color: 'from-purple-400 to-purple-600' }
            ].map((target, index) => (
              <div key={index} className="group relative">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-800/20 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${target.color} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl`}></div>
                  
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${target.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <target.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {target.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {target.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AIRA Section */}
      <section id="why" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.why.title}
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.why.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { text: t.why.practical, icon: Zap },
              { text: t.why.human, icon: Users },
              { text: t.why.modular, icon: Target },
              { text: t.why.realistic, icon: Shield }
            ].map((item, index) => (
              <div key={index} className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900/30 to-slate-800/20 border border-slate-700/30 hover:border-green-500/30 transition-all duration-500 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.testimonials.title}
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonial Quotes */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: language === 'nl' 
                    ? '"AIRA heeft ons geholpen om AI niet als bedreiging, maar als kans te zien. Hun praktische aanpak maakte het verschil."'
                    : '"AIRA helped us see AI not as a threat, but as an opportunity. Their practical approach made all the difference."',
                  author: language === 'nl' 
                    ? 'Sarah van Dijk, Digitalisering Gemeente Rotterdam'
                    : 'Sarah van Dijk, Digitalization Municipality Rotterdam'
                },
                {
                  quote: language === 'nl' 
                    ? '"Binnen 3 maanden zagen we 70% meer medewerkers die AI-tools gebruikten. AIRA maakte adoptie makkelijk."'
                    : '"Within 3 months we saw 70% more employees using AI tools. AIRA made adoption easy."',
                  author: language === 'nl' 
                    ? 'Mark Jansen, Innovatie Manager TechStart B.V.'
                    : 'Mark Jansen, Innovation Manager TechStart B.V.'
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                    
                    <div className="relative">
                      <div className="text-4xl text-blue-400/30 mb-4">"</div>
                      <blockquote className="text-lg text-slate-300 italic mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {testimonial.quote}
                      </blockquote>
                      <cite className="text-slate-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                        — {testimonial.author}
                      </cite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
            {['Gemeente Logo', 'School Logo', 'MKB Logo', 'Partner Logo'].map((logo, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-6 rounded-xl border border-slate-700/30 flex items-center justify-center h-24 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm">
                  <span className="text-slate-500 font-semibold group-hover:text-slate-400 transition-colors duration-300">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
        {/* ... (ongewijzigde content) ... */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              {language === 'nl' 
                ? 'Vraag vandaag nog een gratis quickscan aan en ontdek hoe AI-ready jouw organisatie is.'
                : 'Request a free quick scan today and discover how AI-ready your organization is.'
              }
            </p>
            {/* --- GEWIJZIGDE KNOP --- */}
            <button 
              onClick={() => setShowQuickScanForm(true)} // Opent de nieuwe Quickscan modal
              className="group relative inline-flex items-center px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-slate-100 transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative flex items-center justify-center text-slate-900">
                    <Sparkles className="mr-3 w-5 h-5 text-blue-600" />
                    {t.hero.cta}
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>
        </div>
      </section>

      {/* ... (Footer blijft ongewijzigd) ... */}
      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center group">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AIRA
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                {language === 'nl' 
                  ? 'Artificial Intelligence Readiness & Adaptability - Maak jouw organisatie AI-ready met mensgerichte training en begeleiding.'
                  : 'Artificial Intelligence Readiness & Adaptability - Make your organization AI-ready with human-centered training and guidance.'
                }
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{t.footer.contact}</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <span className="text-xs">@</span>
                  </div>
                  <span className="group-hover:text-slate-300 transition-colors">{t.footer.email}</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <span className="text-xs">📞</span>
                  </div>
                  <span className="group-hover:text-slate-300 transition-colors">{t.footer.phone}</span>
                </div>
                <a 
                  href="https://linkedin.com/in/mujtaba-ghulam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-blue-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <span className="text-xs">in</span>
                  </div>
                  <span>LinkedIn Profiel</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{t.footer.language}</h4>
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <span>{language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}</span>
              </button>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © 2025 AIRA. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* --- ONGEWIJZIGDE CONTACT FORM MODAL --- */}
      {/* Deze blijft exact zoals hij was en wordt getoond door de "Plan gesprek" knop */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
            <div className="relative p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.form.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <button onClick={() => setShowContactForm(false)} className="p-2 text-slate-400 hover:text-white rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-slate-400 mb-8">{t.form.subtitle}</p>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* ... (ongewijzigde formulier-velden) ... */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.name} *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white" placeholder="Jouw naam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.email} *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white" placeholder="jouw@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.organization} *</label>
                  <input type="text" name="organization" required value={formData.organization} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white" placeholder="Jouw organisatie" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.message}</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none text-white" placeholder="Optioneel..."></textarea>
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="submit" className="flex-1 relative px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white">{t.form.send}</button>
                  <button type="button" onClick={() => setShowContactForm(false)} className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl font-semibold hover:bg-slate-800/50">{t.form.close}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* --- NIEUWE QUICKSCAN MODAL MET IFRAME --- */}
      {showQuickScanForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col border border-slate-700 shadow-2xl">
            <div className="relative p-6 flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.quickScan.title}</h3>
                  <p className="text-slate-400">{t.quickScan.subtitle}</p>
                </div>
                <button
                  onClick={() => setShowQuickScanForm(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-grow p-2 pb-6 min-h-0">
              <iframe 
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__gBVhUFUQzJEQVpVQVlRVTVRQ05XTVJVTUNFUUlDSy4u&embed=true"
                className="w-full h-full border-none rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRAWebsite;
