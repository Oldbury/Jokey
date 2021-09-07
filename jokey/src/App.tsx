import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingScreen from "./screens/landing";
import RandomJokeScreen from "./screens/randomJoke";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/random">
            <RandomJokeScreen />
          </Route>
          <Route path="/">
            <LandingScreen />
          </Route>
        </Switch>
    </Router>
  );
}