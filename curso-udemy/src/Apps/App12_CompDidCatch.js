import React, { Component } from 'react';

/**
 * Se ejeta cuando el comp hace una excepción
 * Solo tiene una fase
 * Permite manejar errores y excepciones
 * Se debe de actualizar el state para cambiar el comportamiento de componente
 */
class BtnCreaError extends Component{
    state = {throwError: false}
    render(){
        if(this.state.throwError){
            throw new Error('Error lanzado por el botón');
        }else{
            return <button onClick={() => this.setState({throwError: true})}>Crear Error</button>
        }
    }
}

class App extends Component {
    state = {hasError: false, errorMsg: ''};

    componentDidCatch(error, errorInfo){
        console.log('componentDidCatch');
        console.log({error, errorInfo});
        this.setState({hasError: true, errorMsg: error.toString()})
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <p>Error en el componente, {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({hasError: false})}>
                        Volver a la Aplicación
                    </button>
                </div>
            );
        }else{
            return (
                <div className="App">
                    <h4>App 12, CompDidCatch</h4>
                    <BtnCreaError/>
                </div>
            );
        }
    }
}

export default App; 