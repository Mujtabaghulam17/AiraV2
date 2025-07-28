'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, CheckCircle, Brain, Lightbulb, TrendingUp, Sparkles, Zap, Shield, Rocket } from 'lucide-react';

const AIRAWebsite = () => {
  const [language, setLanguage] = useState('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Omdat het formulier is vervangen, zijn de 'formData' state en de handlers niet meer nodig.
  // Ze kunnen eventueel verwijderd worden voor een schonere code, maar ik laat ze staan om niets kapot te maken.
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
        title: 'Vraag jouw Quickscan aan',
        subtitle: 'Vul onderstaand formulier in en wij nemen binnen 24 uur contact op.',
        name: 'Naam',
        email: 'E-mailadres',
        organization: 'Organisatie',
        message: 'Bericht (optioneel)',
        send: 'Verstuur aanvraag',
        close: 'Sluiten'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'What we do?',
        target: 'For whom?',
        why: 'Why AIRA?',
        contact: 'Contact'
      },
      hero: {
        title: 'Make your organisation AI-ready',
        subtitle: 'We offer AI literacy training for teams, guided readiness scans and adoption programs focused on human-centered AI transformation.',
        cta: 'Request a Quick Scan',
        ctaSecondary: 'Learn more',
        ctaContact: 'Get in touch',
        ctaCall: '📞 Schedule free consultation'
      },
      about: {
        title: 'What we do?',
        subtitle: 'AIRA helps organizations become future-ready by making people AI-literate',
        card1: {
          title: 'AI awareness & training',
          description: 'Practical training that makes AI understandable and relevant for every team. No technical jargon, but usable knowledge.'
        },
        card2: {
          title: 'Readiness scan & advice',
          description: 'A thorough analysis of your AI readiness with concrete advice and a roadmap for implementation.'
        },
        card3: {
          title: 'Guide change',
          description: 'Guidance in adopting AI tools and processes, focusing on culture, communication and behavioral change.'
        }
      },
      target: {
        title: 'For whom?',
        subtitle: 'We help diverse organizations with their AI transformation',
        gov: {
          title: 'Government',
          description: 'Municipalities and public organizations that want to use AI for better service delivery'
        },
        education: {
          title: 'Education',
          description: 'Schools and educational institutions that want to implement AI responsibly'
        },
        sme: {
          title: 'SME',
          description: 'Small and medium enterprises that want to use AI for growth and efficiency'
        },
        consultancy: {
          title: 'Consultancy',
          description: 'Advisory firms that want to expand their AI expertise'
        }
      },
      why: {
        title: 'Why AIRA?',
        subtitle: 'We believe in human-centered AI transformation',
        practical: 'Practical: concrete tools and methods, no abstract theories',
        human: 'Human-centered: focus on people and culture, not just technology',
        modular: 'Modular: tailor-made solutions for every organization',
        realistic: 'Realistic: no hype, but achievable steps towards AI readiness'
      },
      testimonials: {
        title: 'Trusted by organizations',
        subtitle: 'They led the way in AI readiness'
      },
      footer: {
        contact: 'Contact',
        email: 'info@aira.nl',
        phone: '+31 6 12345678',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        language: 'Language'
      },
      form: {
        title: 'Request your Quick Scan',
        subtitle: 'Fill out the form below and we will contact you within 24 hours.',
        name: 'Name',
        email: 'Email address',
        organization: 'Organization',
        message: 'Message (optional)',
        send: 'Send request',
        close: 'Close'
      }
    }
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Deze functies zijn niet langer direct nodig voor het iframe, maar we laten ze staan.
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2">
                <animate attributeName="stop-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)">
            <circle cx="200" cy="150" r="3" fill="url(#neural-gradient)">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="300" r="3" fill="url(#neural-gradient)">
              <animate attributeName="r" values="3;1;3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="500" r="2" fill="url(#neural-gradient)">
              <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <line x1="200" y1="150" x2="800" y2="300" stroke="url(#neural-gradient)" strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="800" y1="300" x2="400" y2="500" stroke="url(#neural-gradient)" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.5s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
        }}
      />

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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-lg text-slate-300 hover:text-blue-400 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

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

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">
                {language === 'nl' ? 'De toekomst is AI-ready' : 'The future is AI-ready'}
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-50 blur-3xl -z-10"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center text-white">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10"></div>
            </button>
            
            <button 
              onClick={() => setShowContactForm(true)}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center">
                {t.hero.ctaCall}
              </div>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* Sections (About, Target, Why, etc.) remain unchanged... */}
      <section id="about" className="py-24 relative">{/* ... */}</section>
      <section id="target" className="py-24 relative">{/* ... */}</section>
      <section id="why" className="py-24 relative">{/* ... */}</section>
      <section className="py-24 relative">{/* ... */}</section>
      <section className="py-24 relative overflow-hidden">{/* ... */}</section>
      <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 border-t border-slate-800">{/* ... */}</footer>


      {/* MODIFIED PART: Contact Form Modal with Iframe */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl w-full max-w-3xl h-[90vh] max-h-[720px] border border-slate-700 shadow-2xl flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl -z-10"></div>
            
            {/* Modal Header */}
            <div className="relative p-6 flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.form.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Iframe Container */}
            <div className="relative flex-grow p-2 pb-4 px-4 h-full">
              <iframe 
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__gBVhUFUQzJEQVpVQVlRVTVRQ05XTVJVTUNFUUlDSy4u&embed=true" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.5rem'
                }} 
                allowFullScreen
                // JSX-compatible attributes for cross-browser support
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" 
                msallowfullscreen="true"
              >
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRAWebsite;
