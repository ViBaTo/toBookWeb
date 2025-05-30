import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logoImage from '../../assets/images/logov3.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        {/* Resto del contenido igual que arriba */}
        <div className='footer__logo-section'>
          <img src={logoImage} alt='toBook' className='footer__logo' />
        </div>

        <div className='footer__nav'>
          <Link to='/#hero' className='footer__nav-link'>
            Inicio
          </Link>
          <Link to='#features' className='footer__nav-link'>
            Características
          </Link>
          <Link to='/demo' className='footer__nav-link'>
            Demo
          </Link>
          <Link to='#contact' className='footer__nav-link'>
            Contacto
          </Link>
        </div>

        <div className='footer__social-section'>
          <a
            href='https://x.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__social-link'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polygon points='20.18,2.88 4.51,22 3,22 18.67,2.88' />
              <path d='M15.83,22L4.15,2.88h4.81L21,22H15.83z' />
            </svg>
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__social-link'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__social-link'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
              <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
            </svg>
          </a>
          <a
            href='https://tiktok.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__social-link'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='27'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M19.68,2H4.32C3.04,2,2,3.04,2,4.32v15.36C2,20.96,3.04,22,4.32,22h15.36c1.28,0,2.32-1.04,2.32-2.32V4.32C22,3.04,20.96,2,19.68,2z M17.76,10.72c-0.11,0.01-0.22,0.02-0.33,0.02c-1.25,0-2.35-0.64-2.99-1.6c0,2.53,0,5.41,0,5.46c0,2.23-1.81,4.04-4.04,4.04s-4.04-1.81-4.04-4.04s1.81-4.04,4.04-4.04c0.08,0,0.17,0.01,0.25,0.01v1.99c-0.08-0.01-0.16-0.03-0.25-0.03c-1.14,0-2.06,0.92-2.06,2.06s0.92,2.06,2.06,2.06s2.15-0.9,2.15-2.04c0-0.05,0.02-9.3,0.02-9.3h1.91c0.18,1.7,1.56,3.05,3.29,3.17V10.72z' />
            </svg>
          </a>
        </div>

        <div className='footer__bottom'>
          <div className='footer__copyright'>
            © {new Date().getFullYear()} toBook. Todos los derechos reservados.
          </div>
          <div className='footer__legal-links'>
            <Link to='#privacy' className='footer__legal-link'>
              Privacidad
            </Link>
            <Link to='#terms' className='footer__legal-link'>
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
