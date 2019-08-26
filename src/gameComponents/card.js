import React from "react";
import "../../styles/cards.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interaction: "dropped",
    };
  }
  isHeld = () => {
    if (this.state.interaction === "dropped") {
      return false;
    } else {
      return true;
    }
  };
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
  };
  drop = () => {
    // TODO: Fix drop state and movable without m1 button down
    this.setState({ interaction: "dropped" });
    event.target.setAttribute("data-x", 0);
    event.target.setAttribute("data-y", 0);

    event.target.style.transform = "translate(0px, 0px)";
  };
  playCard = () => {
    // @TODO: add playing cards
  };
  render() {
    return (
      <div className={this.isHeld() ? "card" : "card card-hand"} onMouseDown={this.pickup} onMouseUp={this.drop} onMouseMove={this.drag}>
        <img src={"compiled/" + require("../../resources/" + this.props.cardInfo.image)} alt="Card Art" />
      </div>
    );
  }
}

export default Card;
