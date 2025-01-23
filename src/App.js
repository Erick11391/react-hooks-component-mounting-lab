import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [], // Array to hold timer IDs
    };
  }

  // Adds a new timer with a random ID
  handleAddTimer = () => {
    this.setState((prevState) => ({
      timers: [...prevState.timers, Math.random()],
    }));
  };

  // Removes a timer by filtering out its ID
  handleRemoveTimer = (id) => {
    this.setState((prevState) => ({
      timers: prevState.timers.filter((timerId) => timerId !== id),
    }));
  };

  // Lifecycle method: Invoked when the component is mounted
  componentDidMount() {
    this.handleAddTimer(); // Automatically adds a timer
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        {this.state.timers.map((id) => (
          <Timer key={id} id={id} onRemove={this.handleRemoveTimer} />
        ))}
      </div>
    );
  }
}

export default App;
