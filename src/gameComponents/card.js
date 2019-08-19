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
    interact(".card").draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target);
        },
        move(event) {
          // TODO: Allow state to be accessed. Perhaps create another method?
          let xMovement = this.state.tranlateX + event.dx;
          let yMovement = this.state.tranlateT + event.dy;
          this.setState({
            tranlateX: xMovement,
            translateY: yMovement,
          });
          console.log(this.state.translateX);
          console.log(this.state.translateY);

          //event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
      },
    });
  }
  render() {
    return (
      <div className="card">
        <img src={"compiled/" + image} alt="Card Art" />
      </div>
    );
  }
}

export default Card;
