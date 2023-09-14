import React, { useState } from "react";
import './Estilos/Contact.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [cliente, setCliente] = useState({
    nombre: '',
    email: ''
  })

const [enviado, setEnviado] = useState(false)
const [error, setError] = useState(false)

const emailValidacion = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

const handleSubmit = (e) => {
    e.preventDefault()
    if(emailValidacion && cliente.nombre.length > 5) {
        setEnviado(true)
        setError(false)
    } else {
        setError(true)
    }
}
  
  return (
    <div>
      <form>
        <input onChange ={(event) => setCliente({...cliente,nombre: event.target.value})} type="text" placeholder="Enter your name"/>
        <input type="text" onChange ={(event) => setCliente({...cliente,email: event.target.value})} placeholder="Enter your email"/>
        <button className="formButton" onClick={handleSubmit}>Send</button>
        {enviado && <h3>Thank you {cliente.nombre}, we will contact you as soon as possible via email. </h3>}
        {error && <h3 style={{color: 'red'}}>There was an error, please check the information you provided.</h3>}
      </form>
    </div>
  );
};

export default Form;
