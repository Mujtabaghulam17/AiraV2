'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Home } from 'lucide-react';

type Language = 'nl' | 'en';

const PricingPage = () => {
  const [language, setLanguage] = useState<Language>('nl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
        title: 'Transparante Prijzen voor AI-Success',
        subtitle: 'Kies het pakket dat perfect past bij jouw organisatie.'
      }
    },
    en: {
      nav: {
        home: 'Back to Home',
        pricing: 'Pricing'
      },
      hero: {
        title: 'Transparent Pricing for AI Success',
        subtitle: 'Choose the package that perfectly fits your organization.'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
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
              <a href="/" className="block w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg">
                {t.nav.home}
              </a>
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="flex items-center space-x-2 px-4 py-3 text-slate-300 hover:text-blue-400"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'nl' ? 'English' : 'Nederlands'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Content Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">Pricing packages coming soon...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">© 2025 AIRA. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
