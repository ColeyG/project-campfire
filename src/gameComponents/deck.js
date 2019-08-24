import React from "react";
import "../../styles/deck.scss";
const image = require("../../resources/Plebes/V2_4x/PixelPlebes_V2_4x__53.png");

class Deck extends React.Component {
  render() {
    return (
      <div className="deck">
        <img src={"compiled/" + image} alt="Deck Back Art" />
      </div>
    );
  }
}

export default Deck;
