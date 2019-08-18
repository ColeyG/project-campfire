import React from "react";
import "../../styles/cards.scss";
const image = require("../../resources/Plebes/V2_4x/PixelPlebes_V2_4x__02.png");

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={"compiled/" + image} alt="Card Art" />
      </div>
    );
  }
}

export default Card;
