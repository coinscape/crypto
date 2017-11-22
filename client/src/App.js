import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eth: '--',
      btc: '--',
      ltc: '--',
    }

    subscribeToTimer((err, timestamp) => {
      if (timestamp.product_id === 'ETH-USD') {
        this.setState({ eth: Number(timestamp.price).toFixed(2) });
      } else if (timestamp.product_id === 'BTC-USD') {
        this.setState({ btc: Number(timestamp.price).toFixed(2) });
      } else {
        this.setState({ ltc: Number(timestamp.price).toFixed(2) });
      }
    })

  }


  render() {
    return (
      <div>
      <div className="title">Bitcoin</div>
      <div id="new" className="number">{this.state.btc}</div>
      <div className="title">Ether</div>
      <div id="new" className="number">{this.state.eth}</div>
      <div className="title">Litecoin</div>
      <div id="new" className="number">{this.state.ltc}</div>
      </div>
    );
  }
}

export default App;
