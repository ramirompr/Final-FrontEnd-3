import React from 'react'
import { useOdoStates } from '../Context/Context';

const Footer = () => {

  const { state, dispatch } = useOdoStates();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };


  return (
    <footer className={`footer ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}> 
    
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
