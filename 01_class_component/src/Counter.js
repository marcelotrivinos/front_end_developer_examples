import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({ count: 0 });
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2 className="counter">Current Count: {this.state.count}</h2>
        <div className="container-buttons">
          <button className="button-counter" onClick={this.decrement}>
            Decrement
          </button>
          <button className="button-counter" onClick={this.reset}>
            Reset
          </button>
          <button className="button-counter" onClick={this.increment}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
