import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import logoImage from '../../assets/images/logov3.png'
import './navBar.css'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showRecursosDropdown, setShowRecursosDropdown] = useState(false)
  const [showMobileRecursosDropdown, setShowMobileRecursosDropdown] =
    useState(false)
  const location = useLocation()

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

  const toggleMobileRecursosDropdown = (e) => {
    e.preventDefault()
    setShowMobileRecursosDropdown(!showMobileRecursosDropdown)
  }

  return (
    <>
      {/* Menú móvil (overlay) */}
      {isOpen && (
        <div className='mobile-menu open'>
          <div className='mobile-menu__header'>
            <Link to='/#hero'>
              <img src={logoImage} alt='toBook Logo' className='navbar__logo' />
            </Link>
            <button onClick={toggleMenu} className='mobile-menu__close'>
              <X size={24} />
            </button>
          </div>

          <div className='mobile-menu__links'>
            <Link
              to='/#whyus'
              className='mobile-menu__link'
              onClick={toggleMenu}
            >
              Por qué toBook <ChevronRight size={16} />
            </Link>
            <Link
              to='/voice-agents#hero-voice'
              className={`mobile-menu__link${
                location.pathname === '/voice-agents' ? ' active' : ''
              }`}
              onClick={toggleMenu}
            >
              Agentes de Voz <ChevronRight size={16} />
            </Link>
            <a href='#' className='mobile-menu__link'>
              Chatbots <ChevronRight size={16} />
            </a>
            <div className='mobile-menu__dropdown'>
              <button
                onClick={toggleMobileRecursosDropdown}
                className='mobile-menu__link mobile-menu__link--dropdown'
              >
                Recursos{' '}
                <ChevronRight
                  size={16}
                  className={showMobileRecursosDropdown ? 'rotate-90' : ''}
                />
              </button>
              {showMobileRecursosDropdown && (
                <div className='mobile-menu__submenu'>
                  <a href='#' className='mobile-menu__submenu-link'>
                    Cómo empezar
                  </a>
                  <a href='#' className='mobile-menu__submenu-link'>
                    FAQs
                  </a>
                </div>
              )}
            </div>
            <a href='#' className='mobile-menu__link'>
              Precios <ChevronRight size={16} />
            </a>
          </div>

          <div className='mobile-menu__actions'>
            <Link
              to='/demo'
              className='mobile-menu__action-btn mobile-menu__action-btn--primary'
              onClick={toggleMenu}
            >
              Solicitar demo
            </Link>
            <button className='mobile-menu__action-btn mobile-menu__action-btn--secondary'>
              Inicia Sesión
            </button>
          </div>
        </div>
      )}

      {/* Barra lateral (estilo Sesame) */}
      <div className='sidebar'>
        <div className='sidebar__logo-container'>
          <Link to='/#hero'>
            <img src={logoImage} alt='toBook Logo' className='sidebar__logo' />
          </Link>
        </div>

        <nav className='sidebar__links'>
          <Link to='/#whyus' className='sidebar__link'>
            Por qué toBook
          </Link>
          <Link
            to='/voice-agents#hero-voice'
            className={`sidebar__link${
              location.pathname === '/voice-agents' ? ' active' : ''
            }`}
          >
            Agentes de Voz
          </Link>
          <a href='#' className='sidebar__link'>
            Chatbots
          </a>
          <div
            className='sidebar__dropdown'
            onMouseEnter={() => setShowRecursosDropdown(true)}
            onMouseLeave={() => setShowRecursosDropdown(false)}
          >
            <a href='#' className='sidebar__link'>
              Recursos
            </a>
            <div
              className={`sidebar__submenu${
                showRecursosDropdown ? ' sidebar__submenu--open' : ''
              }`}
            >
              <a href='#' className='sidebar__submenu-link'>
                Cómo empezar
              </a>
              <a href='#' className='sidebar__submenu-link'>
                FAQs
              </a>
            </div>
          </div>
          <a href='#' className='sidebar__link'>
            Precios
          </a>
        </nav>

        <div className='sidebar__divider'></div>

        <div className='sidebar__actions'>
          <Link to='/demo' className='sidebar__action'>
            Solicitar demo
          </Link>
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
