import React, { Component } from "react";

export default class CardViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the Card Viewer</h1>
        <hr />
        <button onClick={this.props.SwitchToEditor}>Card Editor</button>
      </div>
    );
  }
}
