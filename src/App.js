import React, { Component } from "react";
import "./styles.css";
import TrafficLight from "./components/TrafficLight";

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }
  render() {
    const currentColor = this.state.currentColor;
    console.log(currentColor);
    return (
      <div className="App">
        <TrafficLight color={currentColor} />
      </div>
    );
  }
}
