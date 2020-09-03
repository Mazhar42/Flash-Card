import React from "react";
import CardEditor from "./Components/CardEditor";
import CardViewer from "./Components/CardViewer";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: true,
      cards: [],
    };
  }

  render() {
    if (this.state.editor) {
      return (
        <CardEditor
          cards={this.state.cards}
          SwitchToViewer={this.switchMode}
          addCard={this.addCard}
        />
      );
    } else {
      return (
        <CardViewer cards={this.state.cards} SwitchToEditor={this.switchMode} />
      );
    }
  }

  switchMode = () => {
    this.setState({
      editor: !this.state.editor,
    });
  };

  addCard = (front, back) => {
    this.setState((prevState) => {
      return {
        cards: [...prevState.cards, { front, back }],
      };
    });
  };
}

export default App;
