import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";
import history from "./components/history";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Menu from "./components/Menu";
import Asistencia from "./components/Asistencia";
import NuevaJornada from "./components/NuevaJornada";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={5000}
        transition={Zoom}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router history={history}>
        {/*renderHeader()*/}
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/inicio">
            <Menu />
          </Route>
          <Route path="/asistencia">
            <Asistencia />
          </Route>
          <Route path="/jornada/nueva" exact>
            <NuevaJornada />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
