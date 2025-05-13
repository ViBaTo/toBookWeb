import React, { useState, useRef, useEffect } from 'react'
import {
  PhoneCall,
  MessageCircle,
  Users,
  Clock,
  Bot,
  UserCheck
} from 'lucide-react'
import './comparison.css'
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

const ComparisonSection = () => {
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
                <PhoneCall size={28} />
              </div>
              <h3>Modelo Tradicional</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble system'>
                Hola, gracias por llamar a Restaurante Mediterráneo. Por favor,
                pulse 1 para reservas, 2 para horarios, 3 para hablar con un
                operador...
              </div>

              <div className='comparison-key-press'>
                <span>1</span>
              </div>

              <div className='comparison-chat-bubble system'>
                Para hacer una reserva pulse 1, para modificar pulse 2, para
                cancelar pulse 3...
              </div>

              <div className='comparison-key-press'>
                <span>1</span>
              </div>

              <div className='comparison-chat-bubble system'>
                ¿Para qué día desea hacer su reserva?
              </div>

              <div className='comparison-key-press voice'>
                <span>Para hoy</span>
              </div>

              <div className='comparison-chat-bubble system'>¿A qué hora?</div>

              <div className='comparison-chat-bubble system-last'>
                <Clock className='comparison-waiting-icon' size={16} />
                <span>Espere mientras le transferimos con un operador...</span>
              </div>

              <div className='comparison-result negative'>
                <span>Procesos lentos que frustran al cliente</span>
              </div>
            </div>
          </div>

          <div className='comparison-card comparison-tobook'>
            <div className='comparison-card-header'>
              <div className='comparison-card-icon'>
                <Bot size={28} />
              </div>
              <h3>toBook IA</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble tobook'>
                ¡Hola Marta! Gracias por volver a llamar a Restaurante
                Mediterráneo. ¿En qué puedo ayudarte hoy?
              </div>

              <div className='comparison-chat-bubble user'>
                Quiero una mesa para dos personas hoy a las 21h
              </div>

              <div className='comparison-chat-bubble tobook'>
                ¡Perfecto! Tengo disponibilidad a las 21h para 2 personas. ¿Te
                gustaría la terraza como la última vez o prefieres interior?
              </div>

              <div className='comparison-chat-bubble user'>
                Terraza por favor
              </div>

              <div className='comparison-chat-bubble tobook'>
                ¡Genial! He reservado una mesa en terraza para 2 personas hoy a
                las 21h. Te he enviado la confirmación por SMS. ¿Necesitas algo
                más?
              </div>

              <div className='comparison-chat-bubble user'>No, gracias</div>

              <div className='comparison-chat-bubble tobook-last'>
                Perfecto, Marta. Te esperamos esta noche. Recuerda que puedes
                modificar tu reserva llamando en cualquier momento. ¡Que tengas
                un buen día!
              </div>

              <div className='comparison-result positive'>
                <span>Reserva completada en segundos. Cliente satisfecho.</span>
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
                <PhoneCall size={28} />
              </div>
              <h3>Modelo Tradicional</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble system'>
                Gracias por llamar al Hotel Costa Azul. Para reservas pulse 1,
                para consultar su reserva pulse 2, para servicios del hotel
                pulse 3...
              </div>

              <div className='comparison-key-press'>
                <span>1</span>
              </div>

              <div className='comparison-chat-bubble system'>
                Si conoce el número de extensión de reservas, márquelo ahora. De
                lo contrario espere...
              </div>

              <div className='comparison-chat-bubble system'>
                <Clock className='comparison-waiting-icon' size={16} />
                <span>
                  Todas nuestras líneas están ocupadas. Su llamada es importante
                  para nosotros...
                </span>
              </div>

              <div className='comparison-chat-bubble system'>
                <Clock className='comparison-waiting-icon' size={16} />
                <span>Tiempo estimado de espera: 12 minutos</span>
              </div>

              <div className='comparison-key-press voice'>
                <span>Cuelga la llamada</span>
              </div>

              <div className='comparison-result negative'>
                <span>Pérdida del cliente y de la reserva potencial</span>
              </div>
            </div>
          </div>

          <div className='comparison-card comparison-tobook'>
            <div className='comparison-card-header'>
              <div className='comparison-card-icon'>
                <Bot size={28} />
              </div>
              <h3>toBook IA</h3>
            </div>

            <div className='comparison-chat'>
              <div className='comparison-chat-bubble tobook'>
                ¡Buenas noches Carlos! Encantado de volver a hablar contigo. Soy
                el asistente del Hotel Costa Azul. ¿En qué puedo ayudarte hoy?
              </div>

              <div className='comparison-chat-bubble user'>
                Necesito una habitación para este fin de semana, del viernes al
                domingo
              </div>

              <div className='comparison-chat-bubble tobook'>
                Perfecto Carlos. Veo que en tu última estancia preferiste una
                habitación con vistas al mar. Tenemos disponibilidad para este
                fin de semana (28-30 julio). ¿Te gustaría el mismo tipo de
                habitación?
              </div>

              <div className='comparison-chat-bubble user'>
                Sí, y si es posible en una planta alta
              </div>

              <div className='comparison-chat-bubble tobook'>
                He reservado una habitación Deluxe con vistas al mar en la 8ª
                planta para 2 personas del viernes 28 al domingo 30. El precio
                es de 210€/noche con desayuno incluido. ¿Quieres que la
                confirme?
              </div>

              <div className='comparison-chat-bubble user'>Sí, perfecto</div>

              <div className='comparison-chat-bubble tobook-last'>
                Reserva confirmada, Carlos. Acabo de enviarte el email con todos
                los detalles. ¿Quieres que reserve también mesa en nuestro
                restaurante para alguna noche?
              </div>

              <div className='comparison-result positive'>
                <span>
                  Reserva personalizada y oportunidad de venta adicional
                </span>
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
        <h2 className='comparison-tag'>EXPERIENCIA REVOLUCIONARIA</h2>

        <h1 className='comparison-title'>
          La diferencia que tus clientes notarán
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
              {animate ? <Counter value={40} prefix='+' suffix='%' /> : '+0%'}
            </h4>
            <p>Aumento en reservas</p>
          </div>
          <div className='comparison-metric'>
            <h4>
              {animate ? <Counter value={97} prefix='-' suffix='%' /> : '-0%'}
            </h4>
            <p>Llamadas perdidas</p>
          </div>
          <div className='comparison-metric'>
            <h4>
              {animate ? <Counter value={28} prefix='+' suffix='%' /> : '+0%'}
            </h4>
            <p>Satisfacción del cliente</p>
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

export default ComparisonSection
