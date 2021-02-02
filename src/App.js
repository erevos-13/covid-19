import React from "react";
import HomePage from "./container/HomePage/HomePage";

import "./App.scss";
import { HashRouter, Route, Router, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CountryPage from "./container/Country/CountryPage";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/country/:countryId" component={CountryPage} />
        {/* <Route path="*">
          <Redirect path="/" />
        </Route> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
