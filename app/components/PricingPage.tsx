'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Home, Check, Zap, Users, Target, Rocket, Shield, TrendingUp, Clock, Calendar, ChevronRight, Star, Award, Sparkles } from 'lucide-react';

type Language = 'nl' | 'en';

const PricingPage = () => {
  const [language, setLanguage] = useState<Language>('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    nl: {
      nav: {
        home: 'Terug naar Home',
        pricing: 'Prijzen'
      },
      hero: {
        title: 'Investeer in AI-Success',
        subtitle: 'Marktconforme prijzen voor hoogwaardige AI-training en implementatie. Alle pakketten inclusief certificaat en 30 dagen support.',
        badge: 'Transparante prijzen - Geen verborgen kosten'
      },
      packages: {
        title: 'Kies Jouw Pakket',
        subtitle: 'Van bewustwording tot volledige transformatie',
        starter: {
          name: 'AI Awareness',
          tagline: 'De perfecte start',
          price: '€249',
          unit: 'per persoon',
          duration: 'Halfdag (4 uur)',
          participants: 'Max 15 deelnemers',
          description: 'Creëer AI-bewustzijn en enthousiasme in jouw team',
          features: [
            'AI fundamentals en mogelijkheden',
            'Sector-specifieke voorbeelden',
            'Interactieve hands-on sessies',
            'Angst wegnemen en vertrouwen opbouwen',
            'Digitaal cursusmateriaal',
            'Q&A met AI-expert',
            'Deelname certificaat'
          ],
          cta: 'Boek Workshop',
          ideal: 'Ideaal voor teams die starten met AI'
        },
        professional: {
          name: 'AI Implementation',
          tagline: 'Meest gekozen',
          price: '€495',
          unit: 'per persoon',
          duration: 'Hele dag (8 uur)',
          participants: 'Max 12 deelnemers',
          description: 'Direct aan de slag met AI in jullie workflows',
          features: [
            'Praktische AI-tools implementatie',
            'Workflow integratie voor jouw organisatie',
            'Live oefensessies met echte cases',
            'Persoonlijke actieplannen',
            '30 dagen e-mail support',
            'Follow-up sessie na 2 weken',
            'Toegang tot AI-tools library',
            'Implementation certificaat'
          ],
          cta: 'Start Training',
          ideal: 'Voor teams die direct resultaat willen',
          savings: 'Groepskorting: 10+ personen = 15% korting'
        },
        enterprise: {
          name: 'AI Strategy en Roadmap',
          tagline: 'Voor organisaties',
          price: 'Vanaf €5.500',
          unit: 'per organisatie',
          duration: '3-4 weken traject',
          participants: 'Gehele organisatie',
          description: 'Complete strategie en implementatie-roadmap',
          features: [
            'Grondige organisatie-analyse',
            'AI-readiness assessment alle afdelingen',
            'Strategische 12-maanden roadmap',
            'ROI projecties en business case',
            'Implementatie prioritering en tijdlijn',
            'Management presentatie',
            'Change management strategie',
            'Quarterly review sessies (3 maanden)'
          ],
          cta: 'Plan Assessment',
          ideal: 'Voor strategische AI-transformatie',
          includes: 'Inclusief 2 gratis Implementation trainingen'
        }
      },
      addons: {
        title: 'Extra Services',
        subtitle: 'Aanvullende begeleiding op maat',
        consulting: {
          name: 'AI Consulting',
          price: '€195',
          unit: 'per uur',
          description: 'Strategisch advies en technische expertise',
          features: [
            'Remote of on-site',
            'Toolselectie en evaluatie',
            'Implementatie planning',
            'ROI optimalisatie'
          ]
        },
        implementation: {
          name: 'Implementatie Begeleiding',
          price: '€1.850',
          unit: 'per dag',
          description: 'Hands-on begeleiding bij jullie implementatie',
          features: [
            'On-site of remote',
            'Team coaching',
            'Troubleshooting',
            'Process optimalisatie'
          ]
        }
      },
      pricing: {
        title: 'Waarom Onze Prijzen?',
        subtitle: 'Transparant, eerlijk en marktconform',
        quality: {
          title: 'Premium Kwaliteit',
          description: 'Ervaren trainers met jarenlange praktijkervaring'
        },
        roi: {
          title: 'Meetbare ROI',
          description: 'Gemiddeld 4 maanden tot positieve ROI'
        },
        support: {
          title: 'Inclusief Support',
          description: '30 dagen e-mail support bij alle trainingen'
        },
        certificate: {
          title: 'Erkend Certificaat',
          description: 'Officieel AIRA certificaat'
        }
      },
      faq: {
        title: 'Veelgestelde Vragen',
        items: [
          {
            q: 'Zijn de prijzen inclusief BTW?',
            a: 'Alle prijzen zijn exclusief 21% BTW.'
          },
          {
            q: 'Kunnen jullie on-site komen?',
            a: 'Ja! We berekenen €150 reiskosten buiten de Randstad.'
          },
          {
            q: 'Wat als we meer deelnemers hebben?',
            a: 'Bij 10+ deelnemers krijgt u 15% groepskorting.'
          }
        ]
      },
      cta: {
        title: 'Klaar om te starten?',
        subtitle: 'Plan een gratis consult',
        button: 'Plan Gratis Consult'
      }
    },
    en: {
      nav: {
        home: 'Back to Home',
        pricing: 'Pricing'
      },
      hero: {
        title: 'Invest in AI Success',
        subtitle: 'Market-competitive pricing for AI training.',
        badge: 'Transparent pricing'
      },
      packages: {
        title: 'Choose Your Package',
        subtitle: 'From awareness to transformation',
        starter: {
          name: 'AI Awareness',
          tagline: 'Perfect start',
          price: '€249',
          unit: 'per person',
          duration: 'Half day (4 hours)',
          participants: 'Max 15 participants',
          description: 'Create AI awareness',
          features: [
            'AI fundamentals',
            'Sector examples',
            'Interactive sessions',
            'Build confidence',
            'Course materials',
            'Q&A with expert',
            'Certificate'
          ],
          cta: 'Book Workshop',
          ideal: 'Ideal for teams starting with AI'
        },
        professional: {
          name: 'AI Implementation',
          tagline: 'Most popular',
          price: '€495',
          unit: 'per person',
          duration: 'Full day (8 hours)',
          participants: 'Max 12 participants',
          description: 'Get started with AI immediately',
          features: [
            'Practical implementation',
            'Workflow integration',
            'Live practice sessions',
            'Personal action plans',
            '30 days support',
            'Follow-up session',
            'Tools library access',
            'Certificate'
          ],
          cta: 'Start Training',
          ideal: 'For immediate results',
          savings: 'Group discount: 10+ people = 15% off'
        },
        enterprise: {
          name: 'AI Strategy',
          tagline: 'For organizations',
          price: 'From €5,500',
          unit: 'per organization',
          duration: '3-4 weeks',
          participants: 'Entire organization',
          description: 'Complete strategy and roadmap',
          features: [
            'Organization analysis',
            'Readiness assessment',
            '12-month roadmap',
            'ROI projections',
            'Implementation timeline',
            'Management presentation',
            'Change management',
            'Quarterly reviews'
          ],
          cta: 'Plan Assessment',
          ideal: 'For strategic transformation',
          includes: 'Includes 2 free trainings'
        }
      },
      addons: {
        title: 'Additional Services',
        subtitle: 'Custom guidance',
        consulting: {
          name: 'AI Consulting',
          price: '€195',
          unit: 'per hour',
          description: 'Strategic advice',
          features: [
            'Remote or on-site',
            'Tool selection',
            'Implementation planning',
            'ROI optimization'
          ]
        },
        implementation: {
          name: 'Implementation Guidance',
          price: '€1,850',
          unit: 'per day',
          description: 'Hands-on guidance',
          features: [
            'On-site or remote',
            'Team coaching',
            'Troubleshooting',
            'Process optimization'
          ]
        }
      },
      pricing: {
        title: 'Why Our Pricing?',
        subtitle: 'Transparent and fair',
        quality: {
          title: 'Premium Quality',
          description: 'Experienced trainers'
        },
        roi: {
          title: 'Measurable ROI',
          description: 'Average 4 months to ROI'
        },
        support: {
          title: 'Support Included',
          description: '30 days support'
        },
        certificate: {
          title: 'Certificate',
          description: 'Official AIRA certificate'
        }
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            q: 'Prices including VAT?',
            a: 'All prices excluding 21% VAT.'
          },
          {
            q: 'Can you come on-site?',
            a: 'Yes! €150 travel costs apply.'
          },
          {
            q: 'More participants?',
            a: '10+ participants get 15% discount.'
          }
        ]
      },
      cta: {
        title: 'Ready to start?',
        subtitle: 'Schedule free consultation',
        button: 'Schedule Consultation'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
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
              
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 px-3 py-1 rounded border border-slate-700"
              >
                {language === 'nl' ? 'EN' : 'NL'}
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-lg text-slate-300 bg-slate-800/50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 mb-6">
            <Shield className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm text-green-300 font-medium">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t.packages.title}
            </h2>
            <p className="text-lg text-slate-400">{t.packages.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="text-sm font-semibold text-blue-400 mb-2">{t.packages.starter.tagline}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.packages.starter.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{t.packages.starter.description}</p>
              
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-white">{t.packages.starter.price}</span>
                <span className="text-slate-400 ml-2">{t.packages.starter.unit}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {t.packages.starter.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {t.packages.starter.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowContactForm(true)}
                className="w-full px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all"
              >
                {t.packages.starter.cta}
              </button>
            </div>

            {/* Professional */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 blur"></div>
              <div className="relative p-8 rounded-2xl bg-slate-900 border-2 border-blue-500/50">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                  {t.packages.professional.tagline}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 mt-2">{t.packages.professional.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{t.packages.professional.description}</p>
                
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {t.packages.professional.price}
                  </span>
                  <span className="text-slate-400 ml-2">{t.packages.professional.unit}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {t.packages.professional.duration}
                  </div>
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-green-600/20 text-green-400 text-xs font-semibold mb-6">
                  {t.packages.professional.savings}
                </div>

                <ul className="space-y-3 mb-6">
                  {t.packages.professional.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all"
                >
                  {t.packages.professional.cta}
                </button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="text-sm font-semibold text-purple-400 mb-2">{t.packages.enterprise.tagline}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.packages.enterprise.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{t.packages.enterprise.description}</p>
              
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-white">{t.packages.enterprise.price}</span>
                <span className="text-slate-400 ml-2">{t.packages.enterprise.unit}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {t.packages.enterprise.duration}
                </div>
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-xs font-semibold mb-6">
                {t.packages.enterprise.includes}
              </div>

              <ul className="space-y-3 mb-6">
                {t.packages.enterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowContactForm(true)}
                className="w-full px-6 py-3 rounded-xl bg-slate-700 hover:bg-purple-600 text-white font-semibold transition-all"
              >
                {t.packages.enterprise.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">{t.addons.title}</h2>
            <p className="text-slate-400">{t.addons.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-600/20">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.addons.consulting.name}</h3>
                  <p className="text-sm text-slate-400">{t.addons.consulting.price} {t.addons.consulting.unit}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">{t.addons.consulting.description}</p>
              <ul className="space-y-2">
                {t.addons.consulting.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <ChevronRight className="w-4 h-4" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-600/20">
                  <Rocket className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.addons.implementation.name}</h3>
                  <p className="text-sm text-slate-400">{t.addons.implementation.price} {t.addons.implementation.unit}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">{t.addons.implementation.description}</p>
              <ul className="space-y-2">
                {t.addons.implementation.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <ChevronRight className="w-4 h-4" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/30">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.cta.title}</h2>
          <p className="text-xl text-slate-400 mb-8">{t.cta.subtitle}</p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold"
          >
            {t.cta.button}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2025 AIRA. Alle rechten voorbehouden.</p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white">Plan een Gratis Consult</h3>
              <button onClick={() => setShowContactForm(false)} className="p-2 hover:bg-slate-800 rounded-lg">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            <div className="p-2">
              <iframe 
                src="https://forms.cloud.microsoft/r/i49jV2AvRa?embed=true"
                width="100%" 
                height="600"
                style={{ border: 'none', borderRadius: '12px' }}
                title="AIRA Contact Form"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
