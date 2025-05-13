import React, { useState } from 'react'
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import './formPage.css'
import logoImage from '../../assets/images/logov3.png'

const FormPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    businessType: '',
    employees: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const businessTypes = [
    'Restaurante',
    'Hotel',
    'Spa',
    'Centro Deportivo',
    'Agencia de Viajes',
    'Otro'
  ]

  const employeesOptions = [
    '1-5 empleados',
    '6-20 empleados',
    '21-50 empleados',
    '51-100 empleados',
    'Más de 100 empleados'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validar nombre
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es obligatorio'
    }

    // Validar apellido
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es obligatorio'
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    // Validar teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio'
    } else if (!/^[0-9+\s()-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido'
    }

    // Validar empresa
    if (!formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa es obligatorio'
    }

    // Validar tipo de negocio
    if (!formData.businessType) {
      newErrors.businessType = 'Selecciona el tipo de negocio'
    }

    // Validar número de empleados
    if (!formData.employees) {
      newErrors.employees = 'Selecciona el número de empleados'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        // URL del webhook
        const webhookUrl =
          'https://hook.eu2.make.com/mwuh5j17qe1i7movo9quu57bhadu56nj'

        // Enviar los datos al webhook
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor')
        }

        // Marcar como enviado correctamente
        setSubmitted(true)

        // Reiniciar el form después de 3 segundos
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            role: '',
            businessType: '',
            employees: '',
            message: ''
          })
          // Comentado: navigate('/')
        }, 3000)
      } catch (error) {
        console.error('Error al enviar el formulario:', error)
        alert(
          'Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.'
        )
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // Scroll al primer campo con error
      const firstError = document.querySelector('.form-error')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  return (
    <div className='form-page'>
      <div className='form-header'>
        <div className='form-logo-container'>
          <Link to='/'>
            <img src={logoImage} alt='toBook Logo' className='form-logo' />
          </Link>
        </div>
        <Link to='/' className='back-button'>
          <ArrowLeft size={20} />
          <span>Volver</span>
        </Link>
      </div>

      <div className='form-container'>
        {!submitted ? (
          <>
            <div className='form-intro'>
              <h1>Solicita una demostración</h1>
              <p>
                Completa el formulario y un especialista se pondrá en contacto
                contigo en menos de 24 horas para programar una demostración
                personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='contact-form'>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='firstName'>Nombre *</label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && (
                    <div className='form-error'>{errors.firstName}</div>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='lastName'>Apellido *</label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && (
                    <div className='form-error'>{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='email'>Email *</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <div className='form-error'>{errors.email}</div>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>Teléfono *</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && (
                    <div className='form-error'>{errors.phone}</div>
                  )}
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='company'>Empresa *</label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className={errors.company ? 'error' : ''}
                  />
                  {errors.company && (
                    <div className='form-error'>{errors.company}</div>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='role'>Cargo</label>
                  <input
                    type='text'
                    id='role'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='businessType'>Tipo de negocio *</label>
                  <select
                    id='businessType'
                    name='businessType'
                    value={formData.businessType}
                    onChange={handleChange}
                    className={errors.businessType ? 'error' : ''}
                  >
                    <option value=''>Seleccionar</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <div className='form-error'>{errors.businessType}</div>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='employees'>Número de empleados *</label>
                  <select
                    id='employees'
                    name='employees'
                    value={formData.employees}
                    onChange={handleChange}
                    className={errors.employees ? 'error' : ''}
                  >
                    <option value=''>Seleccionar</option>
                    {employeesOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.employees && (
                    <div className='form-error'>{errors.employees}</div>
                  )}
                </div>
              </div>

              <div className='form-group full-width'>
                <label htmlFor='message'>Mensaje (opcional)</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                ></textarea>
              </div>

              <div className='privacy-policy'>
                <p>
                  Al enviar este formulario, aceptas nuestra{' '}
                  <a href='/privacy-policy' target='_blank'>
                    Política de Privacidad
                  </a>{' '}
                  y consientes recibir comunicaciones relacionadas con tu
                  solicitud.
                </p>
              </div>

              <button
                type='submit'
                className='submit-button'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='spinner' size={20} />
                    Enviando...
                  </>
                ) : (
                  'Solicitar demostración'
                )}
              </button>
            </form>
          </>
        ) : (
          <div className='success-message'>
            <CheckCircle size={60} color='#4CAF50' />
            <h2>¡Solicitud enviada con éxito!</h2>
            <p>
              Gracias por tu interés en toBook. Nos pondremos en contacto
              contigo lo antes posible para coordinar una demostración
              personalizada.
            </p>
            <Link to='/' className='back-home-button'>
              Volver a la página principal
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default FormPage
