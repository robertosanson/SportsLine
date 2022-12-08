import { Link } from "react-router-dom";
import {checkUser, logoutUser} from "../Authentication/AuthService";
import Parse from "parse";


//New navigation with log in functionality
const Navigation = () => (
  <nav>
    <ul>
      <hr />
      {checkUser() ? <label> Hello, {Parse.User.current()?.get("firstName")} </label> :
      <label> Welcome, Please Login or SignUp </label>
      }
      <br/>
      {!checkUser() ? 
      <Link to="/auth">Sign Up / Log In</Link> : 
      // <Link to="/home">Logout</Link>
      <button onClick={() => {logoutUser()}}> Log out </button>
      }
      <br/>
      <hr />
      <Link to="/home">Home</Link>
      <br />
      <hr />
      {checkUser() ? 
      <Link to="/inventory"> Inventory </Link> : 
      <Link to="/auth"> Inventory </Link> 
      }
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
