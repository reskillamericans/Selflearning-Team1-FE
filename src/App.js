import React from "react";
import MentorProfile from "./component/MentorProfile/MentorProfile";
import CourseDetail from './component/CourseDetail/CourseDetail';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/profile" component={MentorProfile} />
          <Route exact path="/course-detail" component={CourseDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
