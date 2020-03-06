import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
/*class Square extends React.Component {
  /*constructor(props){ //Se eliminó debido a que el componente ya no hace seguimiento del estado del juego
    //Todas las subclases/heredadas tienen que tiene SUPER, cuando se hace un constructor
    super(props);
    this.state = {
      value: null
    }
  }

  render() {
    return (
      //Con setState REACT actualiza automáticamente los componentes hijos 
      /*<button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
      <button 
        className="square" 
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}*/

/**
 * Para algunos componentes es mejor hacer Funciones, para otros Clases, esto depende lo que se necesite
 * @param {object} props Obtiene la información que le envía el componente padre
 */
function Square(props) {
  return(
    <button className='square' onClick={props.onClick}>{props.value}</button>
  );
}

/**
 * El componente padre puede pasar el estado hacia los hijos usando props
 */
class Board extends React.Component {
  /*constructor(props){//Para definir las variables para este componente
    super(props);
    this.state = {
      squares: Array(9).fill(null) //Le estoy diciendo que llene todos los valores en NULL
      , xIsNext: true
    }
  }*/

  handleClick(i){
    const squares = this.state.squares.slice();//.slice() = En este caso, copia el array Squares para modificarlo y no modicar el original
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares
      , xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {//De esta forma se le envían información de un componente hijo a un componente padre
    return (
        <Square 
          //value={this.state.squares[i]}
          value={this.props.squares[i]}
          //onClick={() => this.handleClick(i)}
          onClick={() => this.props.onClick(i)}
        />    
    ); //Los () son para que JS no agregue ; y no se dañe el código
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Ganador: ' + winner
    } else {
      status = 'Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array[9].fill(null)
      }]
      , xIsNext: true
    }
  }

  render() {
    const history = this.state.history;
    const current = history[history.length -1];
    const winner =  calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Ganador: ' + this.winner;
    } else {
      status = 'Siguiente participante' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
-        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

