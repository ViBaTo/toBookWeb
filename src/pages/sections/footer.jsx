import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__grid'>
          <div className='footer__brand'>
            <img
              src='/src/assets/images/logov3.png'
              alt='toBook Logo'
              className='footer__logo'
            />
            <p className='footer__tagline'>
              Revolucionando las reservas con inteligencia artificial de voz
            </p>
          </div>

          <div className='footer__links'>
            <div className='footer__column'>
              <h3 className='footer__title'>Producto</h3>
              <ul className='footer__list'>
                <li>
                  <Link to='/demo'>Demo Gratuita</Link>
                </li>
                <li>
                  <a href='#features'>Características</a>
                </li>
                <li>
                  <a href='#comparison'>Comparativa</a>
                </li>
              </ul>
            </div>

            <div className='footer__column'>
              <h3 className='footer__title'>Empresa</h3>
              <ul className='footer__list'>
                <li>
                  <a href='#about'>Sobre Nosotros</a>
                </li>
                <li>
                  <a href='#contact'>Contacto</a>
                </li>
                <li>
                  <a href='#privacy'>Privacidad</a>
                </li>
              </ul>
            </div>

            <div className='footer__column'>
              <h3 className='footer__title'>Legal</h3>
              <ul className='footer__list'>
                <li>
                  <a href='#terms'>Términos de Uso</a>
                </li>
                <li>
                  <a href='#cookies'>Política de Cookies</a>
                </li>
                <li>
                  <a href='#gdpr'>GDPR</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <div className='footer__copyright'>
            © {new Date().getFullYear()} toBook. Todos los derechos reservados.
          </div>
          <div className='footer__social'>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__social-link'
            >
              LinkedIn
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__social-link'
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
