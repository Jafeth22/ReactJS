import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//ESTE ES DE PROPS

/**
 * Inmutable: No se puede modificar el valor
 */

/**
 * De esta forma se crea un componente en REACT
 * Los PROPS se pasan como si fueran ATRIBUTOS de una etiqueta HTML
 */
// function HolaMundo(props) {
//   /**El TITLE es porque así lo utilicé en la llamada */
//   return <h1>Hola {props.title}</h1> /**De esta forma se obtiene el título de la propiedad que se recibe */
// }

//const HolaMundo = (props) => <h1>Hola {props.title}</h1>;

/**
 * Un componente también se puede crear como una clase, se hereda de 
 */
class HolaMundo extends Component {
  render(){//Cuando es en una clase, el PROPS de debe de usar THIS, porque RENDER no ADMITE parámetros
    return <h1>Hola {this.props.title}</h1>;
  }
}

class Text extends Component {
  render(){
    const {isActive, arrayNumbers, multiply, objeto, title} = this.props;  //De esta forma no tendré que escribir this.props cada vez que quiero llamar a un "tribulo"/prop de la etiqueta
    const txtBool = isActive ? "Activo" : "Inactivo";
    const mappedNumbers = arrayNumbers.map(multiply);
    return (
      <div>
        <p>{txtBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objeto.valor}</p>
        {title}
      </div>
    )
  }
}

class Text2 extends Component {
  render (){
    return (
      <h1>{this.props.title}</h1>
    )
  }
}
//De esta forma le doy valor por defecto a un prop, de un componente
Text2.defaultProps = {
  title: "Valor por defecto"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text2 title={'Hola Jafeth'}></Text2>
        <HolaMundo title="ReactJS"></HolaMundo>
        <Text
          arrayNumbers = {[1,3,5]}
          isActive
          multiply = {(number) => number * 4}
          number = {2}
          objeto = {{valor: "Jafeth", valor2: "Villarreal"}}
          title = {<h4>Esta es una etiqueta HTML</h4>}
        ></Text>
      </header>
    </div>
  );
}

export default App;
