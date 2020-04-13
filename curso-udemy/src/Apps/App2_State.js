import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//ESTE ES DE STATE
class Contador extends Component {
    constructor(props) { //Para inicializar las variables
        super(props) //En este caso, llama al contructor de Component
        this.state = { contador: this.props.contadorInicial }
        //Es asíncrono, y es el que dice cuando se debe de cambiar el estado
        setInterval(() => {
            this.setState({contador: this.state.contador + 1})
        }, 1000)
    }

    render() {
        return <ContadorNumero numero = {this.state.contador} />
    }
}

Contador.defaultProps = {
    contadorInicial: 0
}

class ContadorNumero extends Component {
    render() {
        console.log('ContadorNumero render()');
        return <span>{this.props.numero}</span>
    }
}

function App() {
    return ( 
        <div className = "App" >
            <p> Primer Componente con State </p> 
            <Contador contadorInicial = { 100 } /> 
        </div>
    );
}

export default App;