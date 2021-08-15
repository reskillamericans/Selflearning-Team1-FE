import React from "react";
// import MentorProfile from "./component/MentorProfile/MentorProfile";
import CourseDetail from "./CourseDetail/CourseDetail";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* <Route exact path="/profile" component={MentorProfile} /> */}
          <Route exact path="/" component={CourseDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
