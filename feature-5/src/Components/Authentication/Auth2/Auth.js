import React from "react";
import { Link } from "react-router-dom";

const AuthModule = () => {
  return (
    <div>
      <Link to="/authRegister">
        <button>Register</button>
      </Link>
      <br />
      <br />
      <Link to="/loginPage">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
