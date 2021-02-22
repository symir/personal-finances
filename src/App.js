import React from "react";
import "./App.css";
import { Button } from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      displayValue: 0,
      list: ["item 1", "item 2", "item 3"],
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      displayValue: this.state.displayValue + 1,
    });
  }

  render() {
    console.log("Render");
    return (
      <div className="App-header">
        <Form>
          <Button handleOnClick={this.handleOnClick} />
          <input type="text" value={this.state.valu}></input>
          <p>{this.state.displayValue}</p>
          <ul>
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Form>
      </div>
    );
  }
}

export default App;
