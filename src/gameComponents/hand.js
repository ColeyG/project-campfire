import React from "react";
import Card from "./card.js";
import "../../styles/hand.scss";

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: require("./resources/cards.json"),
    };
  }
  render() {
    let cardsInHand = [];

    this.props.cards.forEach((element, index) => {
      let cardInfo = this.state.cards[element];
      cardsInHand.push(<Card key={index} name={element} cardInfo={cardInfo} playCardMethod={this.props.playCardMethod} controls={this.props.controls} />);
    });

    return <div className="hand">{cardsInHand}</div>;
  }
}

export default Hand;
