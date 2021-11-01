import React, { Component } from 'react';
import '../App.css';

export class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#99CCFF',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <p>© OpenSea</p>
        <p>John Meneses</p>
      </div>
    );
  }
}

export default Footer;
