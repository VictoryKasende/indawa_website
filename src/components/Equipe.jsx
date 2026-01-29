import React from 'react'
import { LogoIcon } from './Logo'
import victoryProfil from '../assets/profil/victory_profil.jpg'
import israelProfil from '../assets/profil/israel_profil.jpeg'
import franckProfil from '../assets/profil/franck_profil.png'   

const Equipe = () => {
  const membres = [
    {
      nom: 'Kasende Ngeleka Victoire',
      role: 'Co-fondateur & Contenu pédagogique',
      description: 'Responsable du contenu pédagogique, des citations et de la transmission des connaissances.',
      photo: victoryProfil,
      initiales: 'KV',
      color: 'from-indawa-violet to-indawa-cyan',
      linkedin: 'https://www.linkedin.com/in/victory-kasende-360003278/',
      instagram: 'https://www.instagram.com/victory_kasende/'
    },
    {
      nom: 'Franck Kazadi',
      role: 'Co-fondateur & Contenu pédagogique',
      description: 'Responsable du contenu pédagogique, des matières dispensées et de la transmission des connaissances.',
      photo: franckProfil,
      initiales: 'FK',
      color: 'from-indawa-cyan to-blue-500',
      linkedin: 'https://www.linkedin.com/in/frank-kazadi-77972628a/',
      instagram: 'https://www.instagram.com/frank.a.z.a.d.i_official?igsh=MTdtcDJ5Mm9vbTZr&utm_source=qr'
    },
    {
      nom: 'Israel Kazadi',
      role: 'Directeur artistique',
      description: 'Responsable de la création des visuels et de l\'identité graphique de la chaîne.',
      photo: israelProfil,
      initiales: 'IK',
      color: 'from-purple-500 to-indawa-violet',
      linkedin: 'https://www.linkedin.com/in/israel-kazadi-ba569628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/israelkzd?igsh=aDBnem05Z2xiNXps&utm_source=qr'
    }
  ]

  return (
    <section id="equipe" className="py-20 bg-indawa-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#291549" fillOpacity="0.03"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indawa-violet/10 px-4 py-2 rounded-full mb-4">
            <LogoIcon className="w-5 h-5" />
            <span className="text-indawa-violet font-medium text-sm">Notre équipe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indawa-dark mb-6">
            L'équipe <span className="text-indawa-violet">INDAWA</span>
          </h2>
          <p className="text-lg text-indawa-violet/80 max-w-2xl mx-auto">
            Une équipe de trois personnes complémentaires, chacun apportant sa compétence 
            pour garantir un suivi de qualité et une expérience enrichissante.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {membres.map((membre, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl card-shadow p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {membre.photo ? (
                  <img 
                    src={membre.photo} 
                    alt={membre.nom}
                    className="w-full h-full object-cover"
                    style={membre.nom === 'Kasende Ngeleka Victoire' ? { transform: 'scale(3)', objectPosition: 'center -40%' } : {}}
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${membre.color} flex items-center justify-center`}>
                    <span className="text-3xl font-bold text-white">{membre.initiales}</span>
                  </div>
                )}
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-semibold text-indawa-dark mb-2">{membre.nom}</h3>
              <p className="text-indawa-violet font-medium text-sm mb-4">{membre.role}</p>
              <p className="text-indawa-dark/70 text-sm leading-relaxed">{membre.description}</p>
              
              {/* Social links */}
              <div className="flex justify-center gap-3 mt-6">
                {membre.linkedin && (
                  <a href={membre.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-indawa-light hover:gradient-bg flex items-center justify-center text-indawa-dark/50 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {membre.instagram && (
                  <a href={membre.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-indawa-light hover:gradient-bg flex items-center justify-center text-indawa-dark/50 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipe
