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
          <Link to='/' className='footer__nav-link'>
            Home
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
            href='https://twitter.com'
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
              <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
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
        </div>

        <div className='footer__bottom'>
          <div className='footer__copyright'>
            Copyright © {new Date().getFullYear()} toBook. All rights reserved.
          </div>
          <div className='footer__legal-links'>
            <Link to='#privacy' className='footer__legal-link'>
              Privacy
            </Link>
            <Link to='#terms' className='footer__legal-link'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
