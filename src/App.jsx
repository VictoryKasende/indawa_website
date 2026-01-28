import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Thematiques from './components/Thematiques'
import Equipe from './components/Equipe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Thematiques />
        <Equipe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
