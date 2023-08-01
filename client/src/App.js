import React from "react";
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
     
    </div>
  );
}

export default App;
