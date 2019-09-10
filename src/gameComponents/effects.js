import React from "react";
import EffectLibrary from "./resources/effectLibrary.js";
import "../../styles/effects.scss";

class Effects extends EffectLibrary {
  constructor(props) {
    super(props);
    this.state = {
      effects: [],
    };
  }
  componentDidUpdate = () => {
    if (this.props.effect !== "") {
      this.triggerEffect(this.props.effect);
    }
  };
  triggerEffect = effect => {
    console.log("triggered: " + effect);
    eval("this." + effect + "();");
    this.props.removeEffectMethod();
  };
  render() {
    return (
      <React.Fragment>
        <div className="effect">
          <div className="effect-area">
            <img src={"compiled/" + require("../../resources/effects/polished-diamond.png")} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Effects;
