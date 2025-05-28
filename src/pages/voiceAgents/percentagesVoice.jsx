import React, { useRef, useEffect, useState } from 'react'
import './percentagesVoice.css'

const data = [
  {
    value: 68,
    color: 'var(--color-base-primary)', // Puedes ajustar a tu variable lila
    text: 'Reservas salvadas por estar fuera de horario de atención'
  },
  {
    value: 23,
    color: 'var(--color-base-primary)',
    text: 'Reservas recuperadas por inicialmente no haber disponibilidad'
  },
  {
    value: 20,
    color: 'var(--color-base-primary)',
    text: 'Efectividad total de políticas de propuesta en las llamadas'
  }
]

function CounterCircle({ value, color }) {
  const [count, setCount] = useState(0)
  const duration = 1200
  const radius = 52
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    let start = 0
    let startTimestamp = null
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * (value - start) + start))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(value)
      }
    }
    requestAnimationFrame(step)
    // eslint-disable-next-line
  }, [value])

  return (
    <svg width='120' height='120' viewBox='0 0 120 120'>
      <circle
        className='bg'
        cx='60'
        cy='60'
        r={radius}
        stroke='rgba(100, 120, 180, 0.10)'
        strokeWidth='12'
        fill='none'
      />
      <circle
        className='fg'
        cx='60'
        cy='60'
        r={radius}
        stroke={color}
        strokeWidth='12'
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - count / 100)}
        strokeLinecap='round'
        transform='rotate(-90 60 60)'
      />
      <text
        x='50%'
        y='54%'
        textAnchor='middle'
        fontSize='1.6rem'
        fontWeight='700'
        fill='#232323'
        dy='.3em'
      >
        {count}%
      </text>
    </svg>
  )
}

const PercentagesVoice = () => {
  const [animate, setAnimate] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true)
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className='percentages-container' ref={ref}>
      <section className='percentages-section'>
        {data.map((item, idx) => (
          <div className='percentage-block' key={idx}>
            {animate ? (
              <CounterCircle value={item.value} color={item.color} />
            ) : (
              <CounterCircle value={0} color={item.color} />
            )}
            <div className='percentage-label'>{item.text}</div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default PercentagesVoice
