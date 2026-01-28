import React from 'react'
import logoFull from '../assets/logo-full.svg'
import logoText from '../assets/logo-text.svg'
import logoIcon from '../assets/logo-icon.svg'

// Logo complet (icône + nom)
export const Logo = ({ className = "", showSlogan = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoFull} alt="INdawa" className="h-12" />
      {showSlogan && (
        <p className="text-xs text-indawa-dark/70 font-light tracking-wider ml-2">
          Apprendre à entreprendre
        </p>
      )}
    </div>
  )
}

// Logo avec texte complet (pour footer et sections)
export const LogoFull = ({ className = "", inverted = false }) => {
  return (
    <div className={`${className}`}>
      <img 
        src={logoText} 
        alt="INdawa - Apprendre à entreprendre" 
        className={`h-10 ${inverted ? 'brightness-0 invert' : ''}`}
      />
    </div>
  )
}

// Icône seule (pour mobile et petits espaces)
export const LogoIcon = ({ className = "w-10 h-10" }) => {
  return (
    <img 
      src={logoIcon} 
      alt="INdawa" 
      className={className}
    />
  )
}

export default Logo

