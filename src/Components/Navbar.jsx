import React from 'react'
import { Link } from 'react-router-dom'
import './Estilos/Navbar.css';
import { initialState } from '../Context/Theme';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const {dispatch} = initialState()
  const changeTheme = () => {
    dispatch({type: 'TOOGLE_THEME'})
  }

  return (
    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme} className='themeButton'>Change theme</button>
    </nav>
  )
}

export default Navbar