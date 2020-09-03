import React, { Component } from "react";

export default class CardEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "",
      back: "",
    };
  }

  render() {
    const row = this.props.cards.map((card, i) => {
      return (
        <div key={i} className={"flexStyle"}>
          <h2>{card.front}</h2>
          <h2>{card.back}</h2>
        </div>
      );
    });
    return (
      <div>
        <h1>Card Editor</h1>
        <input
          onChange={this.handleChange}
          name="front"
          placeholder="front of the card"
          value={this.state.front}
        />
        <input
          onChange={this.handleChange}
          name="back"
          placeholder="back of the card"
          value={this.state.back}
        />
        <button onClick={this.addCard}>Add Card</button>

        <hr />
        <button onClick={this.props.SwitchToViewer}>Card Viewer</button>
        <div>{row}</div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addCard = () => {
    this.props.addCard(this.state.front, this.state.back);
    this.setState({
      front: "",
      back: "",
    });
  };
}
