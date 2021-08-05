import React from 'react'
import './Croquis.scss'
import croquisURL from '../assets/images/desktop/croquis.jpg'
import plazaURL from '../assets/images/desktop/plaza de cascajal.jpg'

const Croquis = () => {
  return (
    <section id="croquis" className="Croquis">
      <div className="Croquis__content">
        <h2 className="Croquis__title section-title">Croquis</h2>
        <img src={croquisURL} alt="croquis" />
        <img src={plazaURL} alt="plaza de cascajal" />
      </div>
    </section>
  )
}

export default Croquis
