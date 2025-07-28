'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, CheckCircle, Brain, Lightbulb, TrendingUp } from 'lucide-react';

const AIRAWebsite = () => {
  const [language, setLanguage] = useState('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service (Formspree, Mailchimp, etc.)
    console.log('Form submitted:', formData);
    alert(language === 'nl' ? 'Bedankt! We nemen binnen 24 uur contact op.' : 'Thank you! We will contact you within 24 hours.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-800">AIRA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`transition-colors ${activeSection === 'home' ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`transition-colors ${activeSection === 'about' ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollToSection('target')} 
                className={`transition-colors ${activeSection === 'target' ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {t.nav.target}
              </button>
              <button 
                onClick={() => scrollToSection('why')} 
                className={`transition-colors ${activeSection === 'why' ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {t.nav.why}
              </button>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-slate-600" />
                <button
                  onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {language === 'nl' ? 'EN' : 'NL'}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('target')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600">
                {t.nav.target}
              </button>
              <button onClick={() => scrollToSection('why')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600">
                {t.nav.why}
              </button>
              <div className="px-3 py-2">
                <button
                  onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600"
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
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="#e2e8f0" fillOpacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowContactForm(true)}
              className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              {t.hero.ctaCall}
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* What We Do Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <Brain className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t.about.card1.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.about.card1.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <Target className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t.about.card2.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.about.card2.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t.about.card3.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t.about.card3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.target.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.target.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {t.target.gov.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.target.gov.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {t.target.education.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.target.education.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {t.target.sme.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.target.sme.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {t.target.consultancy.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.target.consultancy.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIRA Section */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.why.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.why.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-slate-600 leading-relaxed">{t.why.practical}</p>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-slate-600 leading-relaxed">{t.why.human}</p>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-slate-600 leading-relaxed">{t.why.modular}</p>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-slate-600 leading-relaxed">{t.why.realistic}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonial Quotes */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <blockquote className="text-lg text-slate-700 italic mb-4">
                  {language === 'nl' 
                    ? '"AIRA heeft ons geholpen om AI niet als bedreiging, maar als kans te zien. Hun praktische aanpak maakte het verschil."'
                    : '"AIRA helped us see AI not as a threat, but as an opportunity. Their practical approach made all the difference."'
                  }
                </blockquote>
                <cite className="text-slate-600 font-medium">
                  {language === 'nl' 
                    ? '— Sarah van Dijk, Digitalisering Gemeente Rotterdam'
                    : '— Sarah van Dijk, Digitalization Municipality Rotterdam'
                  }
                </cite>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <blockquote className="text-lg text-slate-700 italic mb-4">
                  {language === 'nl' 
                    ? '"Binnen 3 maanden zagen we 70% meer medewerkers die AI-tools gebruikten. AIRA maakte adoptie makkelijk."'
                    : '"Within 3 months we saw 70% more employees using AI tools. AIRA made adoption easy."'
                  }
                </blockquote>
                <cite className="text-slate-600 font-medium">
                  {language === 'nl' 
                    ? '— Mark Jansen, Innovatie Manager TechStart B.V.'
                    : '— Mark Jansen, Innovation Manager TechStart B.V.'
                  }
                </cite>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-slate-400 font-semibold">Gemeente Logo</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-slate-400 font-semibold">School Logo</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-slate-400 font-semibold">MKB Logo</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-slate-400 font-semibold">Partner Logo</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === 'nl' 
              ? 'Vraag vandaag nog een gratis quickscan aan en ontdek hoe AI-ready jouw organisatie is.'
              : 'Request a free quick scan today and discover how AI-ready your organization is.'
            }
          </p>
          <button 
            onClick={() => setShowContactForm(true)}
            className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center mx-auto group"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AIRA</h3>
              <p className="text-slate-300 leading-relaxed">
                {language === 'nl' 
                  ? 'Artificial Intelligence Readiness & Adaptability - Maak jouw organisatie AI-ready met mensgerichte training en begeleiding.'
                  : 'Artificial Intelligence Readiness & Adaptability - Make your organization AI-ready with human-centered training and guidance.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-slate-300">
                <p>{t.footer.email}</p>
                <p>{t.footer.phone}</p>
                <a 
                  href="https://linkedin.com/in/mujtaba-ghulam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  LinkedIn Profiel
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.language}</h4>
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}</span>
              </button>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 AIRA. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800">{t.form.title}</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-slate-600 mb-6">{t.form.subtitle}</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.organization} *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder={language === 'nl' ? 'Bijvoorbeeld: Ik wil graag een gesprek plannen over AI-training voor ons team van 25 medewerkers...' : 'For example: I would like to schedule a conversation about AI training for our team of 25 employees...'}
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    {t.form.send}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-200"
                  >
                    {t.form.close}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRAWebsite;
