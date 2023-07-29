import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import { useState, useEffect } from "react";
function App() {
  const [name, setName] = useState("Unknown");

  useEffect(() => {
    // Make an http request to our server for the name
    axios.get("/api/name").then((response) => {
      // update 'name' to be the name from our server
      setName(response.data.name);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name} is the best!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
