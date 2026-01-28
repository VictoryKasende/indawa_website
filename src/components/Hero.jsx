import React from 'react'
import { LogoIcon } from './Logo'

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Wave background pattern */}
      <div className="absolute inset-0 wave-bg opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indawa-violet/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indawa-cyan/5 rounded-full blur-3xl"></div>
      
      {/* Watermark DW */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <span className="text-[400px] font-bold text-indawa-dark">DW</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indawa-violet/10 px-4 py-2 rounded-full mb-6">
              <LogoIcon className="w-6 h-6" />
              <span className="text-indawa-violet font-medium text-sm">Votre lieu de formation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-indawa-dark leading-tight mb-4">
              Rester informé des{' '}
              <span className="gradient-text">technologies</span>
            </h1>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <span className="bg-indawa-cyan/10 text-indawa-violet px-4 py-1 rounded-full text-sm font-medium">
                Apprendre à apprendre
              </span>
              <span className="bg-indawa-violet/10 text-indawa-violet px-4 py-1 rounded-full text-sm font-medium">
                Apprendre à entreprendre
              </span>
            </div>
            
            <p className="text-lg sm:text-xl text-indawa-violet/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              INDAWA est un espace dédié à la discussion, à l'apprentissage et à l'accompagnement autour de toutes les questions liées au digital, à l'innovation, à l'intelligence artificielle et à l'entrepreneuriat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#vision"
                className="bg-indawa-violet hover:bg-indawa-cyan text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Découvrir notre vision
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="border-2 border-indawa-violet text-indawa-violet hover:bg-indawa-violet hover:text-white px-3 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Rejoindre la communauté
              </a>
            </div>
            
            {/* Public cible */}
            <div className="mt-12 pt-8 border-t border-indawa-light">
              <p className="text-sm text-indawa-dark/60 mb-4">Pour tous les profils :</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['Débutants', 'Professionnels', 'Entrepreneurs', 'Étudiants'].map((item) => (
                  <span key={item} className="bg-white border border-indawa-light px-4 py-2 rounded-full text-sm text-indawa-dark shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right content - Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main illustration */}
              <div className="bg-gradient-to-br from-indawa-violet/5 to-indawa-cyan/5 rounded-3xl p-12 relative overflow-hidden">
                {/* Floating icons */}
                <div className="grid grid-cols-2 gap-6">
                  {/* AI Icon */}
                  <div className="bg-white rounded-2xl p-6 card-shadow hover:scale-110 transition-transform duration-300 group">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-indawa-dark group-hover:text-indawa-violet transition-colors">Intelligence Artificielle</p>
                  </div>
                  
                  {/* Digital Icon */}
                  <div className="bg-white rounded-2xl p-6 card-shadow hover:scale-110 transition-transform duration-300 group mt-8">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-indawa-dark group-hover:text-indawa-violet transition-colors">Digital</p>
                  </div>
                  
                  {/* Innovation Icon */}
                  <div className="bg-white rounded-2xl p-6 card-shadow hover:scale-110 transition-transform duration-300 group">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-indawa-dark group-hover:text-indawa-violet transition-colors">Innovation</p>
                  </div>
                  
                  {/* Entrepreneuriat Icon */}
                  <div className="bg-white rounded-2xl p-6 card-shadow hover:scale-110 transition-transform duration-300 group mt-8">
                    <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-indawa-dark group-hover:text-indawa-violet transition-colors">Entrepreneuriat</p>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-indawa-cyan/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indawa-violet/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Hero
