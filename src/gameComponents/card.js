import React from "react";
import "../../styles/cards.scss";
const image = require("../../resources/Plebes/V2_4x/PixelPlebes_V2_4x__02.png");

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interaction: "dropped",
    };
  }
  drag = () => {
    if (this.state.interaction === "grabbed") {
      let x = parseFloat(event.target.getAttribute("data-x")) || 0;
      let y = parseFloat(event.target.getAttribute("data-y")) || 0;
      let gameSizeCoefficient = document.querySelector("#game").getAttribute("game-size-coefficient");

      x += event.movementX / gameSizeCoefficient;
      y += event.movementY / gameSizeCoefficient;

      event.target.setAttribute("data-x", x);
      event.target.setAttribute("data-y", y);

      event.target.style.transform = "translate(" + x + "px, " + y + "px)";
    }
  };
  pickup = () => {
    this.setState({ interaction: "grabbed" });
    console.log("picked up");
  };
  drop = () => {
    this.setState({ interaction: "dropped" });
    console.log("dropped");
  };
  render() {
    return (
      <div className="card" onMouseDown={this.pickup} onMouseUp={this.drop} onMouseMove={this.drag}>
        <img src={"compiled/" + image} alt="Card Art" />
      </div>
    );
  }
}

export default Card;
