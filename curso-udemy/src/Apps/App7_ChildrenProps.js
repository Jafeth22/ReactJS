import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Los CHILDREN son PROPS que nos devuelve el contenido
 * que envuelve el componente
 * 
 * Permite crear prequeños TEMPLATES o LAYOUTS de nuestras aplicaciones
 * 
 * PropType: Chequeo del tipo de datos de una PROP, son dependencias externas
 * Para esto se debe de instalar en la carpeta del proyecto: npm install prop-types -SE
 * 
 * LOS AVISOS DE LOS PROPTYPES SOLAMENTE ESTÁN HABILITADOS PARA DESARROLLO, PARA PRODUCCIÓN NO
 */

class Box extends Component {
    render(){
        return(
            <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
                {this.props.children}
            </div>
        );
    }
}

class Articulo extends Component {
    //Para definir los datos de las variable, se colocan siempre antes del constructor
    static propTypes = {
        autor: PropTypes.string.isRequired //Define el tipo de dato y si es REQUERIDO o NO
    }

    render(){
        const {title, autor, date, children} = this.props
        return (
            <section>
                <h2>{title}</h2>
                {autor && <p><em>Escrito por {autor}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children/**Obtiene todas las etiquetas que se escriban dentro de la ETIQUETA CONTRUIDA*/}
                </article>
            </section>
        );
    }
}

/*//Puedo definir las variables
Articulo.propTypes = {
    author: PropTypes.string   //Defino el tipo de dato para cada variable
}*/

class App extends Component {
    render(){
        return (
            <div className="App">
                <h4>Children Props</h4>
                <Box>Hola Children</Box>
                <Articulo
                    date={new Date().toLocaleDateString()/*Devuelve la fecha de la localización*/}
                    title='Prueba Artículo'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
                    <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
                </Articulo>
            </div>
        );
    }
}

export default App;