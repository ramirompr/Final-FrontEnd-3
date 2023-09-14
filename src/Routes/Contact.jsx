import React from 'react'
import Form from '../Components/Form'
import '../Components/Estilos/ContactForm.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contactBox'>
      <h2 className='contactTitle'>Want to know more?</h2>
      <p className='contactText'>Send us your questions and we will contact you</p>
      <Form/>
  </div>
  )
}

export default Contact