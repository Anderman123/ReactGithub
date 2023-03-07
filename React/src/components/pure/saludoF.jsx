import React, { useState } from 'react'
import PropTypes from 'prop-types'

function saludoF(props) {
    //breve introducion a useState

    const [age, setage] = useState(23);

    const birthday = () => {
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                HOLA! soy {props.name} desde componente funcional
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    )
}

saludoF.propTypes = {
    name: PropTypes.string
};

export default saludoF
