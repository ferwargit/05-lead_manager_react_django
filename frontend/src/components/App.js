import React, { Component, Fragment } from "react";
import Header from "./layout/Header.js";
import Dashboard from "./leads/Dashboard.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div class="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

export default App;