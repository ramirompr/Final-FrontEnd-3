import React from 'react'
import { Link } from 'react-router-dom'
import './Estilos/Navbar.css';
import { useOdoStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useOdoStates();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} className='theme-button'>Change theme</button>
    </nav>
  )
}




export default Navbar

