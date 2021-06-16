import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Topic from './pages/Topic';
import Course from './pages/Course';
function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`/topics/:topicId`} >
          <Topic />
        </Route>
        <Route path={`/courses/:courseId`} >
          <Course />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
