import React, { Component } from 'react';

/**
 * Este componente solamente se encarga de renderizar
 */
const _renderCurrencies = (bpi) => (
    Object.keys(bpi).map(currency => (
    <div key={currency}>
        1 BTC = {bpi[currency].rate}
        <span>{bpi[currency].code}</span>
    </div>
)));

const BitCoinPricePresentacion = ({bpi}) => (
    <div>
        <h4>App 15, API Fetch</h4>
        <h3>Precio BitCoin Index</h3>
        {_renderCurrencies(bpi)}
    </div>
);

export default BitCoinPricePresentacion;
//export default class BitCoinPricePresentacion extends Component{
//    _renderCurrencies() {
//        const {bpi} = this.props;
//
//        return Object.keys(bpi).map(currency => (
//            <div key={currency}>
//                1 BTC = {bpi[currency].rate}
//                <span>{bpi[currency].code}</span>
//            </div>
//        ))
//    }
//
//    render(){
//        return(
//            <div>
//                <h4>App 15, API Fetch</h4>
//                <h3>Precio BitCoin Index</h3>
//                {this._renderCurrencies()}
//            </div>
//        );
//    }
//}