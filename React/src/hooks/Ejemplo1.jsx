import React, { useState } from 'react';

const Ejemplo1 = () => {
    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial oara una persona
    const personaInicial = {
        nombre : 'Martin',
        email : 'martin@gmail.com'
    }

    // Queremos que el valorInicial y personaInicial sean parte del estado del componente para asi poder gestionar su cambio
    // y que este se vea reflejado en la vista del componente 
    // const [nombreVariable, funcionParaCambiar] = useState(valorInicial);


    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1)
    }
    function actualizarPersona() {
        setPersona(
            {
                nombre : 'pepe',
                email : 'pepe@gmail.com'
            }
        )
    }
    return (
        <div>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de persona:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Correo: { persona.email }</h3>
            {/* Bloque de botones para actualizar estado del componente */}
            <button onClick={incrementarContador}>incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
