import React, { Component } from 'react';
import Composition from './Composition';
import './Button.css';

class Button extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {
    return (
      <a className="button" href="#" onClick={this.handleClick}>
        Let's Go
      </a>
    );
  }
}

export default Button;
