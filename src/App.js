import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Features from "./components/features/Features";


function App() {
  const [mode, setMode] = useState("dark");
  return (
    <div className={`body body-${mode}`}>
      <div className={`container container-${mode}`}>

        <Navbar mode={mode} setMode={setMode} />
        <Hero mode={mode} />
        <Main mode={mode} />
        <Features mode={mode} />

      </div>
    </div>
  );
}

export default App;
