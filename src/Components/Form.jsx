import React, { useState } from "react";


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
        <input onChange ={(event) => setCliente({...cliente,nombre: event.target.value})} type="text" placeholder="ingrese su nombre"/>
        <input type="text" onChange ={(event) => setCliente({...cliente,email: event.target.value})} placeholder="ingrese su email"/>
        <button onClick={handleSubmit}>Enviar</button>
        {enviado && <h3>Gracias {cliente.nombre}, te contactaremos cuanto antes vía mail </h3>}
        {error && <h3 style={{color: 'red'}}>Por favor verifique su información nuevamente</h3>}
      </form>
    </div>
  );
};

export default Form;
