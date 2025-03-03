// import { Component } from "react";
import React, { Component } from "react";

class Session31 extends Component {

    render() {
        let {name,age} = this.props
        return (
            <div className="main">
                <h2>task 2</h2>
                <h5>Name: {name}</h5>
                <h5>Age: {age}</h5>
            </div>
        )
    }
}

Component.defaultProps = {
    name: "darshan",
    age: 20
}

export default Session31;