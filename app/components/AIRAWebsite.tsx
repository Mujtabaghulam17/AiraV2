'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, CheckCircle, Brain, Lightbulb, TrendingUp, Sparkles, Zap, Shield, Rocket } from 'lucide-react';

const AIRAWebsite = () => {
  const [language, setLanguage] = useState('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  // State om de modal te tonen/verbergen en de content te bepalen
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'quickscan' | 'contact' | null>(null);

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
  
  // Functie om de Quickscan modal te openen
  const openQuickScanModal = () => {
    setModalContent('quickscan');
    setIsModalOpen(true);
  };

  // Functie om de Contact modal te openen
  const openContactModal = () => {
    setModalContent('contact');
    setIsModalOpen(true);
  };

  const translations = {
    nl: {
      nav: {
        home: 'Home',
        about: 'Wat doen wij?',
        target: 'Voor wie?',
        why: 'Waarom AIRA?',
        contact: 'Contact'
      },
      hero: {
        title: 'Maak jouw organisatie AI-ready',
        subtitle: 'Wij bieden AI-geletterdheidstrainingen voor teams, begeleide readiness-scans en adoptieprogrammas gericht op mensgerichte AI-transformatie.',
        cta: 'Vraag een Quickscan aan',
        ctaSecondary: 'Meer informatie',
        ctaContact: 'Contact opnemen',
        ctaCall: '📞 Plan vrijblijvend gesprek'
      },
      about: {
        title: 'Wat doen wij?',
        subtitle: 'AIRA helpt organisaties toekomstbestendig worden door mensen AI-geletterd te maken',
        card1: {
          title: 'AI-bewustzijn & training',
          description: 'Praktische trainingen die AI begrijpelijk en relevant maken voor elk team. Geen technische jargon, maar bruikbare kennis.'
        },
        card2: {
          title: 'Readiness-scan & advies',
          description: 'Een grondige analyse van jullie AI-readiness met concrete adviezen en een stappenplan voor implementatie.'
        },
        card3: {
          title: 'Verandering begeleiden',
          description: 'Begeleiding bij het adopteren van AI-tools en -processen, met focus op cultuur, communicatie en gedragsverandering.'
        }
      },
      target: {
        title: 'Voor wie?',
        subtitle: 'Wij helpen diverse organisaties bij hun AI-transformatie',
        gov: {
          title: 'Overheid',
          description: 'Gemeenten en publieke organisaties die AI willen inzetten voor betere dienstverlening'
        },
        education: {
          title: 'Onderwijs',
          description: 'Scholen en onderwijsinstellingen die AI verantwoord willen implementeren'
        },
        sme: {
          title: 'MKB',
          description: 'Midden- en kleinbedrijf dat AI wil gebruiken voor groei en efficiency'
        },
        consultancy: {
          title: 'Consultancy',
          description: 'Adviesbureaus die hun AI-expertise willen uitbreiden'
        }
      },
      why: {
        title: 'Waarom AIRA?',
        subtitle: 'Wij geloven in mensgerichte AI-transformatie',
        practical: 'Praktisch: concrete tools en methoden, geen abstracte theorieën',
        human: 'Mensgericht: focus op mensen en cultuur, niet alleen op technologie',
        modular: 'Modulair: op maat gemaakte oplossingen voor elke organisatie',
        realistic: 'Realistisch: geen hype, maar haalbare stappen naar AI-readiness'
      },
      testimonials: {
        title: 'Vertrouwen van organisaties',
        subtitle: 'Zij gingen ons voor in AI-readiness'
      },
      footer: {
        contact: 'Contact',
        email: 'info@aira.nl',
        phone: '+31 6 12345678',
        privacy: 'Privacyvoorwaarden',
        terms: 'Algemene voorwaarden',
        language: 'Taal'
      },
      form: {
        quickScanTitle: 'Vraag jouw Quickscan aan',
        quickScanSubtitle: 'Vul onderstaand formulier in om de scan te starten.',
        contactTitle: 'Plan een gesprek',
        contactSubtitle: 'Vul het formulier in en we nemen contact op voor een vrijblijvend gesprek.',
        name: 'Naam',
        email: 'E-mailadres',
        organization: 'Organisatie',
        message: 'Bericht (optioneel)',
        send: 'Verstuur aanvraag',
        close: 'Sluiten'
      }
    },
    en: {
        nav: { home: 'Home', about: 'What we do?', target: 'For whom?', why: 'Why AIRA?', contact: 'Contact' },
        hero: { title: 'Make your organisation AI-ready', subtitle: 'We offer AI literacy training for teams, guided readiness scans and adoption programs focused on human-centered AI transformation.', cta: 'Request a Quick Scan', ctaSecondary: 'Learn more', ctaContact: 'Get in touch', ctaCall: '📞 Schedule free consultation' },
        about: { title: 'What we do?', subtitle: 'AIRA helps organizations become future-ready by making people AI-literate', card1: { title: 'AI awareness & training', description: 'Practical training that makes AI understandable and relevant for every team. No technical jargon, but usable knowledge.' }, card2: { title: 'Readiness scan & advice', description: 'A thorough analysis of your AI readiness with concrete advice and a roadmap for implementation.' }, card3: { title: 'Guide change', description: 'Guidance in adopting AI tools and processes, focusing on culture, communication and behavioral change.' } },
        target: { title: 'For whom?', subtitle: 'We help diverse organizations with their AI transformation', gov: { title: 'Government', description: 'Municipalities and public organizations that want to use AI for better service delivery' }, education: { title: 'Education', description: 'Schools and educational institutions that want to implement AI responsibly' }, sme: { title: 'SME', description: 'Small and medium enterprises that want to use AI for growth and efficiency' }, consultancy: { title: 'Consultancy', description: 'Advisory firms that want to expand their AI expertise' } },
        why: { title: 'Why AIRA?', subtitle: 'We believe in human-centered AI transformation', practical: 'Practical: concrete tools and methods, no abstract theories', human: 'Human-centered: focus on people and culture, not just technology', modular: 'Modular: tailor-made solutions for every organization', realistic: 'Realistic: no hype, but achievable steps towards AI readiness' },
        testimonials: { title: 'Trusted by organizations', subtitle: 'They led the way in AI readiness' },
        footer: { contact: 'Contact', email: 'info@aira.nl', phone: '+31 6 12345678', privacy: 'Privacy Policy', terms: 'Terms & Conditions', language: 'Language' },
        form: { quickScanTitle: 'Request Your Quick Scan', quickScanSubtitle: 'Fill in the form below to start the scan.', contactTitle: 'Schedule a Consultation', contactSubtitle: 'Fill in the form, and we will contact you for a no-obligation consultation.', name: 'Name', email: 'Email address', organization: 'Organization', message: 'Message (optional)', send: 'Send Request', close: 'Close' }
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
        setIsModalOpen(false);
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
      {/* ... (All other unchanged sections like background, cursor, nav) ... */}
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
          {/* ... (content) ... */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={openQuickScanModal} // GEWIJZIGD
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden"
            >
              {/* ... (styling) ... */}
              <div className="relative flex items-center justify-center text-white">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button 
              onClick={openContactModal} // GEWIJZIGD
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* ... (styling) ... */}
              <div className="relative flex items-center justify-center">
                {t.hero.ctaCall}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ... (All other sections like 'about', 'target', 'why', 'testimonials') ... */}
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
         {/* ... (content) ... */}
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
            <button 
              onClick={openQuickScanModal} // GEWIJZIGD
              className="group relative inline-flex items-center px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden"
            >
              {/* ... (styling) ... */}
              <div className="relative flex items-center justify-center text-slate-900">
                <Sparkles className="mr-3 w-5 h-5 text-blue-600" />
                {t.hero.cta}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
         </div>
      </section>

      {/* ... (Footer section) ... */}

      {/* --- GEWIJZIGDE MODAL SECTIE --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl w-full border border-slate-700 shadow-2xl ${
            modalContent === 'quickscan' ? 'max-w-4xl h-[90vh]' : 'max-w-md max-h-[90vh]'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6 flex-shrink-0">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {modalContent === 'quickscan' ? t.form.quickScanTitle : t.form.contactTitle}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* --- Quickscan Iframe Content --- */}
              {modalContent === 'quickscan' && (
                <div className="flex-grow min-h-0">
                  <iframe 
                    src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__gBVhUFUQzJEQVpVQVlRVTVRQ05XTVJVTUNFUUlDSy4u&embed=true" 
                    className="w-full h-full border-none rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {/* --- Contact Form Content --- */}
              {modalContent === 'contact' && (
                <div className="overflow-y-auto">
                  <p className="text-slate-400 mb-8">{t.form.contactSubtitle}</p>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.name} *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500" placeholder="Jouw naam" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.email} *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500" placeholder="jouw@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.organization} *</label>
                      <input type="text" name="organization" required value={formData.organization} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500" placeholder="Jouw organisatie" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3">{t.form.message}</label>
                      <textarea name="message" rows={3} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none text-white placeholder-slate-500" placeholder="Vertel ons waar we mee kunnen helpen..."></textarea>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button type="submit" className="flex-1 relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
                            <span className="relative text-white">{t.form.send}</span>
                        </button>
                        <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl font-semibold hover:bg-slate-800/50 transition-all duration-300">{t.form.close}</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRAWebsite;
