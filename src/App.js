import React from "react";
import "./App.css";
import { Button } from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      list: [],
      cost: 0,
      sum: 0,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeValue = this.handleOnChangeValue.bind(this);
    this.handleOnChangeCost = this.handleOnChangeCost.bind(this);
  }

  handleOnChangeValue(event) {
    this.setState({ value: event.target.value });
  }
  handleOnChangeCost(event) {
    this.setState({ cost: Number(event.target.value) });
  }

  handleOnClick() {
    this.setState({
      list: this.state.list.concat(this.state.value),
      value: "",
      sum: this.state.sum + this.state.cost,
      cost: "",
    });
  }

  //  this.setState((state) => {
  //    const list = state.list.concat(state.value);
  //    const value = "";
  //    const sum = state.sum + state.cost;
  //    const cost = 0;
  //    return { list, value, cost, sum };
  //  });

  render() {
    console.log("Render");
    return (
      <div className="App-header">
        <span>
          Item Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleOnChangeValue}
          />
        </span>
        <span>
          Item Cost:
          <input
            type="number"
            value={this.state.cost}
            onChange={this.handleOnChangeCost}
          />
        </span>
        <Button handleOnClick={this.handleOnClick} />
        <p>Cost: {Number(this.state.sum)}</p>
        <ul>
          {" "}
          Items:
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

// <Form>
// <Button handleOnClick={this.handleOnClick} />
// <input type="text" value={this.state.valu}></input>
// <p>{this.state.displayValue}</p>
// <ul>
//   {this.state.list.map((item) => (
//     <li key={item}>{item}</li>
//   ))}
// </ul>
// </Form>
