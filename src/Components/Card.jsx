
import React from "react";
import { Link } from "react-router-dom";
import { useOdoStates } from '../Context/Context'
import './Estilos/Card.css';

const Card = ({ odontologo }) => {

  const {favs, setFavs} = useOdoStates()

  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id /}

        {/ No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle /}

        {/ Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={'/detail/' + odontologo.id}>  
            <h2 className="dataCard">Name: {odontologo.name}</h2>
            <img src="/images/doctor.jpg" alt="" className="card-image"/>
            <h3 className="dataCard">Username: {odontologo.username}</h3>
        </Link>
        <button onClick={() => setFavs((prevFavs) => [...prevFavs, odontologo])} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;