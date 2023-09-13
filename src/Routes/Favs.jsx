import React from "react";
import Card from "../Components/Card";
import { useOdoStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favs} = useOdoStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favs.map(fav =>
        <Card odontologo={fav} key={fav.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
