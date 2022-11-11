import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola yo soy</h5>
        <h1>Miguel Ángel Hernández Velasco</h1>
        <h5 className='text-light' >Ingeniero en Sistemas</h5>
        <h5 className='text-light' >Master en Diseño Gráfico y Digital</h5>
        <h5 className='text-light' >Desarrolador Web Full Stack</h5>
        <CTA />

        <div className='me'>
          <img src= {ME} alt='me' />
        </div>



      </div>
    </header>
  )
}

export default Header