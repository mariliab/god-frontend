import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "./pages/startpage";
import CarPage from "./pages/carpage";
import ShopPage from "./pages/shoppage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cars/:carId">
          <CarPage />
        </Route>
        <Route path="/shop/:carId">
          <ShopPage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
