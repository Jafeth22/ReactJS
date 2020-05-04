import React, { Component/*, PureComponent */} from 'react';
import PropTypes from 'prop-types';

/**
  * Se ejecuta cuando el componente recibe nuevas props
  * Va a actualizar su STATE
  * 
  * Actualiza el contenido del componente
  * --------------------------------------------------------------------------
  * SHOULD COMPONENT UPDATE
  * Se ejecuta antes de actualizar el componente
  * Determina si el componente de debe de actualizar el RENDER
  * NO SE LLAMA AL SETSTATE
  * --------------------------------------------------------------------------
  * COMPONENT WILL UPDATE
  * NO se EJECUTA si el shouldComponentUpdate devuelve FALSE
  * Se ejecuta antes de actualizar el componente
  */
const imgs = {
    dog: 'https://bit.ly/2SemxLt'
    , dolphin: 'https://bit.ly/2zzq8gB'
    , panda: 'https://bit.ly/2zC9yNf'
}

const animales = Object.keys(imgs);

/**
 * El PureComponent hará practicamente lo mismo de la función shouldComponentUpdate, pero se debe usar solamente cuando se usen PROPS y STATES SIMPLES
 */
class AnimalImage extends Component/*PureComponent*/ {
    state = {src: imgs[this.props.animal]}

    componentWillReceiveProps(nextProps){
        /**
         * •nextProps pueden ser las mismas props que tenemos
         * pero entrará igualmente a este método
         * •Nuevas props no quiere decir que sean distintas a las
         * actuales
         */
        console.clear();
        console.log('1. componentWillReceiveProps');
        console.log(nextProps);
        this.setState({src: imgs[nextProps.animal]});
    }

    /**
     * Devuelve por defecto BOOLEANO
     * Si no existe el método, devuelve true por defecto
     * Si es TRUE, actualiza el RENDER, de los contrario, no lo actualiza
     */
        shouldComponentUpdate(nextProps){
        console.log('2. shouldComponentUpdate', nextProps);
        //console.log('Anterior: ', this.props.animal);
        //console.log('Nuevo: ', nextProps.animal);
        return this.props.animal !== nextProps.animal;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('3 componentWillUpdate', nextProps, nextState);
        const img = document.querySelector('img');
        //Justo después de enviar este MSJ, react actualiza a la imagen solicitada 
        console.log('from img element: ', {alt: img.alt});
        //Web console API
        img.animate(
        [
            {
                filter: 'blur(0px)'
            }
            ,{
                filter: 'blur(2px)'
            }
        ]
        , {
            duration: 1000,
            easing: 'ease'
        })
    }

    render(){
        console.log('-> render (AnimalImage)');
        return(
            <div>
                <p>Seleccionado {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='500'
                />
            </div>
        );
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(animales) //De esta forma nos aseguramos que sea variable solamente se cargue de ese ARRAY //oneOf(['dog','dolphin','panda'])
}

/*AnimalImage.defaultProps ={
    animal: 'dog'
}*/

class EjemploCicloActualizacion extends Component {
    state = {animal: 'dog'}

    _creacionBtns = (animal) => {
        return(
            <button
                //disabled={animal === this.state.animal}
                key={animal} 
                onClick={() => this.setState({animal})}
            >
                {animal}
            </button>
        );
    }

    render(){
        return(
            <div>
                {animales.map(this._creacionBtns) /**Con esto hace que se creen los BTNS según la cantidad de datos que tenga el ARRAY */}
                {/* {this._creacionBtns('dog')}
                {this._creacionBtns('panda')}
        {this._creacionBtns('dolphin')}*/}
                <AnimalImage animal={this.state.animal}/>
            </div>
        );
    }
}

class App extends Component {
    render(){
        return (
            <div className="App">
                {/*<h4>App 10, ComponentWillReceiveProps</h4>*/}
                <h4>App 10, Should Component Update</h4>
                <EjemploCicloActualizacion/>
            </div>
        );
    }
}

export default App; 