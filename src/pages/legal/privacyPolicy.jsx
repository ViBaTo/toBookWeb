import React from 'react'
import './privacyPolicy.css'

const PrivacyPolicy = () => (
  <div className='privacy-policy-page'>
    <div className='privacy-policy-container'>
      <h1>Política de Privacidad</h1>
      <p>Última actualización: 1 de junio de 2024</p>
      <h2>1. Introducción</h2>
      <p>
        En toBook, nos comprometemos a proteger la privacidad de nuestros
        usuarios. Esta política explica cómo recopilamos, usamos y protegemos su
        información personal.
      </p>
      <h2>2. Información que recopilamos</h2>
      <ul>
        <li>Datos de contacto (nombre, correo electrónico, teléfono)</li>
        <li>Información de la empresa (nombre, sector, tamaño)</li>
        <li>Datos de uso y navegación en la plataforma</li>
      </ul>
      <h2>3. Uso de la información</h2>
      <ul>
        <li>Proveer y mejorar nuestros servicios</li>
        <li>Contactar con fines comerciales o de soporte</li>
        <li>Cumplir obligaciones legales</li>
      </ul>
      <h2>4. Compartir información</h2>
      <p>
        No compartimos su información personal con terceros, salvo cuando sea
        necesario para prestar el servicio o por requerimiento legal.
      </p>
      <h2>5. Seguridad</h2>
      <p>
        Implementamos medidas de seguridad para proteger sus datos contra
        accesos no autorizados.
      </p>
      <h2>6. Derechos del usuario</h2>
      <p>
        Puede acceder, rectificar o eliminar sus datos personales contactándonos
        a <a href='mailto:info@tobook.ai'>info@tobook.ai</a>.
      </p>
      <h2>7. Cambios en la política</h2>
      <p>
        Nos reservamos el derecho de modificar esta política. Notificaremos
        cualquier cambio relevante en la plataforma.
      </p>
      <h2>8. Contacto</h2>
      <p>
        Si tiene preguntas sobre esta política, puede escribirnos a{' '}
        <a href='mailto:info@tobook.ai'>info@tobook.ai</a>.
      </p>
    </div>
  </div>
)

export default PrivacyPolicy
