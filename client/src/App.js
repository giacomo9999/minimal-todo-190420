import React, { Component } from "react";
import "./App.css";

import Todo from "./Todo.js";

class App extends Component {
  state = { show: false };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo />
        </header>
      </div>
    );
  }
}

export default App;
