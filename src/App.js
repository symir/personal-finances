import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleOnClick}>Click!</button>
      </div>
    );
  }
}

export default App;
