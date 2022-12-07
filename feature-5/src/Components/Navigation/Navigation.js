import { Link } from "react-router-dom";
import {checkUser, logoutUser} from "../Authentication/AuthService";

//New navigation with log in functionality
const Navigation = () => (
  <nav>
    <ul>
      <hr />
      {!checkUser() ? 
      <Link to="/auth">Sign Up / Log In</Link> : 
      <Link to="/home">Logout</Link>
      // <button onclick={logoutUser()}> Log out </button>
      }
      <br/>
      <hr />
      <Link to="/home">Home</Link>
      <br />
      <hr />
      <Link to="/inventory"> Inventory </Link>
      <br />
      <hr />
      <Link to="/about">About</Link>
      <hr />
    </ul>
  </nav>
);

// We add the links to the home page, about page, and
// inventory page

export default Navigation;
