import React from 'react'
import { Utensils, Hotel } from 'lucide-react'
import './forWhoVoice.css'
import { Link } from 'react-router-dom'

const ForWhoVoiceSection = () => {
  return (
    <section className='for-who-section'>
      <div className='for-who-container'>
        <h2 className='for-who-tag'>DISEÑADO PARA EXPERTOS EN HOSPITALIDAD</h2>

        <h1 className='for-who-title'>
          Soluciones de voz potenciadas por IA para quienes valoran cada reserva
        </h1>

        <div className='for-who-cards'>
          <div className='for-who-card'>
            <div className='for-who-card-icon'>
              <Utensils size={32} />
            </div>
            <h3 className='for-who-card-title'>Restaurantes</h3>
            <p className='for-who-card-description'>
              Gestiona reservas, confirmaciones y listas de espera con precisión
              y calidez, liberando a tu personal para que se enfoque en crear
              experiencias culinarias memorables.
            </p>
            <ul className='for-who-card-features'>
              <li>Gestión de reservas y mesas</li>
              <li>Confirmaciones automáticas</li>
              <li>Manejo de listas de espera</li>
              <li>Captura de preferencias culinarias</li>
            </ul>
          </div>

          <div className='for-who-card'>
            <div className='for-who-card-icon'>
              <Hotel size={32} />
            </div>
            <h3 className='for-who-card-title'>Hoteles</h3>
            <p className='for-who-card-description'>
              Ofrece atención 24/7 para reservas, consultas y servicios
              adicionales, asegurando que ninguna oportunidad de negocio se
              pierda, incluso fuera del horario de recepción.
            </p>
            <ul className='for-who-card-features'>
              <li>Reservas de habitaciones instantáneas</li>
              <li>Gestión de disponibilidad en tiempo real</li>
              <li>Respuestas a consultas frecuentes</li>
              <li>Upselling de servicios premium</li>
            </ul>
          </div>
        </div>

        <div className='for-who-cta'>
          <Link to='/demo' className='for-who-cta-button'>
            SOLICITAR DEMO GRATIS
          </Link>
          <p className='for-who-cta-note'>Implementación en menos 3 días</p>
        </div>
      </div>
    </section>
  )
}

export default ForWhoVoiceSection
