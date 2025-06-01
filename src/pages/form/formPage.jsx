import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './formPage.css'
import logoImage from '../../assets/images/logov3.png'

const FormPage = () => {
  const location = useLocation()
  const selectedPackage = location.state?.selectedPackage

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    businessType: '',
    size: '',
    message: '',
    package: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const businessTypes = ['Restaurante', 'Hotel']

  const hotelSizeOptions = [
    'Pequeño (hasta 150 hab.)',
    'Mediano (150-300 hab.)',
    'Grande (+300 hab.)'
  ]
  const restaurantSizeOptions = [
    'Pequeño (menos de 20 comensales)',
    'Mediano (entre 20 y 50 comensales)',
    'Grande (más de 50 comensales)'
  ]

  const allPackageOptions = [
    // Restaurante
    {
      label: 'Restaurante Básico',
      value: 'Restaurante Básico',
      business: 'Restaurante'
    },
    {
      label: 'Restaurante Premium',
      value: 'Restaurante Premium',
      business: 'Restaurante'
    },
    {
      label: 'Solución Completa Restaurante',
      value: 'Solución Completa Restaurante',
      business: 'Restaurante'
    },
    // Hotel Boutique
    {
      label: 'Asistente Digital Boutique',
      value: 'Asistente Digital Boutique',
      business: 'Hotel',
      size: 'Pequeño (hasta 150 hab.)'
    },
    {
      label: 'Recepcionista Inteligente Boutique',
      value: 'Recepcionista Inteligente Boutique',
      business: 'Hotel',
      size: 'Pequeño (hasta 150 hab.)'
    },
    {
      label: 'Solución Completa Boutique',
      value: 'Solución Completa Boutique',
      business: 'Hotel',
      size: 'Pequeño (hasta 150 hab.)'
    },
    // Hotel Estándar
    {
      label: 'Asistente Digital Estándar',
      value: 'Asistente Digital Estándar',
      business: 'Hotel',
      size: 'Mediano (150-300 hab.)'
    },
    {
      label: 'Recepcionista Inteligente Estándar',
      value: 'Recepcionista Inteligente Estándar',
      business: 'Hotel',
      size: 'Mediano (150-300 hab.)'
    },
    {
      label: 'Solución Completa Estándar',
      value: 'Solución Completa Estándar',
      business: 'Hotel',
      size: 'Mediano (150-300 hab.)'
    },
    // Hotel Premium
    {
      label: 'Asistente Digital Premium',
      value: 'Asistente Digital Premium',
      business: 'Hotel',
      size: 'Grande (+300 hab.)'
    },
    {
      label: 'Recepcionista Inteligente Premium',
      value: 'Recepcionista Inteligente Premium',
      business: 'Hotel',
      size: 'Grande (+300 hab.)'
    },
    {
      label: 'Solución Completa Premium',
      value: 'Solución Completa Premium',
      business: 'Hotel',
      size: 'Grande (+300 hab.)'
    }
  ]

  useEffect(() => {
    if (selectedPackage) {
      // Buscar el paquete en allPackageOptions
      const pkg = allPackageOptions.find((p) => p.value === selectedPackage)
      if (pkg) {
        setFormData((prev) => ({
          ...prev,
          package: pkg.value,
          businessType: pkg.business,
          size: pkg.size || ''
        }))
      }
    }
    // eslint-disable-next-line
  }, [selectedPackage])

  const handleChange = (e) => {
    const { name, value } = e.target
    let updatedFormData = {
      ...formData,
      [name]: value
    }
    if (name === 'package') {
      if (value.includes('Restaurante')) {
        updatedFormData.businessType = 'Restaurante'
      } else if (
        value.includes('Hotel') ||
        value.includes('Boutique') ||
        value.includes('Estándar') ||
        value.includes('Premium')
      ) {
        updatedFormData.businessType = 'Hotel'
      } else {
        updatedFormData.businessType = ''
      }
    }
    setFormData(updatedFormData)

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

    // Validar tamaño
    if (!formData.size) {
      newErrors.size = 'Selecciona el tamaño de tu negocio'
    }

    // Validar paquete
    if (!formData.package) {
      newErrors.package = 'Selecciona el paquete que te interesa'
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
          'https://hook.eu2.make.com/qdjj4i64my415ont25kxl2fsmfr5obwe'

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
            size: '',
            message: '',
            package: ''
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

  // Filtrar paquetes según selección
  const sizeOptions =
    formData.businessType === 'Hotel' ? hotelSizeOptions : restaurantSizeOptions
  const filteredPackageOptions =
    formData.businessType === 'Restaurante'
      ? allPackageOptions.filter((opt) => opt.business === 'Restaurante')
      : allPackageOptions.filter(
          (opt) => opt.business === 'Hotel' && opt.size === formData.size
        )

  return (
    <div className='form-page form-page-centered'>
      <div className='form-container'>
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
                    required
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
                  <label htmlFor='size'>Tamaño *</label>
                  <select
                    id='size'
                    name='size'
                    value={formData.size}
                    onChange={handleChange}
                    className={errors.size ? 'error' : ''}
                    required
                    disabled={!formData.businessType}
                  >
                    <option value=''>Seleccionar</option>
                    {sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.size && (
                    <div className='form-error'>{errors.size}</div>
                  )}
                </div>
              </div>

              <div className='form-group full-width'>
                <label htmlFor='package'>Paquete de interés *</label>
                <select
                  id='package'
                  name='package'
                  value={formData.package}
                  onChange={handleChange}
                  className={errors.package ? 'error' : ''}
                  required
                  disabled={!formData.businessType || !formData.size}
                >
                  <option value=''>Seleccionar</option>
                  {filteredPackageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.package && (
                  <div className='form-error'>{errors.package}</div>
                )}
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
