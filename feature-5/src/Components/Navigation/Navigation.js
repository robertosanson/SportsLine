import { Link } from "react-router-dom";
import {checkUser, logoutUser} from "../Authentication/AuthService";
import Parse from "parse";
import "../../styles.css";


//New navigation with log in functionality
const Navigation = () => (
  <nav>
    <ul>
      <hr />
      {/* If the user is signed in there will be a title welcoming the user, but if they are not signed in
      then there will be a title prompting the user to sign in */}
      {checkUser() ? <label className="welcomeTitle"> Hello, {Parse.User.current()?.get("firstName")} </label> :
      <label className="welcomeTitle"> Welcome, Please Login or SignUp </label>
      }
      <br/>
      {/* If the user is signed in, there will ba button to log out, but if the user is not signed in
      then there will be a title that the user could click in order to sign in */}
      {!checkUser() ? 
      <Link to="/auth">Sign Up / Log In</Link> : 
      <button className="logoutButton" onClick={() => {logoutUser()}}> Log out </button>
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
