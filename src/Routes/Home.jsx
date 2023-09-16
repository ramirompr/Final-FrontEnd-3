import React from 'react'
import Card from '../Components/Card'
import { useOdoStates } from "../Context/Context"
import '../Components/Estilos/Card.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologos,state,dispatch} = useOdoStates()
  const divClassName = state.theme === 'light' ? 'light-theme' : 'dark-theme'

  return (
    <div className={divClassName} >
    <main>
      <h1 className='homeTitle'>Our dentists</h1>
      <div className='card-grid'>
        {odontologos.map(odontologo => (<Card odontologo={odontologo} key={odontologo.id}/>))}
      </div>
    </main>
    </div>
  )
}

export default Home