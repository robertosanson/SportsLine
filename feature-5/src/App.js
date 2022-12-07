import './App.css';
import React from "react";
import * as Env from "./environments";
import Parse from "parse";
import Components from "./Components/Components.js";


Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  return <Components />;
}

export default App;
