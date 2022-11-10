import Navigation from "./Navigation/Navigation.js";
import Home from "./Home/Home.js";
import About from "./About/About";
import Inventory from "./Inventory/Inventory.js";
import LoginPage from "./Login/LoginPage";
import Login from "./Login/Login";
import LoginAuth from "./Login/LoginAuth";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

const Components = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/loginAuth" element={<LoginAuth />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/loginPage" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

// We set the Routes for each page in out navigation bar.

export default Components;
