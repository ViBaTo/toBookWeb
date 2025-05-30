import React from 'react'
import { Zap, Clock, Headphones, LineChart, Shield } from 'lucide-react'
import './whyUs.css'
import { Link } from 'react-router-dom'

const WhyChooseSection = () => {
  return (
    <section className='whyus-section' id='whyus'>
      <div className='why-choose-container'>
        <h2 className='why-choose-title'>¿Por qué toBook?</h2>

        <div className='why-choose-grid'>
          <div className='why-choose-card'>
            <div className='why-choose-card-icon'>
              <Zap />
            </div>
            <h3>IA que evoluciona y recuerda</h3>
            <p>
              Agentes que mejoran con cada interacción, adaptan el estilo de tu
              marca y reconocen a quienes llaman o escribenpor su nombre,
              creando experiencias personalizadas.
            </p>
          </div>

          <div className='why-choose-card'>
            <div className='why-choose-card-icon'>
              <Clock />
            </div>
            <h3>Activación en menos de 7 días</h3>
            <p>
              Implementación rápida sin complicaciones técnicas. Nosotros nos
              encargamos de todo el proceso.
            </p>
          </div>

          <div className='why-choose-card'>
            <div className='why-choose-card-icon'>
              <Headphones />
            </div>
            <h3>Soporte personalizado</h3>
            <p>
              Equipo dedicado que monitoriza y optimiza continuamente el
              rendimiento para maximizar resultados.
            </p>
          </div>

          <div className='why-choose-card'>
            <div className='why-choose-card-icon'>
              <LineChart />
            </div>
            <h3>ROI inmediato</h3>
            <p>
              Dashboard en tiempo real para ver el impacto tangible en tu
              negocio desde el primer día.
            </p>
          </div>

          {/*<div className='why-choose-card'>
            <div className='why-choose-card-icon'>
              <Shield />
            </div>
            <h3>Modelo sencillo</h3>
            <p>
              Suscripción transparente sin costes ocultos con prueba gratuita de
              27 días sin compromiso.
            </p>
          </div>*/}
        </div>

        {/*
        <div className='why-choose-testimonial'>
          <blockquote>
            "Lo que más sorprende a nuestros clientes es escuchar su nombre
            cuando vuelven a llamar. toBook capturó €14,500 en reservas
            adicionales en un mes, todas fuera del horario habitual."
          </blockquote>
          <cite>
            — Laura Martínez, Directora de Restaurant Gaudi, Barcelona
          </cite>
        </div>
        */}

        <div className='why-choose-cta'>
          <Link to='/demo' className='why-choose-cta-button'>
            SOLICITAR DEMO GRATUITA
          </Link>
          <p className='why-choose-cta-note'>Prueba 27 días sin compromiso</p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
