import React, { Component } from "react";

class ToggleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  
  toggleLogin = () => {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  };

  render() {
    return (
      <div className="main">
        <h2>Task 4 (ToggleLogin using class Component)</h2>
        <h3>{this.state.isLoggedIn ? "User Logged In" : "User Logged Out"}</h3>
        <button onClick={this.toggleLogin} style={{ padding: "5px 20px", fontSize: "16px", marginBottom:"10px"}}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

export default ToggleLogin;
