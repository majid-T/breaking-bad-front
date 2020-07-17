import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Charachters from "./components/Charachters";
import Episodes from "./components/Episodes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />

        <div className="">
          <Switch>
            <Route
              path="/charachters"
              render={(props) => <Charachters {...props} />}
            />
            <Route
              path="/episodes"
              render={(props) => <Episodes {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
