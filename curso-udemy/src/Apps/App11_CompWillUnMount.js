import React, { Component } from 'react';
/**
 * Solo tiene una fase
 * Se ejecuta cuando se deja de renderizar la aplicación
 * Permite liberar recursos, limpiar intérvalos y cancelar peticiones
 * Para eliminar eventos que ya no se están usando
 */
class ComponenteADesmontar extends Component {
    state = {windowWidth: 0}

    _updateStateWithWindowWith = () => {
        console.log('_updateStateWithWindowWidth');
        this.setState({ windowWidth: document.body.clientWidth })
    }

    componentDidMount (){
        this._updateStateWithWindowWith();
        window.addEventListener(
            'resize'    //Para saber cuando cambia su tamaño
            , this._updateStateWithWindowWith//Función que se ejecuta cuando ocurra este evento
        );
    }

    /**
     * Para eliminar eventos que ya no se están usando
     * Esto se debe de hacer manual
     */
    componentWillUnmount(){
        console.log('componentWillUnmount');
        window.removeEventListener(
            'resize'    //Para saber cuando cambia su tamaño
            , this._updateStateWithWindowWith//Función que se ejecuta cuando ocurra este evento
        )
    }

    render(){
        return(
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        );
    }
}


class App extends Component {
    state = {mostrarComp: true}

    render(){
        if (this.state.mostrarComp) {
            return (
                <div className="App">
                    <h4>App 11, CompWillUnMount (Ciclo de Desmontaje)</h4>
                    <ComponenteADesmontar/>
                    <button onClick={() => this.setState({mostrarComp: false})}>
                        Desmontar Componente
                    </button>
                </div>
            )
        }else{
            return(
                <p>Componente Desmontado</p>
            )
        }
    }
}

export default App; 