import React, { Component, Fragment } from "react";
import Header from "./layout/Header.js";
import Dashboard from "./leads/Dashboard.js";
import Alerts from "./layout/Alerts.js";
import Register from "./accounts/Register.js";
import Login from "./accounts/Login.js";


import { Provider } from "react-redux";
import store from "../store.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;