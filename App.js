import React from "react";
import About from "./Componenet/Views/about";
import Layoutt from "./Componenet/Views/layoutt";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Componenet/Views/login";
import Register from "./Componenet/Views/Registration";
function App() {
  return (
    <Router>
      <Layoutt />
      <Switch>
        <div className="App">
          <About />
          <Login />
          <Register />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
