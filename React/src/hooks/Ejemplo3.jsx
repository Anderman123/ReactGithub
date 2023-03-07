/**
 * Ejemplos HOOKS
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * Componente1 
 * Dispone de 1 contexto que va a tener un valor 
 * que recibe del padre
 */
const miContexto = React.createContext(null);

const Componente1 = () => {
    // Iniciamos con el estado vacio que va a rellenar con los 
    // datos del contexto del pader
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Printamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    // crear el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setsessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1,
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* todo lo que esta aqui dentro puede leer puede leer los datos de sesionData */}
            {/* Ademas si se actualizan los componentes aqui, tambien lo actualiza */}
            <h1>+++ Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Session</button>
        </miContexto.Provider>
    )
}
