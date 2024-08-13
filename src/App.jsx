import React from "react";

import Title from "./assets/Title.jsx";
import Header from "./assets/Header.jsx";
import Weather from "./assets/Weather";


import "./App.css";
import "./assets/Title.css";
import "./assets/Header.css";
import "./assets/Weather.css";

function App() {
 
  return (
    <div className="App">
      <Title />
      <div className="Weather-App">
        <Header />
        <Weather />
      </div>
    </div>
  );
}

export default App
