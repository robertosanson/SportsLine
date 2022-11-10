import Navigation from "./Navigation/Navigation.js";
import Home from "./Home/Home.js";
import About from "./About/About";
import Inventory from "./Inventory/Inventory.js";
import Auth from "./Authentication/Auth";
import AuthRegister from "./Authentication/AuthRegister";
import AuthModule from "./Authentication/Auth";
import AuthLogin from "./Authentication/AuthLogin";
import ProtectedRoute from "../Common/ProtectedRoutes";
import LogOut from "./Authentication/Logout";

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
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<AuthModule />} />
          <Route path="/logOut" element={<LogOut />} />
          <Route path="/auth/register" element={<AuthRegister />} />
          <Route path="/auth/login" element={<AuthLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/authRegister" element={<AuthRegister />} />
          <Route path="/inventory" element={<ProtectedRoute path="/" element={Inventory} />}/>
          {/* Protecting the Inventory which is the only protected route */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

// We set the Routes for each page in out navigation bar.

export default Components;
