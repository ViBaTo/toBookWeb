import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import logoImage from '../../assets/images/logov3.png'
import './navBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  return (
    <>
      {/* Menú móvil (overlay) */}
      {isOpen && (
        <div className='mobile-menu open'>
          <div className='mobile-menu__header'>
            <img src={logoImage} alt='toBook Logo' className='navbar__logo' />
            <button onClick={toggleMenu} className='mobile-menu__close'>
              <X size={24} />
            </button>
          </div>

          <div className='mobile-menu__links'>
            <a href='#' className='mobile-menu__link'>
              Industrias <ChevronRight size={16} />
            </a>
            <a href='#' className='mobile-menu__link'>
              Integraciones <ChevronRight size={16} />
            </a>
            <a href='#' className='mobile-menu__link'>
              Tecnología <ChevronRight size={16} />
            </a>
            <a href='#' className='mobile-menu__link'>
              Producto <ChevronRight size={16} />
            </a>
          </div>

          <div className='mobile-menu__actions'>
            <button className='mobile-menu__action-btn mobile-menu__action-btn--primary'>
              Solicitar demo
            </button>
            <button className='mobile-menu__action-btn mobile-menu__action-btn--secondary'>
              Inicia Sesión
            </button>
          </div>
        </div>
      )}

      {/* Barra lateral (estilo Sesame) */}
      <div className='sidebar'>
        <div className='sidebar__logo-container'>
          <img src={logoImage} alt='toBook Logo' className='sidebar__logo' />
        </div>

        <nav className='sidebar__links'>
          <a href='#' className='sidebar__link'>
            Industrias
          </a>
          <a href='#' className='sidebar__link'>
            Integraciones
          </a>
          <a href='#' className='sidebar__link'>
            Tecnología
          </a>
          <a href='#' className='sidebar__link'>
            Producto
          </a>
        </nav>

        <div className='sidebar__divider'></div>

        <div className='sidebar__actions'>
          <a href='#' className='sidebar__action'>
            Solicitar demo
          </a>
          <a href='#' className='sidebar__action'>
            Inicia Sesión
          </a>
        </div>
      </div>

      {/* Botón de menú móvil */}
      <button
        onClick={toggleMenu}
        className={`mobile-toggle ${scrolled ? 'mobile-toggle--scrolled' : ''}`}
      >
        <Menu size={24} />
      </button>
    </>
  )
}

export default NavBar
