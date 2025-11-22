'use client'

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle, Cpu, Database, Layers, 
  BarChart3, Shield, Zap, ArrowRight, Globe, Brain, Users, ExternalLink 
} from 'lucide-react';

// --- TYPES & TRANSLATIONS ---
type Language = 'nl' | 'en';

const GlowCaseStudy = () => {
  const [language, setLanguage] = useState<Language>('nl');
  const [scrollY, setScrollY] = useState(0);

  // SEO Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Bouwen aan de #1 AI Examentraining van Nederland",
    "author": { "@type": "Organization", "name": "AIRA AI" },
    "publisher": { "@type": "Organization", "name": "AIRA AI" },
    "description": "Hoe AIRA technologie de examens van Nederlandse scholieren transformeert."
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    nl: {
      nav: { back: 'Terug naar AIRA', title: 'CASE STUDY: GLOWEXAMEN' },
      hero: {
        badge: 'AIRA Venture • EdTech • Scale-up',
        title: 'Het Einde van Examenstress:',
        titleHighlight: 'Adaptieve AI-Architectuur',
        subtitle: 'Hoe AIRA het #1 examentraining platform van Nederland bouwde. Een technisch antwoord op een menselijk probleem.',
        tags: ['RAG Architectuur', 'Vector Search', 'Stress Analyse']
      },
      stats: {
        students: 'Actieve Leerlingen',
        questions: 'Vragen Verwerkt',
        cost: 'Goedkoper dan Bijles',
        uptime: 'Systeem Uptime'
      },
      problem: {
        label: 'De Uitdaging',
        title: 'Het "One-Size-Fits-None" Probleem',
        desc: 'Het traditionele onderwijssysteem staat onder druk. Bijles is onbetaalbaar (€60/uur) en docenten hebben geen tijd voor individuele begeleiding. Ouders zien hun kinderen verdrinken in stress.',
        painPoints: [
          'Generieke AI (ChatGPT) verzint feiten (hallucinaties).',
          'Bijles is te duur voor de gemiddelde Nederlander.',
          'Geen inzicht voor ouders in de échte voortgang.'
        ]
      },
      solution: {
        label: 'De AIRA Oplossing',
        title: 'De AIRA Neural Core™',
        desc: 'Wij hebben geen simpele chatbot gebouwd. Wij hebben een "Retrieval-Augmented Generation" (RAG) systeem ontwikkeld dat specifiek getraind is op de Nederlandse Eindexamen Syllabus.',
        steps: {
          step1: { title: 'Stap 1: Kennis Injectie', desc: 'Wij digitaliseerden 10 jaar aan officiële examens en schoolboeken in een Vector Database. De AI "weet" dus echt wat de stof is.' },
          step2: { title: 'Stap 2: Contextueel Begrip', desc: 'Als een leerling vastloopt, snapt de AI *waarom*. Is het een rekenfout? Of ontbreekt het inzicht? De uitleg past zich aan.' },
          step3: { title: 'Stap 3: Zen Modus', desc: 'Real-time sentiment analyse detecteert frustratie. De interface schakelt over naar een rustgevende modus om paniek te voorkomen.' }
        }
      },
      parents: {
        title: 'Waarom ouders kiezen voor GlowExamen',
        subtitle: 'Technologie die rust brengt aan de keukentafel.',
        cards: [
          { title: 'Geen Hallucinaties', desc: 'In tegenstelling tot ChatGPT, antwoordt GlowExamen alleen met geverifieerde examenstof. Veilig en betrouwbaar.' },
          { title: 'Transparantie', desc: 'Het ouder-dashboard geeft real-time inzicht. U hoeft niet meer te vragen "heb je al geleerd?". U ziet het.' },
          { title: 'Betaalbaar', desc: 'Voor de prijs van een half uur bijles, krijgt uw kind een maand lang 24/7 onbeperkte begeleiding.' }
        ]
      },
      cta: {
        title: 'Wij bouwen dit soort intelligentie.',
        desc: 'GlowExamen is slechts één voorbeeld van wat de AIRA Neural Core™ kan doen. Wilt u uw eigen markt opschudden?',
        btn1: 'Start uw Project',
        btn2: 'Bezoek GlowExamen'
      }
    },
    en: {
      nav: { back: 'Back to AIRA', title: 'CASE STUDY: GLOWEXAMEN' },
      hero: {
        badge: 'AIRA Venture • EdTech • Scale-up',
        title: 'Ending Exam Stress with',
        titleHighlight: 'Adaptive AI Architecture',
        subtitle: 'How AIRA built the #1 exam training platform in the Netherlands. A technical answer to a human problem.',
        tags: ['RAG Architecture', 'Vector Search', 'Stress Analytics']
      },
      stats: {
        students: 'Active Students',
        questions: 'Questions Processed',
        cost: 'Cheaper than Tutoring',
        uptime: 'System Uptime'
      },
      problem: {
        label: 'The Challenge',
        title: 'The "One-Size-Fits-None" Problem',
        desc: 'The traditional education system is under pressure. Tutoring is unaffordable (€60/hr) and teachers lack time for individual guidance. Parents watch their children drown in stress.',
        painPoints: [
          'Generic AI (ChatGPT) hallucinates facts.',
          'Tutoring is too expensive for most families.',
          'No insight for parents into actual progress.'
        ]
      },
      solution: {
        label: 'The AIRA Solution',
        title: 'The AIRA Neural Core™',
        desc: 'We didn\'t just build a chatbot. We engineered a "Retrieval-Augmented Generation" (RAG) pipeline specifically trained on the Dutch National Exam Syllabus.',
        steps: {
          step1: { title: 'Step 1: Knowledge Ingestion', desc: 'We digitized 10 years of official exams into a Vector Database. The AI truly "knows" the curriculum.' },
          step2: { title: 'Step 2: Contextual Reasoning', desc: 'If a student gets stuck, the AI understands *why*. Is it a calculation error? Or a lack of insight? It adapts.' },
          step3: { title: 'Step 3: Zen Mode', desc: 'Real-time sentiment analysis detects frustration. The interface switches to a calming mode to prevent panic.' }
        }
      },
      parents: {
        title: 'Why Parents Choose GlowExamen',
        subtitle: 'Technology that brings peace to the kitchen table.',
        cards: [
          { title: 'No Hallucinations', desc: 'Unlike ChatGPT, GlowExamen only answers with verified curriculum data. Safe and reliable.' },
          { title: 'Transparency', desc: 'The parent dashboard gives real-time insight. No more asking "did you study?". You can see it.' },
          { title: 'Affordable', desc: 'For the price of 30 mins tutoring, your child gets a full month of 24/7 unlimited guidance.' }
        ]
      },
      cta: {
        title: 'We build this kind of intelligence.',
        desc: 'GlowExamen is just one example of what the AIRA Neural Core™ can do. Ready to disrupt your market?',
        btn1: 'Start Your Project',
        btn2: 'Visit GlowExamen'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans selection:bg-blue-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-[#020408]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">{t.nav.back}</span>
            </a>
            
            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-3">
                    <span className="text-sm text-slate-500 font-mono">{t.nav.title}</span>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="font-bold text-white">AIRA AI</div>
                </div>
                
                {/* LANGUAGE SWITCHER */}
                <button 
                    onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold uppercase"
                >
                    <Globe className="w-3 h-3" />
                    {language}
                </button>
            </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide mb-8">
                {t.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {t.hero.title} <br/>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {t.hero.titleHighlight}
                </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-slate-500">
                {t.hero.tags.map((tag, i) => (
                    <div key={i} className="px-4 py-2 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" /> {tag}
                    </div>
                ))}
            </div>
        </div>
      </header>

      {/* --- KEY METRICS --- */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: t.stats.students, value: '500+', color: 'text-blue-400' },
                { label: t.stats.questions, value: '50k+', color: 'text-purple-400' },
                { label: t.stats.cost, value: '87%', color: 'text-green-400', sub: 'ROI' },
                { label: t.stats.uptime, value: '99.99%', color: 'text-white' }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                    {stat.sub && <div className="text-xs text-slate-600 mt-1">{stat.sub}</div>}
                </div>
            ))}
        </div>
      </section>

      {/* --- THE CHALLENGE --- */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">{t.problem.label}</h3>
                    <h2 className="text-3xl font-bold mb-6">{t.problem.title}</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        {t.problem.desc}
                    </p>
                </div>
                
                <div className="relative rounded-2xl bg-gradient-to-br from-red-900/10 to-orange-900/10 border border-red-500/20 p-8">
                    <div className="absolute top-4 right-4 text-red-500/50"><Shield className="w-6 h-6" /></div>
                    <h4 className="font-bold text-white mb-4">Risico Analyse</h4>
                    <ul className="space-y-3 text-slate-400">
                        {t.problem.painPoints.map((point, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="text-red-500 shrink-0">×</span> {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- THE ARCHITECTURE (AIRA NEURAL CORE) --- */}
      <section className="py-24 bg-[#05070E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">{t.solution.label}</h3>
                <h2 className="text-4xl font-bold mb-6">{t.solution.title}</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    {t.solution.desc}
                </p>
            </div>

            {/* Diagram Representation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Ingest */}
                <div className="p-8 rounded-2xl bg-[#020408] border border-white/10 relative group">
                    <Database className="w-10 h-10 text-slate-500 mb-6 group-hover:text-blue-400 transition-colors" />
                    <h4 className="text-xl font-bold mb-3">{t.solution.steps.step1.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        {t.solution.steps.step1.desc}
                    </p>
                </div>

                {/* Process */}
                <div className="p-8 rounded-2xl bg-[#020408] border border-purple-500/30 relative group shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                    <Brain className="w-10 h-10 text-purple-500 mb-6 animate-pulse" />
                    <h4 className="text-xl font-bold mb-3 text-white">{t.solution.steps.step2.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        {t.solution.steps.step2.desc}
                    </p>
                </div>

                {/* Deliver */}
                <div className="p-8 rounded-2xl bg-[#020408] border border-white/10 relative group">
                    <Layers className="w-10 h-10 text-slate-500 mb-6 group-hover:text-green-400 transition-colors" />
                    <h4 className="text-xl font-bold mb-3">{t.solution.steps.step3.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        {t.solution.steps.step3.desc}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- PARENT VALUE PROPOSITION (NEW) --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{t.parents.title}</h2>
                <p className="text-slate-400">{t.parents.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.parents.cards.map((card, i) => (
                    <div key={i} className="flex flex-col items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                        <div className="p-3 rounded-full bg-blue-500/20 mb-4">
                            <CheckCircle className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,4,8,0.8),#020408)]"></div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-slate-400 mb-10">
                {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <a href="/" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
                    {t.cta.btn1}
                 </a>
                 <a href="https://www.glowexamen.nl" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 flex items-center justify-center gap-2">
                    {t.cta.btn2} <ExternalLink className="w-4 h-4" />
                 </a>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-[#020408] text-center text-slate-600 text-sm">
        <p>© 2025 AIRA AI. Venture: GlowExamen.</p>
      </footer>
    </div>
  );
};

export default GlowCaseStudy;
