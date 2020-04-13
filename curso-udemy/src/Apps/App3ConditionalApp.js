import React, { Component } from 'react';

class LogInButton extends Component {
    render(){
        return <button>Iniciar Sesion</button>
    }
}

class LogOutButton extends Component {
    render(){
        return (
            <div>
                <p>Bienvenido Usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        );
    }
}

///Con EXPORT DFAULT, le digo que esa clase será que se exporte por defecto
export default class ConditionalSection extends Component {
    constructor(){
        super();
        this.state = {isUserLogged: true}
    }

    render(){
        return (
            <div>
                <h4>Condicional</h4>
                {(this.state.isUserLogged) ? <LogInButton/> : <LogOutButton/>}
            </div>
        )
    }
}