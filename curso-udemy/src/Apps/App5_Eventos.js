import React, { Component, useState } from 'react';

// function App() {  
//   const [mouseX, setMouseX] = useState(0); //useState: Es para darle el valor inicial a la variable
//   const [mouseY, setMouseY] = useState(0);
  
//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     setMouseX(clientX);
//     setMouseY(clientY);
//   }

//   const handleClick = (e) => {
//     console.log('Entroooooooooooooooooooooooooo');
//     console.log(e);   //Captura los eventos Sintéticos de React
//     console.log(e.nativeEvent); //con .nativeEvent se pueden obtener los eventos nativos de JS
//   }

//   return (
//     <div className="App">
//       <h3>Trabajando con Eventos</h3>
//       <button onClick={handleClick}>Soy un botón</button>
//       <div
//         onMouseMove={handleMouseMove}
//         style = {{border: '1px solid #000', maginTop: 10, padding: 10}}
//       >
//         <p>{mouseX}, {mouseY}</p>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super()
    this.state = { mouseX: 0, mouseY: 0}
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({mouseX: clientX, mouseY: clientY});
  }

  handleClick (e){
    console.log('Entroooooooooooooooooooooooooo');
    console.log(e);   //Captura los eventos Sintéticos de React
    console.log(e.nativeEvent); //con .nativeEvent se pueden obtener los eventos nativos de JS
  }

  render(){
    const {mouseX, mouseY} = this.state;
    return (
      <div className="App">
        <h3>Trabajando con Eventos</h3>
        <button onClick={this.handleClick}>Soy un botón</button>
        <div
          onMouseMove={this.handleMouseMove}
          style = {{border: '1px solid #000', maginTop: 10, padding: 10}}
        >
          <p>{mouseX}, {mouseY}</p>
        </div>
      </div>
    );
  }
}

export default App;