import React from "react";
import interact from "interactjs";
import "../../styles/cards.scss";
const image = require("../../resources/Plebes/V2_4x/PixelPlebes_V2_4x__02.png");

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tranlateX: 0,
      translateY: 0,
    };
  }
  componentDidMount() {
    interact(".card")
      .draggable({
        inertia: true,
      })
      .on("dragmove", function(event) {
        //TODO: add shrink fixes
        var x = parseFloat(event.target.getAttribute("data-x")) || 0;
        var y = parseFloat(event.target.getAttribute("data-y")) || 0;

        x += event.dx;
        y += event.dy;

        event.target.setAttribute("data-x", x);
        event.target.setAttribute("data-y", y);

        event.target.style.transform = "translate(" + x + "px, " + y + "px)";
      });
  }
  pickup() {
    console.log("picked up");
  }
  drop() {
    console.log("dropped");
  }
  render() {
    return (
      <div className="card" onMouseDown={this.pickup} onMouseUp={this.drop}>
        <img src={"compiled/" + image} alt="Card Art" />
      </div>
    );
  }
}

export default Card;
