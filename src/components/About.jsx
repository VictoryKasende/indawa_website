import React from 'react'
import { LogoIcon } from './Logo'

const About = () => {
  const objectifs = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Créer un réseau',
      description: 'Rassembler des personnes passionnées par le digital, l\'innovation et l\'entrepreneuriat.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Transmettre le savoir',
      description: 'Partager des connaissances de manière simple, claire et accessible, même aux novices.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Maîtriser l\'IA',
      description: 'Apprendre à utiliser les outils digitaux et l\'intelligence artificielle pour gagner du temps.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Apprendre → Créer → Développer',
      description: 'Encourager l\'esprit d\'initiative et accompagner chaque étape de votre parcours.'
    }
  ]

  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indawa-light/30 to-white"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indawa-violet/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indawa-cyan/5 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-indawa-violet/10 rounded-lg rotate-slow"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-indawa-cyan/10 rotate-slow" style={{animationDirection: 'reverse'}}>
        <div className="w-full h-full border-2 border-indawa-violet/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indawa-violet/10 px-4 py-2 rounded-full mb-4">
            <LogoIcon className="w-5 h-5" />
            <span className="text-indawa-violet font-medium text-sm">Notre vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indawa-dark mb-6">
            Un écosystème d'<span className="text-indawa-violet">apprentissage</span>
          </h2>
          <p className="text-lg text-indawa-violet/80 max-w-3xl mx-auto leading-relaxed">
            INDAWA veut être un levier de transformation personnelle, professionnelle et entrepreneuriale. 
            Un espace où chacun peut commencer à zéro, apprendre à son rythme et développer des compétences digitales concrètes.
          </p>
        </div>

        {/* Vision content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="bg-white rounded-3xl card-shadow p-8 relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-indawa-cyan/20 rounded-2xl"></div>
              <div className="relative">
                <div className="w-full aspect-video rounded-2xl bg-indawa-dark flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <LogoIcon className="w-20 h-20 mx-auto mb-4" />
                    <p className="text-white text-xl font-light">Notre Vision</p>
                    <p className="text-white/60 text-sm mt-2">Simplifier le digital pour tous</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-indawa-dark mb-6">
              Qu'est-ce qu'<span className="text-indawa-violet">INDAWA</span> ?
            </h3>
            <p className="text-indawa-violet/80 mb-6 leading-relaxed">
              En français, <strong>Indawa</strong> signifie généralement : <em>affaire</em>, <em>question</em>, <em>problème</em> ou <em>sujet</em>. 
              C'est un terme employé pour évoquer une situation, un sujet à traiter ou un événement.
            </p>
            <p className="text-indawa-violet/80 mb-6 leading-relaxed">
              Contrairement à de nombreuses chaînes existantes qui se limitent à diffuser de l'information, 
              <strong> INDAWA accompagne réellement ses membres</strong>, même dans leur domaine de prédilection, 
              afin de leur permettre de rester à jour sur les évolutions du monde digital.
            </p>
            <div className="bg-indawa-violet/5 rounded-2xl p-6 border-l-4 border-indawa-violet">
              <p className="text-indawa-dark font-medium italic">
                "L'objectif est de simplifier le digital, de le rendre accessible, compréhensible et utile, 
                même pour ceux qui ont peu ou pas de bases."
              </p>
            </div>
          </div>
        </div>

        {/* Objectifs grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-indawa-dark text-center mb-10">
            Nos <span className="text-indawa-violet">objectifs</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectifs.map((objectif, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-3d border border-indawa-light/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indawa-violet/5 to-indawa-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indawa-violet/10 to-indawa-cyan/10 group-hover:gradient-bg flex items-center justify-center text-indawa-violet group-hover:text-white transition-all duration-500 mb-4">
                    {objectif.icon}
                  </div>
                  <h4 className="text-lg font-bold text-indawa-dark mb-2">{objectif.title}</h4>
                  <p className="text-indawa-dark/70 text-sm leading-relaxed">{objectif.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valeur ajoutée */}
        <div className="bg-white rounded-3xl card-shadow p-8 sm:p-12">
          <h3 className="text-2xl font-semibold text-indawa-dark text-center mb-8">
            La valeur ajoutée d'<span className="text-indawa-violet">INDAWA</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Utilisation concrète', desc: 'Des outils digitaux en entreprise et dans l\'apprentissage personnel' },
              { title: 'Veille permanente', desc: 'Sur les tendances technologiques actuelles' },
              { title: 'Accompagnement progressif', desc: 'Accessible et pratique pour tous les niveaux' },
              { title: 'Montée en compétences', desc: 'Continue, jour après jour' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-indawa-dark mb-2">{item.title}</h4>
                <p className="text-sm text-indawa-dark/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
