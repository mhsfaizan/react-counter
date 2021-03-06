import React, { Component } from "react";
import Counter from "../counter/counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.getCounters()}
      </div>
    );
  }
  getCounters() {
    return this.props.counters.map(counter => (
      <Counter
        key={counter.id}
        onDelete={this.props.onDelete}
        onIncrement={this.props.onIncrement}
        counter={counter}
      ></Counter>
    ));
  }
}

export default Counters;
