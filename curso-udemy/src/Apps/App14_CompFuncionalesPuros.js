import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Al no tener STATEs o FUNCIONES del ciclo de vida, se puede convertir en función
 * Pero las funciones (Staless Components) no pueden hacer uso de STATEs o FUNCIONES del ciclo de vida
 * Solamente ene las funciones, se puede asignar parámetros por defecto a los PROPS, en las CLASS no se puede hacer
 */

/*class Article extends Component {
    render(){
        return(
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                {/*<date>{this.props.date}</date>/}
                <p>{this.props.date}</p>
                <article>{this.props.children}</article>
            </section>
        );
    }
}*/

function Article(props) {
    //No se necesita usar THIS cuando se usa una función
    return(
        <section>
            <h2>{props.title}</h2>
            <p><em>Escrito por {props.author}</em></p>
            {/*<date>{this.props.date}</date>*/}
            <p>{props.date}</p>
            <article>{props.children}</article>
        </section>
    );
}

Article.propTypes = {
    title: PropTypes.string.isRequired
    , author: PropTypes.string.isRequired
    , date: PropTypes.string.isRequired
    , children: PropTypes.any
}

/*class Button extends Component {
    render(){
        return(
            <button style={{borderColor: this.props.borderColor, display: 'block'}}>
                {this.props.label}
            </button>
        );
    }
}*/

const Button = ({borderColor = 'red', label}) => (
    <button style={{borderColor/*: borderColor -Se elimina porque tienen el mismo nombre-*/, display: 'block'}}>
        {label}
    </button>
);

//Button.defaultProps = {
//    borderColor: 'blue'
//}

Button.propTypes = {
    borderColor: PropTypes.string
    , label: PropTypes.string.isRequired
}

class App extends Component {
    render(){
        return (
            <div className="App">
                <h4>App 14, Componentes Funcionales Puros</h4>
                <Article
                    author='Jafeth VV'
                    date={new Date().toLocaleDateString()}
                    title='Artículo sobre la prop Children'
                >
                    <p>Prueba párrafo children</p>
                    <strong>Mantiene la etiquetas children</strong>
                </Article>
                <Button label='Prueba BTN'/>
            </div>
        );
    }
}

export default App; 