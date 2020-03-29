import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters/counters";
import Navbar from "./components/navbar/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };
  handleIncrement = counterId => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value = c.value + 1;
      }
      return c;
    });
    this.setState({
      counters
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
