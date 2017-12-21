import React, { Component } from 'react';
import Button from './Button';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="box">
          <h1>Minimal Art</h1>
          <p>Use the left and right arrow keys to navigate between artworks.</p>
          <p>Click the question mark to learn more information about each piece.</p>
          <Button />
        </div>
      </div>
    );
  }
}

export default LandingPage;
