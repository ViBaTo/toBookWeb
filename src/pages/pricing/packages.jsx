import React, { useState } from 'react'
import { Utensils, Hotel, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import './packages.css'

const RestaurantPackages = () => {
  const [activeTab, setActiveTab] = useState('restaurant') // 'restaurant' or 'hotel'
  const [hotelCategory, setHotelCategory] = useState('boutique') // 'boutique', 'standard', 'premium'

  const restaurantPackages = [
    {
      title: 'Restaurante Básico',
      price: '79',
      features: [
        'Chatbot para WhatsApp e Instagram',
        'Gestión de reservas por chat',
        'Responde a todas las preguntas frecuentes',
        'Confirmación automática de reservas',
        'API para integraciones personalizadas'
      ],
      recommended: false,
      savings: null
    },
    {
      title: 'Restaurante Premium',
      price: '129',
      features: [
        'Atención de llamadas 24/7',
        'Gestión de mesas en tiempo real',
        'Reconocimiento de clientes recurrentes',
        'Recordatorios automáticos',
        'Soporte prioritario',
        'API para integraciones personalizadas'
      ],
      recommended: true,
      savings: null
    },
    {
      title: 'Solución Completa Restaurante',
      price: '179',
      features: [
        'Todo lo del Restaurante Premium',
        'Gestión de listas de espera',
        'Integración con sistemas de reservas',
        'Análisis avanzado de conversaciones',
        'Personalización de voz y chatbot',
        'Soporte 24/7',
        'API para integraciones personalizadas'
      ],
      recommended: false,
      savings: 29
    }
  ]

  const hotelPackages = {
    boutique: [
      {
        title: 'Asistente Digital Boutique',
        price: '99',
        features: [
          'Chatbot para WhatsApp e Instagram',
          'Gestión de reservas por chat',
          'Responde a todas las preguntas frecuentes',
          'Confirmación automática de reservas',
          'Panel de administración básico',
          'API para integraciones personalizadas'
        ],
        recommended: false,
        savings: null
      },
      {
        title: 'Recepcionista Inteligente Boutique',
        price: '159',
        features: [
          'Atención de llamadas 24/7',
          'Gestión de habitaciones en tiempo real',
          'Reconocimiento de huéspedes recurrentes',
          'Recordatorios automáticos',
          'Estadísticas de conversaciones',
          'Soporte prioritario',
          'API para integraciones personalizadas'
        ],
        recommended: true,
        savings: null
      },
      {
        title: 'Solución Completa Boutique',
        price: '229',
        features: [
          'Todo lo del Recepcionista Inteligente',
          'Gestión de listas de espera',
          'Integración con sistemas de reservas',
          'Análisis avanzado de conversaciones',
          'Personalización de voz y chatbot',
          'Soporte 24/7',
          'API para integraciones personalizadas'
        ],
        recommended: false,
        savings: 29
      }
    ],
    standard: [
      {
        title: 'Asistente Digital Estándar',
        price: '119',
        features: [
          'Chatbot para WhatsApp e Instagram',
          'Gestión de reservas por chat',
          'Responde a todas las preguntas frecuentes',
          'Confirmación automática de reservas',
          'Panel de administración básico',
          'API para integraciones personalizadas'
        ],
        recommended: false,
        savings: null
      },
      {
        title: 'Recepcionista Inteligente Estándar',
        price: '179',
        features: [
          'Atención de llamadas 24/7',
          'Gestión de habitaciones en tiempo real',
          'Reconocimiento de huéspedes recurrentes',
          'Recordatorios automáticos',
          'Estadísticas de conversaciones',
          'Soporte prioritario',
          'API para integraciones personalizadas'
        ],
        recommended: true,
        savings: null
      },
      {
        title: 'Solución Completa Estándar',
        price: '249',
        features: [
          'Todo lo del Recepcionista Inteligente',
          'Gestión de listas de espera',
          'Integración con sistemas de reservas',
          'Análisis avanzado de conversaciones',
          'Personalización de voz y chatbot',
          'Soporte 24/7',
          'API para integraciones personalizadas'
        ],
        recommended: false,
        savings: 49
      }
    ],
    premium: [
      {
        title: 'Asistente Digital Premium',
        price: '169',
        features: [
          'Chatbot para WhatsApp e Instagram',
          'Gestión de reservas por chat',
          'Responde a todas las preguntas frecuentes',
          'Confirmación automática de reservas',
          'Panel de administración básico',
          'API para integraciones personalizadas'
        ],
        recommended: false,
        savings: null
      },
      {
        title: 'Recepcionista Inteligente Premium',
        price: '229',
        features: [
          'Atención de llamadas 24/7',
          'Gestión de habitaciones en tiempo real',
          'Reconocimiento de huéspedes recurrentes',
          'Recordatorios automáticos',
          'Estadísticas de conversaciones',
          'Soporte prioritario',
          'API para integraciones personalizadas'
        ],
        recommended: true,
        savings: null
      },
      {
        title: 'Solución Completa Premium',
        price: '299',
        features: [
          'Todo lo del Recepcionista Inteligente',
          'Gestión de listas de espera',
          'Integración con sistemas de reservas',
          'Análisis avanzado de conversaciones',
          'Personalización de voz y chatbot',
          'Soporte 24/7',
          'API para integraciones personalizadas'
        ],
        recommended: false,
        savings: 69
      }
    ]
  }

  const packages =
    activeTab === 'restaurant'
      ? restaurantPackages
      : hotelPackages[hotelCategory]

  return (
    <section className='packages-section' id='packages'>
      <div className='packages-container'>
        <div className='packages-tabs'>
          <button
            className={`packages-tab ${
              activeTab === 'restaurant' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('restaurant')}
          >
            <Utensils size={20} />
            <span>Restaurantes</span>
          </button>
          <button
            className={`packages-tab ${activeTab === 'hotel' ? 'active' : ''}`}
            onClick={() => setActiveTab('hotel')}
          >
            <Hotel size={20} />
            <span>Hoteles</span>
          </button>
        </div>

        {activeTab === 'hotel' && (
          <div className='packages-tabs hotel-categories'>
            <button
              className={`packages-tab ${
                hotelCategory === 'boutique' ? 'active' : ''
              }`}
              onClick={() => setHotelCategory('boutique')}
            >
              <Star size={20} />
              <span>Boutique (hasta 150 hab.)</span>
            </button>
            <button
              className={`packages-tab ${
                hotelCategory === 'standard' ? 'active' : ''
              }`}
              onClick={() => setHotelCategory('standard')}
            >
              <Star size={20} />
              <span>Estándar (150-300 hab.)</span>
            </button>
            <button
              className={`packages-tab ${
                hotelCategory === 'premium' ? 'active' : ''
              }`}
              onClick={() => setHotelCategory('premium')}
            >
              <Star size={20} />
              <span>Premium (+300 hab.)</span>
            </button>
          </div>
        )}

        <div className='packages-grid'>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card ${pkg.recommended ? 'recommended' : ''}`}
            >
              {pkg.recommended && (
                <div className='recommended-badge'>Recomendado</div>
              )}
              <h3 className='package-title'>{pkg.title}</h3>
              <div className='package-price'>
                <span className='currency'>€</span>
                <span className='amount'>{pkg.price}</span>
                <span className='period'>/mes</span>
              </div>
              {pkg.savings && (
                <div className='savings-badge'>Ahorra €{pkg.savings}</div>
              )}
              <ul className='package-features'>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className='feature-item'>
                    <span className='check-icon'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to='/demo'
                state={{ selectedPackage: pkg.title }}
                className='package-button'
              >
                Comenzar ahora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RestaurantPackages
