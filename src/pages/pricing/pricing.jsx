import React from 'react'
import RestaurantPackages from './packages.jsx'
import './pricing.css'

const PricingPage = () => {
  return (
    <div className='page-fade'>
      <div className='pricing-header'>
        <h1>Planes y Precios</h1>
        <p>Soluciones adaptadas a cada tipo de negocio</p>
      </div>
      <RestaurantPackages />
      {/* Aquí podemos añadir más secciones de precios para otros tipos de negocios */}
    </div>
  )
}

export default PricingPage
