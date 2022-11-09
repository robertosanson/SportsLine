import Navigation from "./Navigation/Navigation.js";
import Home from "./Home/Home.js";
import About from "./About/About";
import Inventory from "./Inventory/Inventory.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const Components = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

// We set the Routes for each page in out navigation bar.

export default Components;
