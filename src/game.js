// This is the game component which will implement all other game components
import React from "react";
import Hand from "./gameComponents/hand.js";
import Deck from "./gameComponents/deck.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInHand: [],
      playerDeck: require("./gameComponents/resources/playerDeck.json"),
      cardsDrawn: [],
    };
  }
  getRandomCardFromDeck = () => {
    var keys = Object.keys(this.state.playerDeck);
    let randKey = keys[(keys.length * Math.random()) << 0];

    if (this.state.playerDeck[randKey] >= 1) {
      console.log(randKey);
      return randKey;
    } else {
      console.log("something went wrong, that card has 0 copies");
    }
  };
  removeCardFromDeck = card => {
    let deck = this.state.playerDeck;
    delete deck[card];
    this.setState({ playerDeck: deck });
  };
  drawCardMethod = () => {
    let currentCards = this.state.cardsInHand;
    let newCard = this.getRandomCardFromDeck();

    this.removeCardFromDeck(newCard);
    currentCards.push(newCard);

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
