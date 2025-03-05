import React, { Component } from "react";

class session32 extends Component {

    constructor(value) {
        super(value);
        // console.log("constructor", value);
        this.state = {
            count: 0
        }
    }
    countIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }

    countDecrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        } 
    }

    render() {
        return (
            <div className="main">
                <h2>Task 3 (Counter using class Component)</h2>
                <h3>Counter</h3>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.countIncrement()} style={{marginRight:"10px"}}>Increment</button>
                <button onClick={() => this.countDecrement()}>Decrement</button>
            </div>
        )
    }
}
export default session32;