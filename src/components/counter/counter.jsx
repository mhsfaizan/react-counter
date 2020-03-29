import React, { Component } from "react";
class Counter extends Component {
  state = {
    // value: this.props.counter.value
  };
  //   handleIncrement = () => {
  //     this.setState({
  //       value: this.state.value + 1
  //     });
  //   };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    const { value } = this.props.counter;
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }
  formatValue() {
    //object destructuring
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
