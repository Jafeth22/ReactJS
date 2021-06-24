import React, { Component } from 'react';

class FetchExample extends Component {
    state = {bpi: {}}
    
    /**
     * Esta función es parte del ciclo de REACT, se ejecuta después del RENDER y ya se puede
     * interactuar con el DOM
     */
    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())//Se convierte a JSON
        .then(data => {
            const {bpi} = data; //Obtiene la propiedad BPI (en este caso) de los datos retornados en la función
            this.setState({bpi})
        })
        //Este es similar, solamente que se deberá de convertir la funcion en asyn
        /*
            const api_call = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const {bpi} = await api_call.json();
            console.log(['Resultado', api_call, bpi]);
        */
    }

    /**
     * Muestra lo que trae la variable
     */
    _renderCurrencies(){
        const {bpi} = this.state;
        const actuales = Object.keys(bpi) //Esto devuelve los Keys del Objto
        return actuales.map(actual => (
            <div key={actual}>
                1 Bitcoin en {actual} es {bpi[actual].rate}
                <span>{actual}</span>
            </div>
        ))
    }

    render(){
        return (
            <div className="App">
                <h4>Ejemplo Fetch, con Bitcoins</h4>
                {this._renderCurrencies()}
            </div>
        );
    }
}

export default FetchExample;
