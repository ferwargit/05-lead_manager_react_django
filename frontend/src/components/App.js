import React, { Component, Fragment } from "react";
import Header from "./layout/Header.js";
import Alerts from "./layout/Alerts.js";
import Register from "./accounts/Register.js";
import Login from "./accounts/Login.js";
import PrivateRoute from "./common/PrivateRoute.js";

import { Provider } from "react-redux";
import store from "../store.js";
import { loadUser } from "../actions/auth.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Routes>
                <Route path="/" element={<PrivateRoute />} />
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