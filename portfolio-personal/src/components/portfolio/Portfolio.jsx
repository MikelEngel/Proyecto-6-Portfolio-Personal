import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proyecto1.jpg'
import IMG2 from '../../assets/proyecto2.jpg'
import IMG3 from '../../assets/proyecto3.jpg'
import IMG4 from '../../assets/proyecto4.jpg'
import IMG6 from '../../assets/wordpress1.jpg'
import IMG7 from '../../assets/wordpress2.jpg'

const portfolio = () => {
  return (
    <section id='portfolio' >
    <h5>Mis proyectos</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__continer' >
      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG1} alt="" />

        </div>
        <h3>LANDING PAGE</h3>
        <a href="https://github.com/MikelEngel/Proyecto-1-Landing-Aokingtarps" className='btn' target='_blank'>Github</a>
        <a href="https://mikelengel.github.io/Proyecto-1-Landing-Aokingtarps/" className='btn' target='_blank'>Ver proyecto</a>

      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG2} alt="" />

        </div>
        <h3>CRUD App</h3>
        <a href="https://github.com/MikelEngel/Proyecto-2-CRUD-App" className='btn' target='_blank'>Github</a>
        <a href="https://mikelengel.github.io/Proyecto-2-CRUD-App/" className='btn' target='_blank'>Ver proyecto</a>

      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG3} alt="" />

        </div>
        <h3>Dashboard App</h3>
        <a href="https://github.com/MikelEngel/Proyecto-3-Dashboard-App" className='btn' target='_blank'>Github</a>
        <a href="https://mikelengel.github.io/Proyecto-3-Dashboard-App/" className='btn' target='_blank'>Ver proyecto</a>

      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG4} alt="" />

        </div>
        <h3>Restaurante App</h3>
        <a href="https://github.com/MikelEngel/Proyecto-4-Restaurante-App" className='btn' target='_blank'>Github</a>
        <a href="https://classy-crisp-45d514.netlify.app/" className='btn' target='_blank'>Ver proyecto</a>

      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG6} alt="" />

        </div>
        <h3>Mochilas Wilys página en producción</h3>
        <a href="https://wilys.com.mx/" className='btn' target='_blank'>Ver página</a>

      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG7} alt="" />

        </div>
        <h3>Aokingtarps</h3>
        <a href="https://aokingtarps.com/" className='btn' target='_blank'>Ver proyecto</a>

      </article>




    </div>

    </section>
  )
}

export default portfolio