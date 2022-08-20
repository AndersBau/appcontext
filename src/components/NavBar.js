import React, { Component } from "react";
import "./NavBar.css";
import Form from "./Form";
class NavBar extends Component {
  render() {
    return (
      <div className="root">
        <div className="nav">
          <div className="title">
          <p>🇨🇴 App title</p>
          </div>
          <input />
        </div>
        <Form />
      </div>
    );
  }
}

export default NavBar;
