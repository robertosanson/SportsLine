// import logo from './logo.svg';
import './App.css';
import * as Env from "./environments";
import Parse from "parse";
import Components from "./Components/Components.js";


Parse.initialize(Env.SERVER_URL,Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
// Parse.serverURL(Env.SERVER_URL);

function App() {
  return <Components />;
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
