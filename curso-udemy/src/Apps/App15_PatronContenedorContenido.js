import React, { Component } from 'react';
import BitCoinPricePresentacion from './App15Presentacion';

class BitCoinPriceContenedor extends Component {
    state = {bpi: {}}

    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            const { bpi } = data
            this.setState({ bpi })
        })
    }

    render(){
        return (<BitCoinPricePresentacion bpi={this.state.bpi}/>);
    }
}

export default BitCoinPriceContenedor; 