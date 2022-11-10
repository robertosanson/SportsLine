import React from "react";
import { Link } from "react-router-dom";

const LoginAuth = () => {
  return (
    <div>
      <h1>User logged in!</h1>
      <button>
        <Link to="/home">Go Home.</Link>
      </button>
    </div>
  );
};

export default LoginAuth;
