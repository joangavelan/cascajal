import React from 'react'
import './Aliados.scss'
import { alliesGroups } from '../data/AlliesGroups'

const Aliados = () => {
  return (
    <section id="aliados" className="Aliados">
      <div className="Aliados__content">
        <h2 className="Aliados__title section-title">Aliados</h2>
        <div className="Aliados__container">
          {alliesGroups.map(allyGroup => (
            <div key={allyGroup.id} className="allyGroup">
              <h3 className="allyGroup__role">{allyGroup.role}:</h3>
              <div className="allyGroup__institutions">
                {allyGroup.institutions.map(institution => (
                  <div key={institution.id} className="allyGroup__institution">
                    <h4 className="allyGroup__institution-name">{institution.name}</h4>
                    <p className="allyGroup__institution-description">{institution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aliados