import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__loho' >Ing. Miguel Ángel</a>

      <ul className='permalinks' >
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Acerca de mí</a></li>
        <li><a href="#about">Experiencia</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>

      </ul>

      <div className='footer__socials' >
        <a href="https://facebook.com">< BsFacebook /></a>
        <a href="https://instagram.com">< BsInstagram /></a>
        <a href="https://twitter.com">< AiFillTwitterCircle /></a>

      </div>

      <div className='footer__copyright' >
        <small>&copy; 2022 / Todos los derechos reservados</small>

      </div>

    </footer>

    )
}

export default Footer