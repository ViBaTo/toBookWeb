// src/sections/Hero.jsx
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <div className='hero__tag'></div>

          <h1 className='hero__title'>
            REVOLUCIONANDO <br /> LAS RESERVAS
          </h1>

          <p className='hero__description'>
            Tus agentes de voz atienden reservas con amabilidad a toda hora,
            transformando llamadas perdidas en oportunidades y consultas
            nocturnas en reservas confirmadas. Es como tener un equipo
            incansable trabajando mientras descansas.
          </p>

          <div className='hero__cta-container'>
            <a href='#demo' className='hero__cta-button'>
              PRUEBA 27 DÍAS GRATIS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
