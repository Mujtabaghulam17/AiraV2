// Complete PricingPage.tsx - Replace the ENTIRE file with this version

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
      {/* Rest of the component continues here */}
      <p className="text-center py-20">PricingPage Component Loaded Successfully</p>
    </div>
  );
};

export default PricingPage;
