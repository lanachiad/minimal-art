import React, { Component } from 'react';
import './Composition.css';

class Composition extends Component {
  render() {
    return (
      <div className="container">
        <section className="first-row">
          <div className="red column-one" />
          <div className="vertical-line" />
          <div className="column-two" />
        </section>
        <section className="horizontal-line" />
        <section className="second-row">
          <div className="column-one" />
          <div className="vertical-line" />
          <div className="column-two" />
        </section>
        <section className="horizontal-line" />
        <section className="third-row">
          <div className="yellow" />
          <div className="last-second-white" />
          <div className="vertical-line" />
          <div className="blue-white">
            <div className="blue" />
            <div className="baby-white" />
          </div>
          <div className="last-fourth-white" />
        </section>
      </div>
    );
  }
}

export default Composition;
