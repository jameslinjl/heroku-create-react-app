import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/user").then(response => {
      console.log(response);
    });
  }, []);

  return <div className="App">hello world!</div>;
}

export default App;
