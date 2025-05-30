import React, { useState, useRef, useEffect } from 'react'
import {
  PhoneCall,
  MessageCircle,
  Users,
  Clock,
  Bot,
  UserCheck
} from 'lucide-react'
import './comparisonChat.css'
import { Link } from 'react-router-dom'
// Counter animado
function Counter({ value, prefix = '', suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
    let start = 0
    let startTimestamp = null
    const end = value
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(step)
    // eslint-disable-next-line
  }, [value])
  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

const ComparisonChatSection = () => {
  const [activeTab, setActiveTab] = useState('restaurant')
  const [animate, setAnimate] = useState(false)
  const metricsRef = useRef()

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true)
      },
      { threshold: 0.4 }
    )
    if (metricsRef.current) observer.observe(metricsRef.current)
    return () => observer.disconnect()
  }, [])

  // Contenido condicional para restaurantes y hoteles
  const renderChatContent = () => {
    if (activeTab === 'restaurant') {
      return (
        <>
          <div className='comparison-card comparison-traditional'>
            <div className='comparison-card-header'>
              <div className='comparison-card-icon'>
                <MessageCircle size={28} />
              </div>
              <h3>Chat Tradicional</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble system'>
                Gracias por contactar con Restaurante Mediterráneo. Un miembro
                de nuestro equipo le responderá en breve.
              </div>

              <div className='comparison-chat-bubble user'>
                Hola, quiero reservar una mesa para esta noche
              </div>

              <div className='comparison-chat-bubble system'>
                <Clock className='comparison-waiting-icon' size={16} />
                <span>Visto hace 2 horas...</span>
              </div>

              <div className='comparison-chat-bubble user'>
                ¿Hay alguien disponible?
              </div>

              <div className='comparison-chat-bubble system'>
                <Clock className='comparison-waiting-icon' size={16} />
                <span>En línea hace 45 minutos...</span>
              </div>

              <div className='comparison-chat-bubble user'>
                Ya encontré otro restaurante
              </div>

              <div className='comparison-result negative'>
                <span>Cliente perdido por falta de respuesta inmediata</span>
              </div>
            </div>
          </div>

          <div className='comparison-card comparison-tobook'>
            <div className='comparison-card-header'>
              <div className='comparison-card-icon'>
                <Bot size={28} />
              </div>
              <h3>toBook Chat IA</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble tobook'>
                ¡Hola! 👋 Soy Sofia, tu asistente virtual de Restaurante
                Mediterráneo. ¿En qué puedo ayudarte?
              </div>

              <div className='comparison-chat-bubble user'>
                Quiero reservar una mesa para esta noche
              </div>

              <div className='comparison-chat-bubble tobook'>
                ¡Perfecto! ¿Para cuántas personas y a qué hora te gustaría?
                Tenemos disponibilidad a partir de las 20:00h
              </div>

              <div className='comparison-chat-bubble user'>
                Para 4 personas a las 21:30h
              </div>

              <div className='comparison-chat-bubble tobook'>
                Genial, he reservado mesa para 4 personas hoy a las 21:30h. Te
                he enviado la confirmación por WhatsApp. ¿Te interesa nuestro
                menú degustación especial de esta semana?
              </div>

              <div className='comparison-chat-bubble user'>¿Qué incluye?</div>

              <div className='comparison-chat-bubble tobook-last'>
                5 platos del chef + maridaje de vinos por 65€/persona. ¿Lo añado
                a tu reserva? También puedes decidirlo cuando llegues 😊
              </div>

              <div className='comparison-result positive'>
                <span>Reserva confirmada + oportunidad de upselling</span>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className='comparison-card comparison-traditional'>
            <div className='comparison-card-header'>
              <div className='comparison-card-icon'>
                <MessageCircle size={28} />
              </div>
              <h3>Chat Tradicional</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble user'>
                Hola, necesito información sobre habitaciones disponibles para
                este fin de semana
              </div>

              <div className='comparison-chat-bubble system'>
                Gracias por contactarnos. Le responderemos en horario de oficina
                de 9:00 a 18:00h
              </div>

              <div className='comparison-chat-bubble user'>
                Pero es para este fin de semana... necesito respuesta hoy
              </div>

              <div className='comparison-chat-bubble system'>
                <Clock className='comparison-waiting-icon' size={16} />
                <span>Mensaje enviado a las 22:30h - Sin respuesta</span>
              </div>

              <div className='comparison-chat-bubble user'>
                Ya reservé en otro hotel
              </div>

              <div className='comparison-result negative'>
                <span>Oportunidad perdida fuera del horario comercial</span>
              </div>
            </div>
          </div>

          <div className='comparison-card comparison-tobook'>
            <div className='comparison-card-header'>
              <div className='comparison-card-icon'>
                <Bot size={28} />
              </div>
              <h3>toBook Chat IA</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble tobook'>
                ¡Buenas noches! 🌙 Soy Maya del Hotel Costa Azul. ¿En qué puedo
                ayudarte?
              </div>

              <div className='comparison-chat-bubble user'>
                Necesito una habitación para este fin de semana, del viernes al
                domingo
              </div>

              <div className='comparison-chat-bubble tobook'>
                ¡Perfecto! Tengo disponibilidad para este fin de semana.
                ¿Prefieres habitación estándar (120€/noche) o superior con
                vistas al mar (180€/noche)? Ambas incluyen desayuno buffet
              </div>

              <div className='comparison-chat-bubble user'>
                La superior con vistas al mar
              </div>

              <div className='comparison-chat-bubble tobook'>
                Excelente elección ✨ He reservado habitación superior con
                vistas al mar para 2 personas del viernes 28 al domingo 30 (360€
                total). ¿Te envío el enlace de pago seguro?
              </div>

              <div className='comparison-chat-bubble user'>Sí, perfecto</div>

              <div className='comparison-chat-bubble tobook-last'>
                ¡Listo! Te he enviado el enlace por email. ¿Te interesa reservar
                también mesa en nuestro restaurante con terraza para alguna
                noche? 🍽️
              </div>

              <div className='comparison-result positive'>
                <span>Reserva nocturna completada + venta adicional</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <section className='comparison-section'>
      <div className='comparison-container'>
        <h2 className='comparison-tag'>CHAT INTELIGENTE 24/7</h2>

        <h1 className='comparison-title'>
          Conversaciones que convierten en reservas
        </h1>

        <div className='comparison-tabs'>
          <button
            className={`comparison-tab ${
              activeTab === 'restaurant' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('restaurant')}
          >
            <Users size={20} />
            <span>Restaurantes</span>
          </button>
          <button
            className={`comparison-tab ${
              activeTab === 'hotel' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('hotel')}
          >
            <UserCheck size={20} />
            <span>Hoteles</span>
          </button>
        </div>

        <div className='comparison-cards'>{renderChatContent()}</div>

        <div className='comparison-metrics' ref={metricsRef}>
          <div className='comparison-metric'>
            <h4>
              {animate ? <Counter value={52} prefix='+' suffix='%' /> : '+0%'}
            </h4>
            <p>Aumento en reservas</p>
          </div>
          <div className='comparison-metric'>
            <h4>
              {animate ? <Counter value={94} prefix='-' suffix='%' /> : '-0%'}
            </h4>
            <p>Mensajes perdidos</p>
          </div>
          <div className='comparison-metric'>
            <h4>
              {animate ? <Counter value={100} prefix='+' suffix='%' /> : '+0%'}
            </h4>
            <p>Velocidad de respuesta</p>
          </div>
        </div>

        <div className='comparison-cta'>
          <Link to='/demo' className='comparison-cta-button'>
            VER DEMOSTRACIÓN EN VIVO
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ComparisonChatSection
