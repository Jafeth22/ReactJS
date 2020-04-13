import React, { Component } from 'react';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            inputName: ''
            , inputTwiter: '@'
            , inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault(); //Evita que el botón haga submit
        const name = this.inputNombre.value // document.getElementById('name').value;
        const twiter = document.getElementById('twiter').value;
        console.log({valor1:name, valor2:twiter});
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); //Evita que el botón haga submit
        ///const name = this.inputNombre.value // document.getElementById('name').value;
        ///const twiter = document.getElementById('twiter').value;
        ///console.log({valor1:name, valor2:twiter});
        console.log(this.state);
    }

    alCambiar = (e) => {//Se convierte en función cuando se usa el THIS adentro
        console.log('Entró alCambiar');
        console.log(e.target.checked);
        this.setState({inputTerms: e.target.checked});
    }

    //En un componente controlado necesitaremos escuchar eventos tipo onChange y utilizar setState para actualizar el estado del componente.
    render(){
        return (
            <div>
                <h2>Formularios</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        {/*El atributo FOR se usa en los LABEL para asociarlo con un INPUT*/}
                        {/*Pero con REACT, esta atributo se usa htmlFor*/}
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id="name"
                            name="userName"
                            onChange={e => this.setState({inputName: e.target.value})}
                            placeholder="Introduce tu nombre"
                            //Acceder al elemento y a sus propiedades
                            //Y se guarda en el contexto de la clase
                            ref={inputElement => this.inputNombre = inputElement}
                            value={this.state.inputName}
                        ></input>
                    </p>
                    <p>
                        <label htmlFor='twiter'>Twiter</label>
                        <input
                            id="twiter"
                            name="twiterName"
                            onChange={e => this.setState({inputTwiter: e.target.value})}
                            placeholder="Introduce tu Twiter"
                            value={this.state.inputTwiter}
                        ></input>
                    </p>
                    <p>
                        <label>
                            <input 
                                checked={this.state.inputTerms}
                                onChange={this.alCambiar} 
                                type="checkbox"
                            />
                            Aceptar términos
                        </label>
                    </p>
                    {/* <button onClick={this.handleClick}>Enviar</button>*/}
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}