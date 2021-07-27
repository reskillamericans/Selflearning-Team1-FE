import React from "react";
import MentorProfile from "./component/MentorProfile/MentorProfile";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/profile" component={MentorProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
