import React from "react";
import Card from "./card.js";
import "../../styles/hand.scss";

class Hand extends React.Component {
  render() {
    let cardsInHand = [];

    this.props.cards.forEach((element, index) => {
      cardsInHand.push(<Card key={index} name={element} />);
    });

    return <div className="hand">{cardsInHand}</div>;
  }
}

export default Hand;
