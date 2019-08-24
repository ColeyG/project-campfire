// This is the game component which will implement all other components
import React from "react";
import Hand from "./gameComponents/hand.js";
import Deck from "./gameComponents/deck.js";

const Game = props => (
  <React.Fragment>
    <Deck />
    <Hand />
  </React.Fragment>
);

export default Game;
