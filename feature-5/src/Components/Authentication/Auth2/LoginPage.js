import React from "react";
import {useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {checkUser, loginUser} from "./AuthService";

const MainModule = () => {
  const navigate = useNavigate();

  const buttonHandlerLogin = () => {
    navigate("/login");
  };

  const buttonHandlerBack = () => {
    navigate("/auth");
  }
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(
            `${userLoggedIn.get("firstName")}, you successfully logged in!`
          );
          navigate("/");
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);

  return (
    <div>
        <h1> Please Login </h1>
      <input type="text"  
      name="email"
      placeholder="Email"
      required
      />
      <br/>
      <input type="password" 
      name="password"
      placeholder="Password"
      min="0"
      required
      />
      <br/>
      <button onClick={buttonHandlerLogin}>Login</button>
      <br/>
      <br/>
      <button onClick={buttonHandlerBack}>Go back</button>
      <br/>
    </div>
  );
};

export default MainModule;
