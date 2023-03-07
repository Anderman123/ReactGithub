/* 
*Ejemplo de uso de:
* - useState()
* - useRef()
* - useEffect()
*/
import React, { useState, useRef, useEffect } from 'react'

export default function Ejemplo2() {
    // Vamos a crear 2 contadores distintos 
    // cada uno en un estado diferente 
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable 
    // con un elemento Dom del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }
    function incrementar2() {
        setContador2(contador2 + 1)
    }



    /**
     * Trabajando con useEffect
     */
    /**
     * ? caso 1: Ejecutar siempre 1 snipped de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquellos que este dentro del useEffect()
     */
    // useEffect(() => {
    //     console.log('Cambio en estado del componente');
    //     console.log('Mostrando referencia a elementodel DOM:');
    //     console.log(miRef);
    // });
    /**
     * Case 2: Ejecutar cuanso solo cambie contador 1
     */

    // useEffect(() => {
    //     console.log('Cambio en estado del Contador 1');
    //     console.log('Mostrando referencia a elementodel DOM:');
    //     console.log(miRef);
    // }, [contador1]);

    /**
    * Case 2: Ejecutar cuanso solo cambie contador 1 y 2
    */
   useEffect(() => {
       console.log('Cambio en estado del Contador 1');
       console.log('Mostrando referencia a elementodel DOM:');
       console.log(miRef);
   }, [contador1, contador2]);



    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: { contador1 }</h2>
            <h2>Contador 2: { contador2 }</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>
        </div>
    )
}
