'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, CheckCircle, Brain, Lightbulb, TrendingUp, Sparkles, Zap, Shield, Rocket, Home } from 'lucide-react';

const PricingPage = () => {
  const [language, setLanguage] = useState('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
        home: 'Terug naar Home',
        pricing: 'Prijzen',
        contact: 'Contact'
      },
      hero: {
        title: 'Transparante Prijzen voor AI-Success',
        subtitle: 'Kies het pakket dat perfect past bij jouw organisatie. Van awareness tot volledige AI-transformatie.',
        cta: 'Gratis Consult Plannen'
      },
      pricing: {
        title: 'Onze Pakketten',
        subtitle: 'Van eerste kennismaking tot volledige AI-transformatie',
        workshop: {
          title: 'AI Awareness Workshop',
          price: '€199',
          unit: 'per persoon',
          duration: 'Halfdag (4 uur)',
          maxParticipants: 'Max 15 personen',
          description: 'Perfect voor teams die net beginnen met AI. Creëer bewustwording en enthousiasme.',
          features: [
            'AI basics en mogelijkheden',
            'Praktische voorbeelden uit jouw sector',
            'Angst wegnemen & vertrouwen opbouwen',
            'Interactieve sessies en oefeningen',
            'Digitaal materiaal en handouts',
            'Q&A met AI-expert'
          ],
          cta: 'Boek Workshop',
          ideal: 'Ideaal voor: Eerste kennismaking, bewustwording creëren'
        },
        implementation: {
          title: 'AI Implementation Training',
          price: '€349',
          unit: 'per persoon',
          duration: 'Hele dag (8 uur)',
          maxParticipants: 'Max 12 personen',
          description: 'Hands-on training om direct met AI aan de slag te gaan in jullie workflows.',
          features: [
            'Praktische AI-tools implementatie',
            'Workflow integratie voor jouw organisatie',
            'Live oefensessies met echte cases',
            '30 dagen e-mail support',
            'Persoonlijke actieplannen per deelnemer',
            'Follow-up sessie na 2 weken',
            'Toegang tot AI-tools library'
          ],
          cta: 'Start Training',
          popular: true,
          ideal: 'Ideaal voor: Direct implementeren, hands-on leren'
        },
        assessment: {
          title: 'AI Strategy Assessment',
          price: 'Vanaf €2.990',
          unit: 'per organisatie',
          duration: '2-3 weken traject',
          maxParticipants: 'Volledige organisatie',
          description: 'Strategische analyse en roadmap voor succesvolle AI-transformatie.',
          features: [
            'Grondige organisatie-analyse (interviews + workshops)',
            'AI-readiness assessment alle afdelingen',
            'Strategische roadmap (12 maanden)',
            'ROI projecties & business case',
            'Implementatie prioriteiten en timeline',
            'Presentatie aan management/bestuur',
            'Change management strategie'
          ],
          cta: 'Plan Assessment',
          ideal: 'Ideaal voor: Strategische transformatie, complete organisaties'
        },
        guidance: {
          title: 'Implementatie Begeleiding',
          price: '€1.750',
          unit: 'per dag',
          description: 'Persoonlijke begeleiding tijdens de implementatie van jullie AI-strategie.',
          features: [
            'On-site of remote begeleiding',
            'Praktische implementatie ondersteuning',
            'Team coaching en mentoring',
            'Troubleshooting en optimalisatie'
          ],
          cta: 'Vraag Begeleiding aan',
          ideal: 'Ideaal voor: Ongoing support, complexe implementaties'
        },
        guarantee: 'Niet tevreden? Geld terug garantie binnen 30 dagen',
        consultation: 'Gratis 30-minuten consultatiegesprek'
      },
      faq: {
        title: 'Veelgestelde Vragen',
        q1: 'Wat is inbegrepen bij de training?',
        a1: 'Alle trainingen bevatten materialen, praktische oefeningen, en na-begeleiding. Bij Implementation Training krijg je ook 30 dagen e-mail support.',
        q2: 'Kunnen jullie on-site komen?',
        a2: 'Ja, alle trainingen kunnen zowel on-site als online gegeven worden. On-site training heeft een toeslag van €250 voor reiskosten.',
        q3: 'Wat als we meer dan 15 personen zijn?',
        a3: 'Voor grotere groepen splitsen we op in meerdere sessies of bieden we een aangepast programma aan. Neem contact op voor een offerte op maat.',
        q4: 'Is er een korting voor meerdere trainingen?',
        a4: 'Ja! Bij afname van meerdere pakketten bieden we 15% korting. Bij het Assessment + Implementation pakket krijg je automatisch korting.'
      },
      footer: {
        contact: 'Contact',
        email: 'info@aira.nl',
        phone: '+31 6 12345678',
        backToHome: 'Terug naar Home'
      }
    },
    en: {
      nav: {
        home: 'Back to Home',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      hero: {
        title: 'Transparent Pricing for AI Success',
        subtitle: 'Choose the package that perfectly fits your organization. From awareness to complete AI transformation.',
        cta: 'Schedule Free Consultation'
      },
      pricing: {
        title: 'Our Packages',
        subtitle: 'From first introduction to complete AI transformation',
        workshop: {
          title: 'AI Awareness Workshop',
          price: '€199',
          unit: 'per person',
          duration: 'Half day (4 hours)',
          maxParticipants: 'Max 15 people',
          description: 'Perfect for teams just starting with AI. Create awareness and enthusiasm.',
          features: [
            'AI basics and possibilities',
            'Practical examples from your sector',
            'Remove fear & build confidence',
            'Interactive sessions and exercises',
            'Digital materials and handouts',
            'Q&A with AI expert'
          ],
          cta: 'Book Workshop',
          ideal: 'Ideal for: First introduction, creating awareness'
        },
        implementation: {
          title: 'AI Implementation Training',
          price: '€349',
          unit: 'per person',
          duration: 'Full day (8 hours)',
          maxParticipants: 'Max 12 people',
          description: 'Hands-on training to immediately start using AI in your workflows.',
          features: [
            'Practical AI tools implementation',
            'Workflow integration for your organization',
            'Live practice sessions with real cases',
            '30 days email support',
            'Personal action plans per participant',
            'Follow-up session after 2 weeks',
            'Access to AI tools library'
          ],
          cta: 'Start Training',
          popular: true,
          ideal: 'Ideal for: Direct implementation, hands-on learning'
        },
        assessment: {
          title: 'AI Strategy Assessment',
          price: 'From €2,990',
          unit: 'per organization',
          duration: '2-3 weeks process',
          maxParticipants: 'Full organization',
          description: 'Strategic analysis and roadmap for successful AI transformation.',
          features: [
            'Thorough organization analysis (interviews + workshops)',
            'AI readiness assessment all departments',
            'Strategic roadmap (12 months)',
            'ROI projections & business case',
            'Implementation priorities and timeline',
            'Management/board presentation',
            'Change management strategy'
          ],
          cta: 'Plan Assessment',
          ideal: 'Ideal for: Strategic transformation, complete organizations'
        },
        guidance: {
          title: 'Implementation Guidance',
          price: '€1,750',
          unit: 'per day',
          description: 'Personal guidance during the implementation of your AI strategy.',
          features: [
            'On-site or remote guidance',
            'Practical implementation support',
            'Team coaching and mentoring',
            'Troubleshooting and optimization'
          ],
          cta: 'Request Guidance',
          ideal: 'Ideal for: Ongoing support, complex implementations'
        },
        guarantee: 'Not satisfied? Money back guarantee within 30 days',
        consultation: 'Free 30-minute consultation call'
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'What is included in the training?',
        a1: 'All trainings include materials, practical exercises, and follow-up support. Implementation Training also includes 30 days email support.',
        q2: 'Can you come on-site?',
        a2: 'Yes, all trainings can be delivered both on-site and online. On-site training has a €250 surcharge for travel costs.',
        q3: 'What if we have more than 15 people?',
        a3: 'For larger groups we split into multiple sessions or offer a customized program. Contact us for a tailored quote.',
        q4: 'Is there a discount for multiple trainings?',
        a4: 'Yes! When purchasing multiple packages we offer 15% discount. With the Assessment + Implementation package you automatically get a discount.'
      },
      footer: {
        contact: 'Contact',
        email: 'info@aira.nl',
        phone: '+31 6 12345678',
        backToHome: 'Back to Home'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20"></div>
        
        {/* Neural Network Background */}
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
          </defs>
          
          <g>
            <circle cx="200" cy="150" r="3" fill="url(#neural-gradient)">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="300" r="3" fill="url(#neural-gradient)">
              <animate attributeName="r" values="3;1;3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <line x1="200" y1="150" x2="800" y2="300" stroke="url(#neural-gradient)" strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>

        {/* Enhanced Floating particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
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

        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`glow-${i}`}
              className="absolute w-2 h-2 bg-purple-400/20 rounded-full blur-sm animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Cursor Glow Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-30 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.3) 40%, rgba(236, 72, 153, 0.2) 70%, transparent 100%)'
        }}
      />
      
      <div 
        className="fixed pointer-events-none z-40 w-64 h-64 rounded-full opacity-20 mix-blend-lighten transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 80%)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AIRA
              </span>
              <span className="ml-3 text-slate-400 hidden md:block">| {t.nav.pricing}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4 mr-2" />
                {t.nav.home}
              </a>
              
              <div className="flex items-center space-x-2">
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
              <a href="/" className="block w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300">
                {t.nav.home}
              </a>
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="flex items-center space-x-2 px-4 py-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'nl' ? 'English' : 'Nederlands'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mb-8">
            <Award className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300 font-medium">
              {language === 'nl' ? 'Transparante prijzen, meetbare resultaten' : 'Transparent pricing, measurable results'}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <button 
            onClick={() => setShowContactForm(true)}
            className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
          >
            <div className="relative flex items-center justify-center">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.pricing.title}
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          {/* Main Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Workshop Card */}
            <div className="group relative transform hover:scale-105 transition-all duration-500">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10 animate-pulse"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-all duration-300">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {t.pricing.workshop.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{t.pricing.workshop.price}</span>
                      <span className="text-slate-400 ml-2">{t.pricing.workshop.unit}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-sm">{t.pricing.workshop.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-sm">{t.pricing.workshop.maxParticipants}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-600/10 p-3 rounded-lg mb-6">
                    <p className="text-blue-300 text-sm font-medium">{t.pricing.workshop.ideal}</p>
                  </div>
                  
                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
                    {t.pricing.workshop.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {t.pricing.workshop.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group-hover:scale-105"
                  >
                    {t.pricing.workshop.cta}
                  </button>
                </div>
              </div>
            </div>

            {/* Implementation Card - Popular */}
            <div className="group relative transform hover:scale-110 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/60 border border-purple-500/50 transition-all duration-500 backdrop-blur-sm h-full overflow-hidden">
                
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold flex items-center shadow-lg shadow-purple-500/50 animate-pulse">
                    <Sparkles className="w-4 h-4 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
                    {language === 'nl' ? 'Populairste Keuze' : 'Most Popular'}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6 mt-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-all duration-300">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {t.pricing.implementation.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{t.pricing.implementation.price}</span>
                      <span className="text-slate-400 ml-2">{t.pricing.implementation.unit}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                      <span className="text-sm">{t.pricing.implementation.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                      <span className="text-sm">{t.pricing.implementation.maxParticipants}</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-600/10 p-3 rounded-lg mb-6">
                    <p className="text-purple-300 text-sm font-medium">{t.pricing.implementation.ideal}</p>
                  </div>
                  
                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
                    {t.pricing.implementation.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {t.pricing.implementation.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {t.pricing.implementation.cta}
                  </button>
                </div>
              </div>
            </div>

            {/* Assessment Card */}
            <div className="group relative transform hover:scale-105 transition-all duration-500">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10 animate-pulse"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 group-hover:scale-110 transition-all duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {t.pricing.assessment.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">{t.pricing.assessment.price}</span>
                      <span className="text-slate-400 ml-2 text-sm">{t.pricing.assessment.unit}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                      <span className="text-sm">{t.pricing.assessment.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                      <span className="text-sm">{t.pricing.assessment.maxParticipants}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-600/10 p-3 rounded-lg mb-6">
                    <p className="text-green-300 text-sm font-medium">{t.pricing.assessment.ideal}</p>
                  </div>
                  
                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
                    {t.pricing.assessment.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {t.pricing.assessment.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 group-hover:scale-105"
                  >
                    {t.pricing.assessment.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Service Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-800/20 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 mr-4 group-hover:scale-110 transition-all duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        {t.pricing.guidance.title}
                      </h3>
                      <div className="flex items-baseline mt-2">
                        <span className="text-3xl font-bold text-white">{t.pricing.guidance.price}</span>
                        <span className="text-slate-400 ml-2">{t.pricing.guidance.unit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-600/10 p-3 rounded-lg mb-4">
                    <p className="text-orange-300 text-sm font-medium">{t.pricing.guidance.ideal}</p>
                  </div>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-4">
                    {t.pricing.guidance.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {t.pricing.guidance.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center md:text-right">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-500 hover:to-red-500 transition-all duration-300 group-hover:scale-105"
                  >
                    {t.pricing.guidance.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee & Consultation */}
         <div className="text-center mb-16">
  <div className="max-w-2xl mx-auto">
    <div className="flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
      <Users className="w-6 h-6 text-blue-400 mr-3" />
      <span className="text-blue-300 font-medium">{t.pricing.consultation}</span>
    </div>
  </div>
</div>
              
              <div className="flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-blue-300 font-medium">{t.pricing.consultation}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-gradient-to-b from-slate-900/20 to-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.faq.title}
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 },
              { q: t.faq.q4, a: t.faq.a4 }
            ].map((faq, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900/40 to-slate-800/20 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.4),transparent_50%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.4),transparent_50%)] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            {language === 'nl' 
              ? 'Plan een gratis consult en ontdek welk pakket perfect bij jouw organisatie past.'
              : 'Schedule a free consultation and discover which package fits your organization perfectly.'
            }
          </p>
          
          <button 
            onClick={() => setShowContactForm(true)}
            className="group relative inline-flex items-center px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:scale-105"
          >
            <Sparkles className="mr-3 w-5 h-5 text-blue-600" />
            {t.hero.cta}
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center group mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AIRA
                </span>
              </div>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-3">
                  <span className="text-xs">@</span>
                  <span>{t.footer.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs">📞</span>
                  <span>{t.footer.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <a 
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                {t.footer.backToHome}
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 AIRA. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>

      {/* Microsoft Forms Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'nl' ? 'Gratis Consult Plannen' : 'Schedule Free Consultation'}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-2">
              <iframe 
                src="https://forms.cloud.microsoft/r/i49jV2AvRa?embed=true" 
                width="100%" 
                height="600"
                style={{ 
                  border: 'none', 
                  borderRadius: '12px',
                  backgroundColor: 'transparent'
                }}
                allowFullScreen 
                title="AIRA Pricing Consultation"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
