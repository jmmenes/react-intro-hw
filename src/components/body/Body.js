import React, { Component } from 'react';
import './Body.css';
import Box from '../box-children/Box';
import cryptoNFT from './images/NFT1.jpg';
import cryptoNFT2 from './images/NFT2.jpg';
import cryptoNFT3 from './images/NFT3.jpg';
import cryptoNFT4 from './images/NFT4.png';

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <img className="cryptoNFT" src={cryptoNFT} alt="coins"></img>
          <p>
            An NFT is a digital asset that represents real-world objects like
            art, music, in-game items and videos. They are bought and sold
            online, frequently with cryptocurrency, and they are generally
            encoded with the same underlying software as many cryptos.
          </p>
        </div>
        <hr />
        <div style={{ display: 'Flex', justifyContent: 'center' }}>
          <Box name="Box1 Mekaverse" ethNFT={cryptoNFT2} />
          <Box name="Box2 Bored Ape" ethNFT={cryptoNFT3} />
          <Box name="Box3 Crypto Punk" ethNFT={cryptoNFT4} />
        </div>
      </div>
    );
  }
}

export default Body;
