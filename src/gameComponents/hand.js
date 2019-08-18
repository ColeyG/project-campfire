import React from "react";
import Card from "./card.js";
import "../../styles/hand.scss";

class Hand extends React.Component {
  render() {
    return (
      <div className="hand">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Hand;
