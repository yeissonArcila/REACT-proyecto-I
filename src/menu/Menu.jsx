import React from 'react'
import './menu.css'
import logo from '../assets/Menu-lgotipo-marca.png'
import Perfil from '../assets/Menu-logotipo-perfil.png'

export const Menu = () => {
  return (
    <div>
        <header>
        <nav className='container-menu'>
          <section className='logo-marca logos'>
            <img src={logo} alt="logo-codigo-c13"/>
          </section>

          <section className='menu'>
            <ul>
              <li><a href='#inicio'>Inicio</a></li>
              <li><a href='#noticias'>Noticias</a></li>
              <li><a href='#carreras'>Carreras</a></li>
              <li><a href='#nosotros'>Nosotros</a></li>
              <li><a href='#contacto'>contacto</a></li>

            </ul>

          </section>
        </nav>
      </header>
    </div>
  )
}

export default Menu
