import React from 'react'
import Form from '../Components/Form'
import '../Components/Estilos/ContactForm.css'
import { useOdoStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {favs,state} = useOdoStates()


  return (
    <div  className={`contactBox ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <h2 className='contactTitle'>Want to know more?</h2>
      <p className='contactText'>Send us your questions and we will contact you</p>
      <Form/>
  </div>
  )
}

export default Contact