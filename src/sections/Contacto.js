import React from 'react'
import './Contacto.scss'

const Contacto = () => {
  return (
    <section id="contacto" className="Contacto">
      <div className="Contacto__content">
        <h2 className="Contacto__title section-title">Contacto</h2>
        <form name="contact" className="Contacto__form" netlify>
          <div className="Contacto__form-field">
            <label htmlFor="name" className="Contacto__form-label">Nombre:</label>
            <input id="name" type="text" name="name=" className="Contacto__form-input" required/>
          </div>
          <div className="Contacto__form-field">
            <label htmlFor="email" className="Contacto__form-label">Correo:</label>
            <input id="email" type="email" name="email" className="Contacto__form-input" required/>
          </div>
          <div className="Contacto__form-field">
            <label htmlFor="message" className="Contacto__form-label">Mensaje:</label>
            <textarea id="message"className="Contacto__form-input" name="message" rows="5" cols="15" required></textarea>
          </div>
          <button className="Contacto__form-submit" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto