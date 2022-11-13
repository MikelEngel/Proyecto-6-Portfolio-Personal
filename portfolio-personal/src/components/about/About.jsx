import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import { BiPen } from 'react-icons/bi'
import { DiWordpress } from 'react-icons/di'
import { BsCodeSlash } from 'react-icons/bs'



const About = () => {
  return (
    <section id='about' >

    <h5>Acerca de mi</h5>
    <h2>Experiencia</h2>

    <div className='container about__container' >
      <div className='about__me'>
        <div className='about__me-image' >
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards' >


          <article className='about__card' >

            <BiPen className='about__icon' /> 

            <h5>Diseño</h5>
            <small>5 años en Diseño Gráfico y Digital</small>
            

          </article>


        <article className='about__card' >

            <DiWordpress className='about__icon' /> 

            <h5>CMS Wordpress</h5>
            <small>3 años</small>
            

          </article>


          <article className='about__card' >

            <BsCodeSlash className='about__icon' /> 

            <h5>Full Stack Web</h5>
            <small>Comenzando</small>

          </article>
          
        </div>

        <div>

        <p>
          Estoy diseñando las dos Website de mi empresa actual, estas estás estan enfocadas en el ecosistema E-Commerce en Wordpress con pesonalizaciones con HTML y CSS, mi objetivo a corto plazo es actualizar estas páginas con las actuales tecnologías adquiridas como <b>Desarrollador Web Full Stack</b>, hago uso del diseño digital para todos los gráficos, fotografías, vídeos, fotografia de producto, animaciones que sean rerqueridas para las Website, así también todo el diseño gráfico como publicidad digital e impresa, diseño corporativo, diseño editorial, sghippin mark, packaging entre otros. El combinar todas las tecnologías me han permitido mejores resultados.
          </p>

          <a href="#contact" className='btn btn-primary' >Platiquemos</a>

        </div>

      </div>
      
      </div>  
      
    </section>
  )
}

export default About