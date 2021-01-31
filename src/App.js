import React from 'react';
import HomePage from "./container/HomePage/HomePage";

import "./App.scss";
import { HashRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </HashRouter>
    
  );
}

export default App;
