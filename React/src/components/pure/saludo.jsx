import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Saludo extends Component {


    constructor(props) {
        super(props)
        this.state = {
            age : 23,
            name : "Alexander"
        }
    }
    render() {
        return (
            <div>
                <h1>
                    HOLA! soy {this.props.name}
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }
    birthday = () => {
        this.setState((prevState) =>(
            {
                age: prevState.age +1
            }
        ))
    }
}


Saludo.PropTypes = {
    name: PropTypes.string,
};


export default Saludo;
