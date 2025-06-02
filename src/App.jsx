import React from 'react'
import NavBar from './pages/home/navBar'
import Hero from './pages/home/hero'
import Percentages from './pages/home/percentages'
import './styles/App.css'
import ForWho from './pages/home/forWho'
import WhyUs from './pages/home/whyUs'
import Comparison from './pages/home/comparison'
import Footer from './pages/home/footer'
import { useLocation, useRoutes } from 'react-router-dom'
import FormPage from './pages/form/formPage'
import VoiceAgents from './pages/voiceAgents/voiceAgents'
import { useEffect } from 'react'
import ChatBots from './pages/chatBots/chatBots'
import PricingPage from './pages/pricing/pricing'
import HowToStart from './pages/resources/howToStart'

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
