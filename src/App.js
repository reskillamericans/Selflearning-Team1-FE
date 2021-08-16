import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Registration  from "./components/Registration";
import  Login  from "./components/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path= "/registration" component={Registration} />
        <Route exact path= "/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;