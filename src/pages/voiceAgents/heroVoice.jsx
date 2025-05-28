import React, { useState, useEffect, useRef, useMemo } from 'react'
import {
  Bot,
  Calendar,
  ThumbsUp,
  Clock,
  User,
  Utensils,
  Wine,
  Gift,
  Volume2,
  VolumeX
} from 'lucide-react'
import './heroVoice.css'
import { Link } from 'react-router-dom'

// Definir las constantes fuera del componente
const FULL_CONVERSATION_AUDIO =
  'https://res.cloudinary.com/defj36ojy/video/upload/v1746801221/conversation_xpwizp.m4a'

const HeroVoice = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [audioDuration, setAudioDuration] = useState(0)
  const chatBodyRef = useRef(null)
  const audioRef = useRef(null)
  const audioInitialized = useRef(false)

  // Usar useMemo para el array de tiempos para evitar recreaciones en cada renderizado
  const messageTiming = useMemo(
    () => [
      {
        time: 0,
        text: '¡Buenas noches, Javier! Un placer volver a atenderte. ¿En qué puedo ayudarte esta noche?',
        role: 'bot'
      },
      {
        time: 4,
        text: 'Hola! Necesito reservar para mañana',
        role: 'user'
      },
      {
        time: 6,
        text: '¡Perfecto! ¿Para cuántas personas sería la reserva y a qué hora te gustaría? ¿A las 21:30h, 4 personas como la última vez?',
        role: 'bot'
      },
      {
        time: 12,
        text: 'Sí, esta vez somos 6 personas. ¿Tenéis disponibilidad para las 21:30h?',
        role: 'user'
      },
      {
        time: 15,
        text: 'A las 21:30h tenemos completamente lleno, pero puedo ofrecerte mesa para 6 personas a las 21:00h o a las 22:00h. ¿Cuál prefieres?',
        role: 'bot'
      },
      {
        time: 21,
        text: 'Las 22:00h está bien. ¿Hay alguna posibilidad de sentarnos en terraza?',
        role: 'user'
      },
      {
        time: 24,
        text: '¡Por supuesto! He reservado mesa en terraza para 6 personas mañana a las 22:00h. ¿Celebráis alguna ocasión especial? Podemos preparar algo especial si es así.',
        role: 'bot'
      },
      {
        time: 31,
        text: 'De hecho, es el cumpleaños de mi pareja. ¿Podéis preparar algo sorpresa al final de la cena?',
        role: 'user'
      },
      {
        time: 35,
        text: '¡Fantástico! He añadido una nota para preparar un postre especial con vela para celebrar el cumpleaños. Te recomendaría nuestro nuevo vino espumoso Blanc de Blancs para brindar, ¿quieres que reserve una botella para la ocasión?',
        role: 'bot'
      },
      {
        time: 43,
        text: 'Genial, gracias',
        role: 'user'
      },
      {
        time: 46,
        text: 'Perfecto. Entonces queda reservada una mesa para 6 personas, en la terraza mañana a las 22:00h con un postre sorpresa para el cumpleaños de tu pareja. Que tengáis una velada maravillosa. Hasta mañana',
        role: 'bot'
      },
      {
        time: 55,
        text: 'Hasta mañana',
        role: 'user'
      }
    ],
    []
  )

  // Función para escalar los tiempos basado en la duración total del audio
  const getScaledTimings = (totalDuration) => {
    // Si no tenemos duración, usar los tiempos originales
    if (!totalDuration) return messageTiming

    // Último tiempo definido en messageTiming
    const lastDefinedTime = messageTiming[messageTiming.length - 1].time

    // Factor de escala
    const scaleFactor = totalDuration / lastDefinedTime

    // Ajustar todos los tiempos según el factor de escala
    return messageTiming.map((msg) => ({
      ...msg,
      scaledTime: msg.time * scaleFactor
    }))
  }

  // Obtener tiempos escalados usando useMemo
  const scaledTimings = useMemo(
    () => getScaledTimings(audioDuration),
    [audioDuration, messageTiming]
  )

  // Función para calcular el tiempo de espera basado en la longitud del texto
  const calculateWaitTime = (text) => {
    // Tiempo base de 2 segundos más 0.1 segundos por cada 10 caracteres
    return 2000 + (text.length / 10) * 100
  }

  // Inicializar el audio y configurar los event listeners
  useEffect(() => {
    console.log('Inicializando audio...')

    // Crear elemento de audio
    audioRef.current = new Audio(FULL_CONVERSATION_AUDIO)

    // Guardar la duración una vez que el audio esté cargado
    const loadedMetadataListener = () => {
      console.log(
        'Audio metadata cargada, duración:',
        audioRef.current.duration
      )
      setAudioDuration(audioRef.current.duration)
      audioInitialized.current = true
    }

    audioRef.current.addEventListener('loadedmetadata', loadedMetadataListener)

    // Función para sincronizar mensajes con el tiempo de audio
    const syncMessagesWithAudio = () => {
      if (!audioRef.current || isMuted) return

      const currentTime = audioRef.current.currentTime
      console.log('Tiempo actual:', currentTime)

      // Encontrar qué mensaje debería mostrarse basado en el tiempo actual
      for (let i = scaledTimings.length - 1; i >= 0; i--) {
        if (
          currentTime >= (scaledTimings[i].scaledTime || scaledTimings[i].time)
        ) {
          if (currentStep !== i) {
            console.log(`Cambiando al paso ${i} en tiempo ${currentTime}`)
            setCurrentStep(i)
          }
          break
        }
      }
    }

    // Configurar event listener para actualizar estado basado en el tiempo
    const timeUpdateListener = () => {
      syncMessagesWithAudio()
    }

    // Manejar el final del audio
    const endedListener = () => {
      console.log('Audio terminado')
      // Reiniciar conversación cuando termina el audio
      setTimeout(() => {
        setCurrentStep(0)
        if (isPlaying && !isMuted) {
          audioRef.current.currentTime = 0
          audioRef.current.play().catch((err) => {
            console.error('Error al reiniciar audio:', err)
          })
        }
      }, 3000)
    }

    // Añadir event listeners
    audioRef.current.addEventListener('timeupdate', timeUpdateListener)
    audioRef.current.addEventListener('ended', endedListener)

    // Intentar reproducir el audio automáticamente si no está silenciado
    if (!isMuted) {
      const playAudio = async () => {
        try {
          console.log('Intentando reproducir audio')
          await audioRef.current.play()
          console.log('Audio reproduciendo')
        } catch (error) {
          console.error('Error reproduciendo audio automáticamente:', error)
        }
      }

      playAudio()
    }

    // Limpieza al desmontar
    return () => {
      console.log('Limpiando audio')
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          'loadedmetadata',
          loadedMetadataListener
        )
        audioRef.current.removeEventListener('timeupdate', timeUpdateListener)
        audioRef.current.removeEventListener('ended', endedListener)
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [isMuted, isPlaying, scaledTimings])

  // Efecto para avanzar automáticamente si el audio está silenciado
  useEffect(() => {
    let timer

    // Solo avanzar automáticamente si está silenciado o si el audio aún no está inicializado
    if (isPlaying && (isMuted || !audioInitialized.current)) {
      console.log(
        'Modo silencioso o audio no inicializado, avanzando automáticamente'
      )

      const getTimeForNextStep = () => {
        if (currentStep >= messageTiming.length - 1) {
          return 3000 // Tiempo antes de reiniciar
        }

        // Si tenemos tiempos escalados y no estamos en modo silencioso, usar esos
        if (scaledTimings.length > 0 && !isMuted && audioInitialized.current) {
          const currentTime =
            scaledTimings[currentStep].scaledTime ||
            scaledTimings[currentStep].time
          const nextTime =
            scaledTimings[currentStep + 1].scaledTime ||
            scaledTimings[currentStep + 1].time
          return (nextTime - currentTime) * 1000 // Convertir a milisegundos
        }

        // De lo contrario, calcular basado en la longitud del texto
        return calculateWaitTime(messageTiming[currentStep].text)
      }

      timer = setTimeout(() => {
        if (currentStep < messageTiming.length - 1) {
          setCurrentStep((prev) => prev + 1)
        } else {
          // Reiniciar después de mostrar todos los mensajes
          setTimeout(() => {
            setCurrentStep(0)
          }, 3000)
        }
      }, getTimeForNextStep())
    }

    return () => {
      clearTimeout(timer)
    }
  }, [
    currentStep,
    isPlaying,
    isMuted,
    messageTiming,
    scaledTimings,
    audioInitialized
  ])

  // Auto-scroll hacia abajo cuando se añaden nuevos mensajes
  useEffect(() => {
    if (chatBodyRef.current && currentStep > 0) {
      const scrollHeight = chatBodyRef.current.scrollHeight
      const height = chatBodyRef.current.clientHeight
      const maxScrollTop = scrollHeight - height

      // Animación suave de scroll
      const startTime = Date.now()
      const startScrollTop = chatBodyRef.current.scrollTop
      // La duración del scroll será proporcional a la longitud del texto
      const duration = 500 // Fijo a medio segundo para una experiencia más consistente

      const animateScroll = () => {
        const currentTime = Date.now()
        const elapsedTime = currentTime - startTime

        if (elapsedTime < duration) {
          const progress = elapsedTime / duration
          // Usar una curva de ease-out más suave
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
    console.log('Alternando reproducción')
    setIsPlaying((prev) => !prev)

    if (isPlaying) {
      // Pausar el audio
      if (audioRef.current && !isMuted) {
        audioRef.current.pause()
      }
    } else {
      // Reanudar el audio
      if (audioRef.current && !isMuted) {
        audioRef.current.play().catch((err) => {
          console.error('Error al reanudar audio:', err)
        })
      }
    }
  }

  // Alternar el sonido
  const toggleMute = () => {
    console.log('Alternando sonido')
    const newMutedState = !isMuted
    setIsMuted(newMutedState)

    if (newMutedState) {
      // Silenciar
      if (audioRef.current) {
        audioRef.current.pause()
      }
    } else {
      // Activar audio y reproducir si estamos en modo play
      if (audioRef.current && isPlaying) {
        // Establecer el tiempo correcto según el paso actual
        const currentTime =
          scaledTimings[currentStep].scaledTime ||
          scaledTimings[currentStep].time
        audioRef.current.currentTime = currentTime
        audioRef.current.play().catch((err) => {
          console.error('Error al activar audio:', err)
        })
      }
    }
  }

  // Reiniciar la conversación
  const resetConversation = () => {
    console.log('Reiniciando conversación')
    setCurrentStep(0)
    setIsPlaying(true)

    // Reiniciar y reproducir el audio si no está silenciado
    if (audioRef.current && !isMuted) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((err) => {
        console.error('Error al reiniciar audio:', err)
      })
    }
  }

  // Detectar si se está reproduciendo audio actualmente
  const isAudioPlaying =
    isPlaying && !isMuted && audioRef.current && !audioRef.current.paused

  // Determinar qué mensaje está "hablando" (solo mensajes del bot)
  const isSpeaking = (index) => {
    if (!isAudioPlaying) return false
    if (index !== currentStep) return false

    // Solo los mensajes de bot "hablan"
    return messageTiming[index].role === 'bot'
  }

  // Logs de depuración
  console.log('Estado actual:', {
    currentStep,
    isPlaying,
    isMuted,
    isAudioPlaying,
    audioDuration
  })

  // Renderizar mensajes de chat de forma dinámica
  const renderChatMessages = () => {
    // Solo mostrar hasta el mensaje actual
    const visibleMessages = messageTiming.slice(0, currentStep + 1)

    return visibleMessages.map((message, index) => {
      if (message.role === 'bot') {
        return (
          <div className='hero__chat-message bot' key={index}>
            <div
              className={`hero__avatar ${isSpeaking(index) ? 'speaking' : ''}`}
            >
              <Bot size={20} />
            </div>
            <div className='hero__message-content'>
              <p>{message.text}</p>
              {index === 8 && (
                <div className='hero__message-actions'>
                  <button className='hero__message-action'>
                    <Wine size={16} />
                    <span>Reservar vino</span>
                  </button>
                  <button className='hero__message-action'>
                    <Gift size={16} />
                    <span>Ver más opciones</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      } else {
        // message.role === 'user'
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
          <div className='hero__tag'>INTELIGENCIA ARTIFICIAL DE VOZ</div>

          <h1 className='hero__title'>
            Revolucionando <br /> las reservas
          </h1>

          <p className='hero__description'>
            Tus agentes de voz atienden reservas con amabilidad a toda hora,
            transformando llamadas perdidas en oportunidades y consultas
            nocturnas en reservas confirmadas. Es como tener un equipo
            incansable trabajando mientras descansas.
          </p>

          <div className='hero__cta-container'>
            <Link to='/demo' className='hero__cta-button'>
              PRUEBA 27 DÍAS GRATIS
            </Link>
            <span className='hero__cta-note'>Sin compromiso ni tarjeta</span>
          </div>
        </div>

        <div className='hero__interactive-demo'>
          <div className='hero__chat-container'>
            <div
              className={`hero__chat-header ${
                !isMuted ? 'audio-available' : ''
              }`}
            >
              <div className='hero__chat-restaurant'>
                <Utensils size={18} />
                <span>
                  Restaurante <br />
                  El Olivar
                </span>
              </div>
              <div className='hero__chat-controls'>
                <button
                  className={`hero__chat-control ${!isMuted ? 'active' : ''}`}
                  onClick={toggleMute}
                  title={isMuted ? 'Activar audio' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  <span>{isMuted ? 'Activar audio' : 'Silenciar'}</span>
                </button>
                <button
                  className='hero__chat-control'
                  onClick={togglePlayback}
                  title={isPlaying ? 'Pausar' : 'Continuar'}
                >
                  {isPlaying ? <Clock size={16} /> : <ThumbsUp size={16} />}
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
              {isAudioPlaying && (
                <div className='hero__chat-voice-indicator'>
                  <div className='voice-wave active'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroVoice
