const e = React.createElement;
import React from "react";
import { render } from "react-dom";
import LikeButton from "./like_component.js";
import "../styles/main.scss";
const domContainer = document.querySelector("#main");
render(<LikeButton />, domContainer);
