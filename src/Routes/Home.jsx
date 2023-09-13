import React from 'react'
import Card from '../Components/Card'
import { useOdoStates } from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologos} = useOdoStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.map(odontologo => (<Card odontologo={odontologo} key={odontologo.id}/>))}
      </div>
    </main>
  )
}

export default Home