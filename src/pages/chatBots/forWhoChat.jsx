import React from 'react'
import { Utensils, Hotel } from 'lucide-react'
import './forWhoChat.css'
import { Link } from 'react-router-dom'

const ForWhoChatSection = () => {
  return (
    <section className='for-who-section'>
      <div className='for-who-container'>
        <h2 className='for-who-tag'>DISEÑADO PARA EXPERTOS EN HOSPITALIDAD</h2>

        <h1 className='for-who-title'>
          Soluciones De Chat Potenciadas Por IA Para Quienes Valoran Cada
          Conversación
        </h1>

        <div className='for-who-cards'>
          <div className='for-who-card'>
            <div className='for-who-card-icon'>
              <Utensils size={32} />
            </div>
            <h3 className='for-who-card-title'>Restaurantes</h3>
            <p className='for-who-card-description'>
              Convierte cada mensaje en una reserva confirmada, gestionando
              consultas, menús y disponibilidad al instante, liberando a tu
              personal para que se enfoque en crear experiencias gastronómicas
              excepcionales.
            </p>
            <ul className='for-who-card-features'>
              <li>Reservas instantáneas multicanal</li>
              <li>Consultas de menú y alergias</li>
              <li>Gestión de horarios y disponibilidad</li>
              <li>Recomendaciones personalizadas</li>
            </ul>
          </div>

          <div className='for-who-card'>
            <div className='for-who-card-icon'>
              <Hotel size={32} />
            </div>
            <h3 className='for-who-card-title'>Hoteles</h3>
            <p className='for-who-card-description'>
              Atiende huéspedes desde el primer contacto hasta el check-out,
              respondiendo consultas sobre servicios, tarifas y disponibilidad
              las 24 horas, asegurando que ninguna oportunidad de reserva se
              escape.
            </p>
            <ul className='for-who-card-features'>
              <li>Check-in y check-out automatizado</li>
              <li>Información de servicios del hotel</li>
              <li>Gestión de quejas y solicitudes</li>
              <li>Venta cruzada de experiencias premium</li>
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

export default ForWhoChatSection
