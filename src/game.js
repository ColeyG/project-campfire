// This is the game component which will implement all other components
import React from "react";
import Hand from "./gameComponents/hand.js";

const Game = props => (
  <React.Fragment>
    <Hand />
  </React.Fragment>
);

export default Game;