import React from 'react'
import NavBar from './pages/sections/navBar.jsx'
import Hero from './pages/sections/hero.jsx'
import Percentages from './pages/sections/percentages.jsx'
import './styles/App.css'
import ForWho from './pages/sections/forWho.jsx'
import WhyUs from './pages/sections/whyUs.jsx'
import Comparison from './pages/sections/comparison.jsx'
import { Routes, Route } from 'react-router-dom'
import FormPage from './pages/form/formPage.jsx'

function App() {
  return (
    <div className='main-layout'>
      <NavBar />
      <div className='main-content'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <hr className='section-divider' />
                <Percentages />
                <hr className='section-divider' />
                <ForWho />
                <hr className='section-divider' />
                <WhyUs />
                <hr className='section-divider' />
                <Comparison />
              </>
            }
          />
          <Route path='/demo' element={<FormPage />} />
        </Routes>
      </div>
      {/* Aquí puedes añadir más secciones */}
    </div>
  )
}

export default App
