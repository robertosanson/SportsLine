import React from "react";
import { useNavigate } from "react-router-dom";

const MainModule = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/login");
  };

  return (
    <div>
        <h1> Please sign in </h1>
      <input type="checkbox" id="flagBox" />
      <button onClick={buttonHandler}>HOME</button>
    </div>
  );
};

export default MainModule;
