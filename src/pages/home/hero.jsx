import React, { useState, useEffect } from 'react'
import {
  Phone,
  MessageCircle,
  TrendingDown,
  ArrowRight,
  AlertTriangle
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './hero.css'

const HeroHomepage = () => {
  const [lostAmount, setLostAmount] = useState(1247)

  // Contador animado para el dinero perdido
  useEffect(() => {
    const interval = setInterval(() => {
      setLostAmount((prev) => {
        const increment = Math.random() * 30 + 10
        return prev + increment
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='hero page-fade' id='hero-homepage'>
      <div className='hero__container hero__enhanced'>
        <div className='hero__content'>
          <div className='hero__tag'>
            AUTOMATIZACIÓN INTELIGENTE PARA HOSPITALIDAD
          </div>

          <h1 className='hero__title hero__title--impact'>
            ¿Cuánto Dinero Pierdes
            <br />
            <span className='hero__title--highlight'>Cada Día Que Pasa?</span>
          </h1>

          <p className='hero__description hero__description--impact'>
            <strong>toBook</strong> convierte cada llamada perdida y cada
            mensaje sin respuesta en reservas confirmadas. Agentes de voz y
            chatbots que trabajan 24/7 mientras tu competencia duerme.
          </p>
        </div>

        <div className='hero__right-section'>
          <div className='hero__loss-calculator'>
            <div className='hero__loss-icon'>
              <TrendingDown size={24} />
            </div>
            <div className='hero__loss-content'>
              <div className='hero__loss-label'>
                <AlertTriangle size={16} />
                Dinero perdido por no responder:
              </div>
              <div className='hero__loss-amount'>
                €{Math.floor(lostAmount).toLocaleString()}
                <span className='hero__loss-period'>/mes</span>
              </div>
              <div className='hero__loss-note'>
                Y sigue subiendo cada día...
              </div>
            </div>
          </div>

          <div className='hero__cta-dual'>
            <Link
              to='/voice-agents#hero-voice'
              className='hero__cta-button hero__cta-voice'
            >
              <Phone size={20} />
              <div className='hero__cta-content'>
                <span className='hero__cta-title'>AGENTES DE VOZ</span>
                <span className='hero__cta-subtitle'>
                  Atienden llamadas 24/7
                </span>
              </div>
              <ArrowRight size={16} />
            </Link>

            <Link
              to='/chatbots#hero-chat'
              className='hero__cta-button hero__cta-chat'
            >
              <MessageCircle size={20} />
              <div className='hero__cta-content'>
                <span className='hero__cta-title'>CHATBOTS IA</span>
                <span className='hero__cta-subtitle'>
                  Responden mensajes al instante
                </span>
              </div>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHomepage
