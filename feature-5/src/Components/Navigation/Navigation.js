import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <hr />
      <Link to="/loginPage">Login</Link>
      <br />
      <hr />
      <Link to="/home">Home</Link>
      <br />
      <hr />
      <Link to="/inventory">Inventory</Link>
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
