/**
 * ejemplo de uso del metodo
 * de ciclo de vida en componente clasey el hook de vida 
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Componente antes de que el componente sea añadido al DOM (renderize)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Componente antes de que el componente sea añadido al DOM (renderize)');
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

