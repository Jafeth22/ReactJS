import React, { Component } from 'react';

class Boton extends Component {
    ////----------------------Esto es era para la herencia
    //constructor(props){
    //    super(props);
    //    this.borderColor = '#09f'
    //}

    //render(){
    //    return(
    //        <button style={{borderColor: this.borderColor, display: 'block'}}>
    //            {this.props.label}
    //        </button>
    //    );
    //}

    ////----------------------Esto es con composicion
    render(){
        return(
            <button style={{borderColor: this.props.borderColor, display: 'block'}}>
                {this.props.label}
            </button>
        );
    }
}

Boton.defaultProps = {
    borderColor: '#09a'
}

class BotonPeligro extends Component/*Boton Ya no extiende directamente de BOTON*/{
    ////Herencia
    //constructor(props){
    //    super(props)
    //    this.borderColor = 'red';
    //}
    /////Composición
    render(){
        return(
            <Boton borderColor='red' label={this.props.label}/>
        );
    }
}

class ButtonWithLegend extends Component/*Boton Ya no extiende directamente de BOTON*/{
    ////HERENCIA
    //render(){
    //    return(
    //        <div>
    //            {super.render()}
    //            <small>{this.props.legend}</small>
    //        </div>
    //    );
    //};
    render(){
        const {label, borderColor} = this.props;
        return(
            <div>
                <Boton label={label} borderColor={borderColor} />
                <small>{this.props.legend}</small>
            </div>
        );
    }
}

class App extends Component {
    render(){
        return (
            <div className="App">
                <h4>App 13, Composicion vs Herencia</h4>
                <Boton label={'Botón Click con Composición'}/>
                <br/>
                <BotonPeligro label={'Botón Peligro con Composición'}/>
                <br/>
                <ButtonWithLegend
                    label='Botón con Leyenda con Composición'
                    legend='Leyenda del botón con Composición'
                />
            </div>
        );
    }
}

export default App; 