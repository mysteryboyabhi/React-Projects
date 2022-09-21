import React from "react";
import "./index.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    //Here I use arrow function so that 'this' will be accessable inside increase function
    this.setState({ count: this.state.count + 1 }); // Here we are passing a new object in setState method as in class component state used to be an object.
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div className="app-container">
          <div className="button-container">
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
          <h1>{this.state.count}</h1>
        </div>
      </>
    );
  }
}

export default Counter;
