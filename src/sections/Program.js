import React from 'react'
import './Program.scss'
import { Programs } from '../data/Programs'

const Program = () => {
  return (
    <section id="program" className="Program">
      <div className="Program__content">
        <h2 className="Program__title section-title">Programa</h2>
        <div className="Program__grid">
          {Programs.map(program => (
            <div key={program.id} className="Program__grid-item">
              <h3 className="Program__date">{program.date}</h3>
              <div className="Program__activities">
                {program.activities.map(activity => (
                  <div key={activity.id} className="Program__activity">
                    <p className="Program__activity-hour">{activity.hour}</p>
                    <p className="Program__activity-name" dangerouslySetInnerHTML={{__html: activity.name}}></p>
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

export default Program