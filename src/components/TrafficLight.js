import React, { Component } from "react";
import "./TrafficLight.css";
import classNames from "classnames";

const RED = 0;
const YELLOW = 1;
const GREEN = 2;
class TrafficLight extends Component {
  render() {
    console.log("rending...", this.props);
    const currentColor = this.props.color;
    return (
      <div className="TrafficLight">
        <div
          className={classNames("bulb", "red", {
            active: currentColor === RED
          })}
        />
        <div
          className={classNames("bulb", "yellow", {
            active: currentColor === YELLOW
          })}
        />
        <div
          className={classNames("bulb", "green", {
            active: currentColor === GREEN
          })}
        />
      </div>
    );
  }
}

export default TrafficLight;
