import React, { Component } from "react";

class session32 extends Component {

    constructor(value) {
        super(value);
        // console.log("constructor", value);
        this.state = {
            count: 0
        }
    }
    countPlush() {
        this.setState({
            count: this.state.count + 1
        })
    }

    countDecrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        } else {

        }
    }

    render() {
        return (
            <div className="main">
                <h2>Task 3</h2>
                <h3>Counter</h3>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.countPlush()} style={{marginRight:"10px"}}>Increment</button>
                <button onClick={() => this.countDecrement()}>Decrement</button>

                {/* <div className="main_info" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", backgroundColor: "red", width: "120px", height: "50px", margin: "10px 0 0 0 ", padding: "30px 10px 10px 10px", borderRadius:"50%" }}>
                    <div className="" style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50%" }}>
                        <div style={{ backgroundColor: "yellow", width: "30%", height: "50%", borderRadius: "50%" }}></div>
                        <div style={{ backgroundColor: "yellow", width: "30%", height: "50%", borderRadius: "50%" }}></div>
                    </div>

                    <div className="" style={{display:"flex", justifyContent:"center", width:"100%", height:"30%"}}>
                        <div style={{ backgroundColor: "yellow", width: "70%", height: "15%" }}></div>
                    </div>
                </div> */}
            </div>
        )
    }
}
export default session32;