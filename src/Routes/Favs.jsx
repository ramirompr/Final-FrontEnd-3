import React from "react";
import Card from "../Components/Card";
import { useOdoStates } from "../Context/Context";
import '../Components/Estilos/Card.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favs,state} = useOdoStates()

  return (
    <>
    <div className={state.theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1 className="homeTitle">Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favs.map(fav =>
        <Card odontologo={fav} key={fav.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      </div>
    </>
  );
};

export default Favs;
