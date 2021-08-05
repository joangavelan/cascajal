import React from 'react'
import './Objectives.scss'

const Objectives = () => {
  return (
    <section id="objetivos" className="Objectives">
      <div className="Objectives__content">
        <h2 className="Objectives__title section-title">Objetivos</h2>
        <div className="Objectives__textRow">
          <h3>General</h3>
          <p>Fomentar la participación comunitaria de los artistas, educadores, productores y autoridades en la promoción y puesta en valor de sus propias riquezas naturales y culturales.</p>
        </div>
        <div className="Objectives__textRow">
          <h3>Específicos:</h3>
          <p>1) Formar a artistas locales en la producción de contenidos culturales oriundos.</p>
          <p>2) Generar contenidos a partir de la identidad cultural local para su aprovechamiento mediante productos educativos, artesanales y turísticos.</p>
          <p>3) Fundar la asociación cultural “Sociedad Cascajal” gestionando la institucionalización del festival para su desarrollo anual.</p>
        </div>
      </div>
    </section>
  )
}

export default Objectives
