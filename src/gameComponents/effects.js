import React from "react";
import EffectLibrary from "./resources/effectLibrary.js";
import "../../styles/effects.scss";

class Effects extends EffectLibrary {
  constructor(props) {
    super(props);
    this.state = {
      effects: [],
      currentEffect: "",
      effectStyle: { opacity: 0 },
    };
  }
  componentDidUpdate = () => {
    if (this.props.effect !== "") {
      this.triggerEffect(this.props.effect);
    }
  };
  triggerEffect = effect => {
    if (Object.getOwnPropertyNames(this).includes(effect)) {
      console.log("triggered: " + effect);
      eval("this." + effect + "();");
    } else {
      console.log("didn't trigger: " + effect + ", couldn't find a method");
    }
    this.props.removeEffectMethod();
  };
  render() {
    return (
      <React.Fragment>
        <div className="effect">
          <div className="effect-area" style={this.state.effectStyle}>
            {this.state.currentEffect}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Effects;
