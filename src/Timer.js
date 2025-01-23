import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0, // Keeps track of time for this timer
    };
    this.interval = null; // Holds the interval ID
  }

  // Increment the time every second
  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  // Lifecycle method: Invoked when the component is mounted
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000); // Call clockTick every second
  }

  // Lifecycle method: Invoked when the component is about to unmount
  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval to prevent memory leaks
  }

  render() {
    const { time } = this.state;
    const { id, onRemove } = this.props;

    return (
      <div>
        <p>Timer {id}: {time}s</p>
        <button onClick={() => onRemove(id)}>Remove Timer</button>
      </div>
    );
  }
}

export default Timer;
