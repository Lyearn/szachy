import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ChessBoard from "./chessboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/chessboard">
          <ChessBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
