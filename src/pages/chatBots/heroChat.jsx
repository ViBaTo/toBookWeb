import React, { useState, useRef, useEffect } from 'react'
import { Bot, Calendar, User, Hotel } from 'lucide-react'
import './heroChat.css'
import { Link } from 'react-router-dom'
import suite1Image from '../../assets/images/chatBot/suite1.png'
import suite2Image from '../../assets/images/chatBot/suite2.png'
import normalImage from '../../assets/images/chatBot/normal.png'
import facebookIcon from '../../assets/icons/socialMediaIcons/Facebook Icon.svg'
import whatsappIcon from '../../assets/icons/socialMediaIcons/WhatsApp Icon.svg'
import linkedinIcon from '../../assets/icons/socialMediaIcons/icons8-linkedin-96.svg'
import instagramIcon from '../../assets/icons/socialMediaIcons/Instagram Icon (1).svg'

const HeroChat = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const chatBodyRef = useRef(null)

  // Array de mensajes de la conversación
  const messageTiming = [
    {
      time: 0,
      text: '¡Buenas noches! Bienvenido al Hotel Valencia City. ¿En qué puedo ayudarte hoy?',
      role: 'bot'
    },
    {
      time: 6,
      text: 'Hola! Quiero reservar una habitación para 2 personas para este fin de semana',
      role: 'user'
    },
    {
      time: 12,
      text: '¡Perfecto! Tenemos dos tipos de habitaciones disponibles para este fin de semana. Por un lado, nuestras habitaciones Deluxe, y por otro, nuestra exclusiva Suite Premium con sala de estar independiente y vistas panorámicas a la ciudad de Valencia. ¿Te gustaría ver las fotos de ambas opciones?',
      role: 'bot'
    },
    {
      time: 18,
      text: 'Sí, por favor',
      role: 'user'
    },
    {
      time: 24,
      text: 'Aquí tienes nuestras habitaciones Deluxe. Son amplias y luminosas, con una cama king-size y todas las comodidades necesarias para una estancia confortable.',
      role: 'bot',
      image: normalImage
    },
    {
      time: 32,
      text: 'Y esta es nuestra Suite Premium. Incluye una sala de estar independiente y vistas panorámicas a la ciudad de Valencia, perfecta para disfrutar del skyline de la ciudad.',
      role: 'bot',
      image: suite1Image
    },
    {
      time: 40,
      text: 'Aquí puedes ver la sala de estar de la suite',
      role: 'bot',
      image: suite2Image
    },
    {
      time: 48,
      text: 'La habitación normal está muy bien, pero ¿cuál es la diferencia de precio?',
      role: 'user'
    },
    {
      time: 56,
      text: 'La habitación Deluxe tiene un precio de 180€ por noche, mientras que la Suite Premium es de 280€. Ambas incluyen desayuno buffet y acceso a todas nuestras instalaciones. ¿Cuál te gustaría reservar?',
      role: 'bot'
    },
    {
      time: 64,
      text: 'Me gustaría la Deluxe, por favor',
      role: 'user'
    },
    {
      time: 70,
      text: '¡Excelente elección! ¿Para qué días exactamente quieres la reserva?',
      role: 'bot'
    },
    {
      time: 76,
      text: 'Del viernes al domingo',
      role: 'user'
    },
    {
      time: 82,
      text: 'Perfecto. He reservado una habitación Deluxe para 2 personas del viernes al domingo. El precio total es de 360€ (180€ por noche). ¿Quieres que te envíe la confirmación por email?',
      role: 'bot'
    },
    {
      time: 90,
      text: 'Sí, por favor',
      role: 'user'
    },
    {
      time: 96,
      text: '¡Listo! Te he enviado un email con todos los detalles de tu reserva. El check-in es a partir de las 15:00h. ¿Necesitas algo más?',
      role: 'bot'
    },
    {
      time: 104,
      text: 'No, eso es todo. Gracias',
      role: 'user'
    },
    {
      time: 110,
      text: '¡Gracias a ti! Te esperamos el viernes. Recuerda que puedes modificar tu reserva hablando conmingo en cualquier momento. ¡Que tengas un buen día!',
      role: 'bot'
    }
  ]

  // Efecto para avanzar automáticamente los mensajes
  useEffect(() => {
    let timer

    if (isPlaying && currentStep < messageTiming.length - 1) {
      const nextMessage = messageTiming[currentStep + 1]
      const currentMessage = messageTiming[currentStep]
      const timeToNextMessage = (nextMessage.time - currentMessage.time) * 1000 // Convertir a milisegundos

      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, timeToNextMessage)
    } else if (currentStep === messageTiming.length - 1) {
      // Reiniciar después de mostrar todos los mensajes
      timer = setTimeout(() => {
        setCurrentStep(0)
      }, 5000) // Aumentado a 5 segundos antes de reiniciar
    }

    return () => clearTimeout(timer)
  }, [currentStep, isPlaying])

  // Auto-scroll hacia abajo cuando se añaden nuevos mensajes
  useEffect(() => {
    if (chatBodyRef.current && currentStep > 0) {
      const scrollHeight = chatBodyRef.current.scrollHeight
      const height = chatBodyRef.current.clientHeight
      const maxScrollTop = scrollHeight - height

      // Animación suave de scroll
      const startTime = Date.now()
      const startScrollTop = chatBodyRef.current.scrollTop
      const duration = 500

      const animateScroll = () => {
        const currentTime = Date.now()
        const elapsedTime = currentTime - startTime

        if (elapsedTime < duration) {
          const progress = elapsedTime / duration
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)

          chatBodyRef.current.scrollTop =
            startScrollTop + (maxScrollTop - startScrollTop) * easeOutQuart

          requestAnimationFrame(animateScroll)
        } else {
          chatBodyRef.current.scrollTop = maxScrollTop
        }
      }

      requestAnimationFrame(animateScroll)
    }
  }, [currentStep])

  // Controlar la reproducción
  const togglePlayback = () => {
    setIsPlaying((prev) => !prev)
  }

  // Reiniciar la conversación
  const resetConversation = () => {
    setCurrentStep(0)
    setIsPlaying(true)
  }

  // Renderizar mensajes de chat de forma dinámica
  const renderChatMessages = () => {
    const visibleMessages = messageTiming.slice(0, currentStep + 1)

    return visibleMessages.map((message, index) => {
      if (message.role === 'bot') {
        return (
          <div className='hero__chat-message bot' key={index}>
            <div className='hero__avatar'>
              <Bot size={20} />
            </div>
            <div className='hero__message-content'>
              <p>{message.text}</p>
              {message.image && (
                <div className='hero__message-image'>
                  <img src={message.image} alt='Habitación del hotel' />
                </div>
              )}
            </div>
          </div>
        )
      } else {
        return (
          <div className='hero__chat-message user' key={index}>
            <div className='hero__message-content'>
              <p>{message.text}</p>
            </div>
            <div className='hero__avatar user-avatar'>
              <User size={20} />
            </div>
          </div>
        )
      }
    })
  }

  return (
    <div className='hero' id='hero-voice'>
      <div className='hero__container hero__enhanced'>
        <div className='hero__content'>
          <div className='hero__tag'>CHATBOTS INTELIGENTES</div>

          <h1 className='hero__title'>
            tu recepcionista que <br /> nunca descansa
          </h1>

          <p className='hero__description'>
            WhatsApp, Instagram, Facebook, web... tus chatbots están en todas
            partes donde están tus clientes. Respuestas inmediatas, reservas
            automáticas y ventas adicionales mientras tú te ocupas de lo
            importante: hacer crecer tu negocio.
          </p>

          <div className='hero__platform-icons'>
            <img src={whatsappIcon} alt='WhatsApp' />
            <img src={instagramIcon} alt='Instagram' />
            <img src={facebookIcon} alt='Facebook' />
            <img src={linkedinIcon} alt='LinkedIn' />
          </div>

          <div className='hero__cta-container'>
            <Link to='/demo' className='hero__cta-button'>
              PRUEBA 27 DÍAS GRATIS
            </Link>
            <span className='hero__cta-note'>Sin compromiso ni tarjeta</span>
          </div>
        </div>

        <div className='hero__interactive-demo'>
          <div className='hero__chat-container'>
            <div className='hero__chat-header'>
              <div className='hero__chat-restaurant'>
                <Hotel size={18} />
                <span>
                  Hotel <br />
                  Valencia City
                </span>
              </div>
              <div className='hero__chat-controls'>
                <button
                  className='hero__chat-control'
                  onClick={togglePlayback}
                  title={isPlaying ? 'Pausar' : 'Continuar'}
                >
                  <Calendar size={16} />
                  <span>{isPlaying ? 'Pausar' : 'Continuar'}</span>
                </button>
                <button
                  className='hero__chat-control'
                  onClick={resetConversation}
                  title='Reiniciar conversación'
                >
                  <Calendar size={16} />
                  <span>Reiniciar</span>
                </button>
              </div>
            </div>

            <div className='hero__chat-body' ref={chatBodyRef}>
              <div className='hero__chat-messages'>{renderChatMessages()}</div>
            </div>

            <div className='hero__chat-features'>
              <div className='hero__chat-feature'>
                <span>Reconocimiento del cliente</span>
              </div>
              <div className='hero__chat-feature'>
                <span>Gestión de disponibilidad</span>
              </div>
              <div className='hero__chat-feature'>
                <span>Venta incremental</span>
              </div>
            </div>

            <div className='hero__chat-footer'>
              <div className='hero__chat-status'>
                <span>toBook IA</span>
                <span className='hero__chat-status-dot'></span>
                <span>Activo 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroChat
