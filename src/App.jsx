import React from 'react'
import NavBar from './pages/sections/navBar.jsx'
import Hero from './pages/sections/hero.jsx'
import Percentages from './pages/sections/percentages.jsx'
import './styles/App.css'
import ForWho from './pages/sections/forWho.jsx'
import WhyUs from './pages/sections/whyUs.jsx'
import Comparison from './pages/sections/comparison.jsx'
import Footer from './pages/sections/footer.jsx'
import { useLocation, useRoutes } from 'react-router-dom'
import FormPage from './pages/form/formPage.jsx'
import VoiceAgents from './pages/voiceAgents/voiceAgents.jsx'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
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
      )
    },
    { path: '/demo', element: <FormPage /> },
    { path: '/voice-agents', element: <VoiceAgents /> }
  ])

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className='main-layout'>
      <div className='main-content-wrapper'>
        {location.pathname !== '/demo' && <NavBar />}
        <div className='main-content'>{routes}</div>
      </div>

      <Footer />
    </div>
  )
}
export default App
