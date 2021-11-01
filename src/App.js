import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/body/Body';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="NFT Gallery" />
        <div className="main">
          <Sidebar width="25" />
          <Body width="70" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
