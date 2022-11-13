import React from 'react'
import './Experience.css'
import { BsShieldFillCheck } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' >
      <h5>Habilidades</h5>
      <h2>Mis experiencias</h2>

      <div className='container experience__container' >
        <div className='experience__frontend' >
          <h3>Frontend Development</h3>
          <div className='experience__content' >

            <article className='experience__details' >
              <BsShieldFillCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light' >Intermedio</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsShieldFillCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light' >Intermedio</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsShieldFillCheck className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light' >Básico</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsShieldFillCheck className='experience__details-icon' />
              <div>
                <h4>Java Script</h4>
                <small className='text-light' >Básico</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsShieldFillCheck className='experience__details-icon' />
              <div>
              <h4>ReactJs</h4>
              <small className='text-light' >Básico</small>
              </div>
            </article>

            <article className='experience__details' >
              <BsShieldFillCheck className='experience__details-icon' />
              <div>
              <h4>VsCode</h4>
              <small className='text-light' >Básico</small>
              </div>
            </article>

          </div>
        </div>

        {/* FIN FRONT END */}

        <div className='experience__backend' >
        <h3>Backend Development</h3>
        <div className='experience__content' >

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>Node Js</h4>
              <small className='text-light' >Básico</small>
            </div>
          </article>

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>Firebase</h4>
              <small className='text-light' >Básico</small>
            </div>
          </article>

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>MongooDB</h4>
              <small className='text-light' >Básico</small>
            </div> 
          </article>

        </div>
        </div>

        <div className='experience__designer' >
        <h3>Graphic Designer</h3>
        <div className='experience__content' >

        <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>Photoshop</h4>
              <small className='text-light' >Intermedio</small>
            </div>
          </article>

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>Illustrator</h4>
              <small className='text-light' >Intermedio</small>
            </div>
          </article>

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>Indesing</h4>
              <small className='text-light' >Intermedio</small>
            </div>
          </article>

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>AfterEffects</h4>
              <small className='text-light' >Básico</small>
            </div>
          </article>

          <article className='experience__details' >
            <BsShieldFillCheck className='experience__details-icon' />
            <div>
              <h4>Premiere</h4>
              <small className='text-light' >Básico</small>
            </div>
          </article>

        </div>

    </div>

      </div>
      
      </section>
  )
}

export default Experience