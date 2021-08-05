import React from 'react'
import './Equipo.scss'
import { members } from '../data/Members'

const Equipo = () => {
  return (
    <section id="equipo" className="Equipo">
      <div className="Equipo__content">
        <h2 className="Equipo__title section-title">Equipo organizador</h2>
        <div className="Equipo__members">
          {members.map(member => (
            <div key={member.id} className="Equipo__member">
              <img className="Equipo__member-img" src={member.imgURL} alt={member.name} />
              <h4 className="Equipo__member-name">{member.name}</h4>
              <span className="Equipo__member-position">{member.position}</span>
              <p className="Equipo__member-summary">{member.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipo