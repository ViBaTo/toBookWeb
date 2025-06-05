import React, { useState } from 'react'

const faqs = [
  {
    question: '¿Qué es toBook y cómo funciona?',
    answer:
      'toBook es una plataforma de automatización para reservas y atención al cliente en hoteles y restaurantes. Utiliza agentes de voz y chatbots IA para responder consultas y gestionar reservas 24/7.'
  },
  {
    question: '¿Necesito conocimientos técnicos para usar toBook?',
    answer:
      'No. Nuestro equipo te guía en la configuración y puedes empezar a usar toBook en minutos, sin complicaciones técnicas.'
  },
  {
    question: '¿Puedo probar toBook antes de contratar?',
    answer:
      'Sí, ofrecemos una demo gratuita y un periodo de prueba sin compromiso para que puedas comprobar el valor de la plataforma.'
  },
  {
    question: '¿Qué canales puedo automatizar?',
    answer:
      'Puedes automatizar llamadas telefónicas, WhatsApp, Instagram, Facebook Messenger y más, todo desde una sola plataforma.'
  },
  {
    question: '¿Qué soporte ofrecen?',
    answer:
      'Contamos con soporte personalizado y acompañamiento continuo para asegurar el éxito de tu negocio con toBook.'
  }
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button className='faq-question' onClick={onClick}>
        {question}
        <span className='faq-toggle'>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className='faq-answer'>{answer}</div>}
    </div>
  )
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className='faqs-section'>
      <div className='faqs-container'>
        <h2 className='faqs-title'>Preguntas Frecuentes</h2>
        <div className='faqs-list'>
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => handleClick(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
