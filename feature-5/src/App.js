// import logo from './logo.svg';
import './App.css';
import * as Env from "./environments";
import Parse from "parse";
import Components from "./Components/Components.js";


Parse.initialize(Env.SERVER_URL,Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);

function App() {
  return <Components />;
}

export default App;
