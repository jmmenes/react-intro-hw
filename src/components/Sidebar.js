import React, { Component } from 'react';

export class Sidebar extends Component {
  state = {
    background: '#E5F494',
  };

  handleColorClick = (event) => {
    this.setState({
      background: event.target.value,
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          backgroundColor: this.state.background,
          width: `${this.props.width}%`,
        }}
      >
        <ul
          style={{
            listStyleType: 'none',
            textAlign: 'center',
            padding: '50% 0',
          }}
        >
          <li style={{ margin: '20px 0' }}>
            <button onClick={this.handleColorClick} value="#D4AF37">
              Gold
            </button>
          </li>
          <li style={{ margin: '20px 0' }}>
            <button onClick={this.handleColorClick} value="#800080">
              Purple
            </button>
          </li>
          <li style={{ margin: '20px 0' }}>
            <button onClick={this.handleColorClick} value="#008080">
              Teal
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
