import React, { Component } from 'react';
import datos from './App4Carros.json';
import '../App.css';


// class App extends Component {
//   render(){
//     const numbers = [1,1,3,4,5];  
//     return (
//       <div className="App">
//         {/*Se crea un índice para evitar que se repita el elemento, si se hace, REACT creerá que el elemento ya se creó y va a dar error*/}
//         {numbers.map((number, indice) => <p key={indice}>Soy el número {number}</p>)}
//       </div>
//     );
//   }
// }

function CarItem(props) {
  const car = props.value //De esa forma evitar estar escribiendo props.value a cada rato
  return(
    <li>
      <p><strong>ID: </strong>{props.identificador}</p>
      <p><strong>Nombre: </strong>{car.name}</p>
      <p><strong>Compañía: </strong>{car.company}</p>
    </li>
  );
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <h3>Trabajando con Listas de Objetos</h3>
        <ul>
          {/*En caso de una función, le paso la info con VALUE */}
          {/*Los KEY nunca se van a mostrar si uno los llama de esa forma, hay que llamarlos con otro nombre para poder ver la información*/}
          {datos.map(car => <CarItem identificador={car.id} key={car.id} value={car} />)}
        </ul>
      </div>
    );
  }
}

export default App;