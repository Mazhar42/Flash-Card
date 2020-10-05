import React, { Component } from "react";
import "../app.css";

export default class CardViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = (
      <div className="maincontainer">
        <div className="thecard">
          <div className="front">Hello</div>
          <div className="back">World</div>
        </div>
      </div>
    );
    return (
      <div className="cardviewer">
        <h1>This is the Card Viewer</h1>
        {card}
        <button onClick={this.props.SwitchToEditor}>Card Editor</button>
      </div>
    );
  }
}
