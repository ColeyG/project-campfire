// This is the game component which will implement all other components
import React from "react";
import Hand from "./gameComponents/hand.js";
import Deck from "./gameComponents/deck.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInHand: ["king-of-hearts", "ace-of-clubs"],
    };
  }
  drawCardMethod = () => {
    let currentCards = this.state.cardsInHand;

    currentCards.push("ace-of-clubs");

    this.setState({ cardsInHand: currentCards });
  };
  render() {
    return (
      <React.Fragment>
        <Deck drawCardMethod={this.drawCardMethod} />
        <Hand cards={this.state.cardsInHand} />
      </React.Fragment>
    );
  }
}

export default Game;
