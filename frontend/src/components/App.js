import React from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";
import { useEffect } from "react";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";
import Dashboard from "./leads/Dashboard";

import store from "../store";
import { loadUser } from "../actions/auth";

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            {/* {routing} */}
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<PrivateRoute />} />
              {/* <PrivateRoute path="/*">
                <Dashboard /> 
              </PrivateRoute> */}
            </Routes>
          </div>
        </Fragment>
      </Provider>
  );
}

export default App;