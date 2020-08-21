import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Charachters from "./components/Charachters";
import Episodes from "./components/Episodes";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const baseUrl = "https://www.breakingbadapi.com/api/";
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Landing} />

          <Route
            path="/charachters"
            render={(props) => <Charachters {...props} baseUrl={baseUrl} />}
          />
          <Route
            path="/episodes"
            render={(props) => <Episodes {...props} baseUrl={baseUrl} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
