import React from 'react'
import {
  CalendarCheck,
  Settings,
  PhoneCall,
  Zap,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FAQs from './FAQs'
import './FAQs.css'
import './howToStart.css'

const steps = [
  {
    icon: <CalendarCheck size={36} />,
    title: 'Solicita una demo personalizada',
    desc: 'Habla con un especialista de toBook y descubre cómo la automatización puede transformar tu negocio. Sin compromiso.'
  },
  {
    icon: <Settings size={36} />,
    title: 'Configuración guiada y prueba gratuita',
    desc: 'Te ayudamos a configurar tu asistente de voz y/o chatbot en minutos. Prueba todas las funciones sin coste.'
  },
  {
    icon: <PhoneCall size={36} />,
    title: 'Integra tus canales',
    desc: 'Conecta toBook con tu teléfono, WhatsApp, Instagram, Facebook y más. Todo centralizado y fácil de gestionar.'
  },
  {
    icon: <Zap size={36} />,
    title: 'Empieza a recibir reservas automáticas',
    desc: 'Tu asistente digital trabaja 24/7 para captar clientes y gestionar reservas mientras tú te ocupas de lo importante.'
  }
]

const HowToStart = () => {
  return (
    <div className='howtostart-page'>
      <section className='howtostart-hero'>
        <h1>
          ¿Cómo empezar con <span className='highlight'>toBook</span>?
        </h1>
        <p>
          Automatiza reservas y atención al cliente en 4 pasos sencillos. Sin
          complicaciones, sin permanencia.
        </p>
      </section>
      <section className='howtostart-steps'>
        {steps.map((step, idx) => (
          <div className='howtostart-step' key={idx}>
            <div className='howtostart-step-icon'>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {idx < steps.length - 1 && (
              <ArrowRight className='howtostart-arrow' size={28} />
            )}
          </div>
        ))}
      </section>
      <section className='howtostart-cta'>
        <h2>¿Listo para transformar tu negocio?</h2>
        <Link to='/demo' className='howtostart-btn'>
          Solicitar demo gratuita
        </Link>
      </section>
      <FAQs />
    </div>
  )
}

export default HowToStart
