import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/ProtectedRoutes.js";
import LoginAuth from "./LoginAuth.js";

const MainHome = () => {
  const [flag, setFlag] = useState(false);

  var check = document.getElementById("flagBox");

  useEffect(() => {
    if (check && check.checked) {
      console.log("authorized!");
      setFlag(true);
    } else {
      console.log("unauthorized!");
      setFlag(false);
    }
  }, [check]);

  return (
    <div>
      <ProtectedRoute exact path="/loginAuth" flag={flag} element={LoginAuth} />
    </div>
  );
};

export default MainHome;
