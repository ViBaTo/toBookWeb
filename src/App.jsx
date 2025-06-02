import React from 'react'
import NavBar from './pages/home/navBar.jsx'
import Hero from './pages/home/hero.jsx'
import Percentages from './pages/home/percentages.jsx'
import './styles/App.css'
import ForWho from './pages/home/forWho.jsx'
import WhyUs from './pages/home/whyUs.jsx'
import Comparison from './pages/home/comparison.jsx'
import Footer from './pages/home/footer.jsx'
import { useLocation, useRoutes } from 'react-router-dom'
import FormPage from './pages/form/formPage.jsx'
import VoiceAgents from './pages/voiceAgents/voiceAgents.jsx'
import { useEffect } from 'react'
import ChatBots from './pages/chatBots/chatBots.jsx'
import PricingPage from './pages/pricing/pricing.jsx'
import HowToStart from './pages/resources/howToStart.jsx'

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
    { path: '/voice-agents', element: <VoiceAgents /> },
    { path: '/chatbots', element: <ChatBots /> },
    { path: '/pricing', element: <PricingPage /> },
    { path: '/recursos/como-empezar', element: <HowToStart /> }
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
