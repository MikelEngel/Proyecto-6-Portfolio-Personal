import React from 'react'
import './Contact.css'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact' >
    <h5>Ponerse en contacto</h5>
    <h2>Contáctame</h2>

    <div className='container contact__container' >
      <div className='contact__options' >
        <article className='contact__option' >
          < MdOutlineAlternateEmail className='contact__option-icon' />
          <h4>Correo electrónico</h4>
          <h5>angelhevel@gmail.com</h5>
          <a href="mailto:angelhevel@gmail.com" target='_blank' >Enviar mensaje</a>
        </article>

        <article className='contact__option' >
          < BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+52 5513453205</h5>
          <a href="https://api.whatsapp.com/send?phone=525513453205" target='_blank' >Enviar mensaje</a>
        </article>

        <article className='contact__option' >
          < BsGithub className='contact__option-icon' />
          <h4>Github</h4>
          <h5>MikelEngel</h5>
          <a href="https://github.com/MikelEngel" target='_blank' >Visitar</a>
        </article>


      </div>

      {/* FIN DE LAS OPCIONES DE CONTACTO */}
        <form action="">
          <input type="text" name='name' placeholder='Nombre completo' required />
          <input type="email" name="email" placeholder='Correo eléctronico' required />
          <textarea name="message" rows="10" placeholder='Escribe tu mensaje' required ></textarea>
          <button type='submit' className='btn btn-primary' >Envíar mensaje</button>

        </form>

    </div>
    </section>
  )
}

export default Contact