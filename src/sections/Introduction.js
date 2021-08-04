import React from 'react'
import backgroundURL from '../assets/images/desktop/cascajal.jpg'
import './Introduction.scss'

const styles = {
  backgroundImage: `url(${backgroundURL})`,
  height: '100vh',
}

const Introduction = () => {
  return (
    <section className="Introduction" style={styles}>
      <div className="Introduction__heading">
        <h2>Cascajal disfruta!</h2>
        <p><strong>Cascajal</strong>, una tierra rica en historia, cultura y producción. surge en el extenso valle del río Lacramarca en el distrito de Chimbote y presenta el primer “Festival Rural de Cascajal 2022”, Una festividad cultural para crear una nueva conciencia ciudadana sobre la base de sus riquezas naturales con valor agregado y producciones artísticas; integrando sus valores locales, haciendo partícipe a sus mismos artistas y productores, e involucrando a las autoridades y actores comunitarios en general. En definitiva, para incentivar la participación de la comunidad en la puesta en valor de sus potencialidades hacia su desarrollo sostenible.</p>
      </div>  
    </section>
  )
}

export default Introduction