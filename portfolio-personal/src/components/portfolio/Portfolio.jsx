import React from 'react'
import './portfolio.css'
import proyecto1 from '../../assets/proyecto1.jpg'
import proyecto2 from '../../assets/proyecto2.jpg'
import proyecto3 from '../../assets/proyecto3.jpg'
import proyecto4 from '../../assets/proyecto4.jpg'
import wordpress1 from '../../assets/wordpress1.jpg'
import wordpress2 from '../../assets/wordpress2.jpg'

const portfolio = () => {
  return (
    <section id='portfolio' >
    <h5>Mis proyectos</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container' >
      {
        data.map(({id, image, title,github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta' >
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>VER</a>
              </div>
            </article>
          )
        })
      }
      </div>
      </section>
  )
    }


    const data = [
      {
        id: 1,
        image: proyecto1,
        title: 'LANDING PAGE',
        github: 'https://github.com/MikelEngel/Proyecto-1-Landing-Aokingtarps',
        demo: 'https://mikelengel.github.io/Proyecto-1-Landing-Aokingtarps/',
      },
      {
        id: 2,
        image: proyecto2,
        title: 'CRUD App',
        github: 'https://github.com/MikelEngel/Proyecto-2-CRUD-App',
        demo: 'https://mikelengel.github.io/Proyecto-2-CRUD-App/',
      },
      {
        id: 3,
        image: proyecto3,
        title: 'Dashboard App',
        github: 'https://github.com/MikelEngel/Proyecto-3-Dashboard-App',
        demo: 'https://mikelengel.github.io/Proyecto-3-Dashboard-App/',
      },
      {
        id: 4,
        image: proyecto4,
        title: 'Restaurante App',
        github: 'https://github.com/MikelEngel/Proyecto-4-Restaurante-App',
        demo: 'https://classy-crisp-45d514.netlify.app/',
      },
      {
        id: 5,
        image: wordpress1,
        title: 'Mochilas Wilys en producción',
        demo: 'https://wilys.com.mx/',
      },
      {
        id: 6,
        image: wordpress2,
        title: 'Aokingtarps en producción',
        demo: 'https://aokingtarps.com/',
      },
   



    ]


      {/* <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG1} alt="" />

        </div>
        <h3>LANDING PAGE</h3>
        <div className='portfolio__item-cta' >

        <a href="https://github.com/MikelEngel/Proyecto-1-Landing-Aokingtarps" className='btn' target='_blank'>Github</a>
        <a href="https://mikelengel.github.io/Proyecto-1-Landing-Aokingtarps/" className='btn' target='_blank'>Ver proyecto</a>

        </div>
      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG2} alt="" />

        </div>
        <h3>CRUD App</h3>
        <div className='portfolio__item-cta' >

        <a href="https://github.com/MikelEngel/Proyecto-2-CRUD-App" className='btn' target='_blank'>Github</a>
        <a href="https://mikelengel.github.io/Proyecto-2-CRUD-App/" className='btn' target='_blank'>Ver proyecto</a>

        </div>
      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG3} alt="" />

        </div>
        <h3>Dashboard App</h3>
        <div className='portfolio__item-cta' >

        <a href="https://github.com/MikelEngel/Proyecto-3-Dashboard-App" className='btn' target='_blank'>Github</a>
        <a href="https://mikelengel.github.io/Proyecto-3-Dashboard-App/" className='btn' target='_blank'>Ver proyecto</a>

        </div>
      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG4} alt="" />

        </div>
        <h3>Restaurante App</h3>
        <div className='portfolio__item-cta' >

        <a href="https://github.com/MikelEngel/Proyecto-4-Restaurante-App" className='btn' target='_blank'>Github</a>
        <a href="https://classy-crisp-45d514.netlify.app/" className='btn' target='_blank'>Ver proyecto</a>

        </div>
      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG6} alt="" />

        </div>
        <h3>Mochilas Wilys en producción</h3>
        <div className='portfolio__item-cta' >

        <a href="https://wilys.com.mx/" className='btn' target='_blank'>Ver página</a>

        </div>
      </article>

      <article className='portfolio__item' >
        <div className='portfolio__item-image' >

          <img src={IMG7} alt="" />

        </div>
        <h3>Aokingtarps en producción</h3>
        <div className='portfolio__item-cta' >

        <a href="https://aokingtarps.com/" className='btn' target='_blank'>Ver página</a>

        </div>
      </article>

    </div>

    </section>
  )
} */}

export default portfolio