'use client'

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle, Cpu, Code, Database, Layers, 
  BarChart3, Shield, Zap, ArrowRight, ExternalLink, Brain 
} from 'lucide-react';

const GlowCaseStudy = () => {
  const [scrollY, setScrollY] = useState(0);

  // SEO & GEO Data specifiek voor deze Case Study
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Building The #1 AI Exam Training Platform in the Netherlands",
    "alternativeHeadline": "How AIRA Neural Core technology scaled adaptive learning",
    "image": "https://www.glowexamen.nl/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "AIRA AI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIRA AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aira-ai.nl/logo.png"
      }
    },
    "description": "A technical deep-dive into how AIRA architected GlowExamen using Vector Databases, RAG, and Adaptive Learning Algorithms.",
    "keywords": "AI Architecture, RAG, Vector Database, EdTech, Adaptive Learning, Next.js, OpenAI"
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans selection:bg-blue-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* --- NAVIGATION (Simplified for Case Study) --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-[#020408]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to AIRA</span>
            </a>
            <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500 font-mono hidden md:block">CASE STUDY: GLOWEXAMEN</span>
                <div className="h-4 w-px bg-white/10"></div>
                <div className="font-bold text-white">AIRA AI</div>
            </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide mb-8">
                Internal Venture • EdTech • SaaS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Scaling Personalized Education with <br/>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Adaptive AI Architecture
                </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                How AIRA built, launched, and scaled GlowExamen to become the #1 AI exam training platform in the Netherlands within 6 months.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-slate-500">
                <div className="px-4 py-2 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> RAG Architecture
                </div>
                <div className="px-4 py-2 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                    <Database className="w-4 h-4" /> Vector Search
                </div>
                <div className="px-4 py-2 bg-white/5 rounded border border-white/10 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Real-time Latency
                </div>
            </div>
        </div>
      </header>

      {/* --- KEY METRICS (THE "WHY" FOR CLIENTS) --- */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: 'Active Students', value: '500+', color: 'text-blue-400' },
                { label: 'Questions Answered', value: '50k+', color: 'text-purple-400' },
                { label: 'Cost Reduction', value: '87%', color: 'text-green-400', sub: 'vs Traditional Tutoring' },
                { label: 'Uptime', value: '99.99%', color: 'text-white' }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                    {stat.sub && <div className="text-xs text-slate-600 mt-1">{stat.sub}</div>}
                </div>
            ))}
        </div>
      </section>

      {/* --- THE CHALLENGE & SOLUTION --- */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">The Challenge</h3>
                    <h2 className="text-3xl font-bold mb-6">The "One-Size-Fits-None" Problem</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Traditional exam training in the Netherlands is rigid, expensive (€60/hour), and linear. 
                        Students waste time on topics they already know, while missing deep-dives on their weak points.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                        <strong>The Technical Hurdle:</strong> How do you build an AI that understands the *context* of the Dutch 
                        Exam Syllabus (Centraal Eindexamen) without hallucinating facts?
                    </p>
                </div>
                
                <div className="relative rounded-2xl bg-gradient-to-br from-red-900/10 to-orange-900/10 border border-red-500/20 p-8">
                    <div className="absolute top-4 right-4 text-red-500/50"><Shield className="w-6 h-6" /></div>
                    <h4 className="font-bold text-white mb-4">Core Pain Points</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li className="flex gap-3"><span className="text-red-500">×</span> High hallucination risk in LLMs</li>
                        <li className="flex gap-3"><span className="text-red-500">×</span> Lack of personalized learning paths</li>
                        <li className="flex gap-3"><span className="text-red-500">×</span> High latency in standard AI responses</li>
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
                <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">The Solution</h3>
                <h2 className="text-4xl font-bold mb-6">AIRA Neural Core™ Architecture</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    We moved beyond basic ChatGPT wrappers. We engineered a custom RAG (Retrieval-Augmented Generation) 
                    pipeline specifically for the Dutch Educational System.
                </p>
            </div>

            {/* Diagram Representation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Ingest */}
                <div className="p-8 rounded-2xl bg-[#020408] border border-white/10 relative group">
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-blue-900/50 border border-blue-500/50 text-blue-300 text-xs font-bold rounded-full">STEP 1: INGEST</div>
                    <Database className="w-10 h-10 text-slate-500 mb-6 group-hover:text-blue-400 transition-colors" />
                    <h4 className="text-xl font-bold mb-3">Vector Embedding</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We digitized 10 years of official exam data. Using specialized embedding models, we converted this syllabus into a high-dimensional vector space.
                    </p>
                </div>

                {/* Process */}
                <div className="p-8 rounded-2xl bg-[#020408] border border-purple-500/30 relative group shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                     <div className="absolute -top-3 left-8 px-3 py-1 bg-purple-900/50 border border-purple-500/50 text-purple-300 text-xs font-bold rounded-full">STEP 2: NEURAL CORE</div>
                    <Brain className="w-10 h-10 text-purple-500 mb-6 animate-pulse" />
                    <h4 className="text-xl font-bold mb-3 text-white">Semantic Reasoning</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        When a student asks a question, our engine doesn't just keyword match. It understands *intent* and retrieves the exact pedagogical context needed to explain it simply.
                    </p>
                </div>

                {/* Deliver */}
                <div className="p-8 rounded-2xl bg-[#020408] border border-white/10 relative group">
                     <div className="absolute -top-3 left-8 px-3 py-1 bg-green-900/50 border border-green-500/50 text-green-300 text-xs font-bold rounded-full">STEP 3: DELIVER</div>
                    <Layers className="w-10 h-10 text-slate-500 mb-6 group-hover:text-green-400 transition-colors" />
                    <h4 className="text-xl font-bold mb-3">Adaptive UI</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        The frontend (Next.js) adapts in real-time. If the AI detects stress (via sentiment analysis), it switches the UI to "Zen Mode" to reduce cognitive load.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-slate-500 font-mono text-sm mb-8 uppercase tracking-widest">Enterprise Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* Placeholder Icons or Text for Tech Stack */}
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Code className="text-blue-500" /> Next.js</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Cpu className="text-green-500" /> Python</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Database className="text-purple-500" /> Pinecone</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Zap className="text-yellow-500" /> Vercel</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Shield className="text-indigo-500" /> Auth0</div>
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,4,8,0.8),#020408)]"></div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">We can build this for you.</h2>
            <p className="text-xl text-slate-400 mb-10">
                GlowExamen is just one example of what the AIRA Neural Core™ can do. 
                Ready to build your own proprietary AI tool?
            </p>
            <div className="flex justify-center gap-4">
                 <a href="https://forms.cloud.microsoft/r/i49jV2AvRa?embed=true" target="_blank" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
                    Start Your Project
                 </a>
                 <a href="https://www.glowexamen.nl" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 flex items-center gap-2">
                    Visit GlowExamen <ExternalLink className="w-4 h-4" />
                 </a>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-[#020408] text-center text-slate-600 text-sm">
        <p>© 2025 AIRA AI. Case Study: GlowExamen.</p>
      </footer>
    </div>
  );
};

export default GlowCaseStudy;
