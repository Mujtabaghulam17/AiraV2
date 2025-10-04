'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, Award, ArrowRight, Menu, X, Globe, CheckCircle, Brain, Lightbulb, TrendingUp, Sparkles, Zap, Shield, Rocket, Home } from 'lucide-react';

type Language = 'nl' | 'en';

const PricingPage = () => {
  const [language, setLanguage] = useState<Language>('nl');
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
  } as const;

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
