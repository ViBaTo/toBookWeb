import React from 'react'
import NavBar from './pages/sections/navBar'
import Hero from './pages/sections/hero'
import Percentages from './pages/sections/percentages'
import './styles/App.css'
import ForWho from './pages/sections/forWho'
import WhyUs from './pages/sections/whyUs'
import Comparison from './pages/sections/comparison'
function App() {
  return (
    <div className='main-layout'>
      <NavBar />
      <div className='main-content'>
        <Hero />
        <hr className='section-divider' />
        <Percentages />
        <hr className='section-divider' />
        <ForWho />
        <hr className='section-divider' />
        <WhyUs />
        <hr className='section-divider' />
        <Comparison />
      </div>
      {/* Aquí puedes añadir más secciones */}
    </div>
  )
}

export default App
