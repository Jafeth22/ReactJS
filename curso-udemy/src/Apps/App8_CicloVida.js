import React, { Component } from 'react';
/**
 * ----------------------------------------------------------------------
 * •ComponentWillMount
 * Se ejecuta una sola vez
 * Se invota antes de crear el componente y renderizarlo
 * El DOM todavía no existe
 * Ya se puede usar el setState
 * 
 * Lo principal de este método es preparar y configurar el componente
 * ----------------------------------------------------------------------
 * •Render
 * No se puede llamar a setState, puede ocacionar un ciclo infinito
 */
class App extends Component {
    constructor(props){
        super(props);//Llama al constructor del archivo importado, el cuál es COMPONENT
        this.state = { msjInicial: 'Mensaje Inicial'}
    }

    mantieneClick = () => {
        this.setState({msjInicial: "Se dió click"});
    }

    render(){
        return (
            <div className="App">
                <h4>App 8, Contructor</h4>
                {this.state.msjInicial}
                <button onClick={this.mantieneClick}>
                    Cambiar Mensaje
                </button>
            </div>
        );
    }
}

export default App; 