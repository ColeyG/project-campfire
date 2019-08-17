const e = React.createElement;
import React from "react";
import { render } from "react-dom";
import Game from "./game.js";
import "../styles/reset.scss";
import "../styles/main.scss";
import "./resize.js";
const gameContainer = document.querySelector("#game");
render(<Game />, gameContainer);
