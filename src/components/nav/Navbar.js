import React from "react";
import "./navbar.css";

export default function Navbar({ mode, setMode }) {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-icon"></div>
        <img
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
          width="50px"
          alt="BookAI Logo"
        />
        BookAI
      </div>
      <nav className={`nav nav-${mode}`}>
        <a href="#">Features</a>
        <a href="#">How It Works</a>
        <a href="#">Roadmap</a>
        <a href="#">API</a>
        <a href="#">Price</a>
        <a href="#">Models</a>
        <a href="#"  id="auth-button">
          Login / Sign Up
        </a>
        <div
          onClick={() => {
            if (mode === "light") {
              setMode("dark");
            } else {
              setMode("light");
            }
          }}
          className="toggle-mode-btn"
        >
          {mode==="light"?<i class="fa-regular fa-moon"></i>:<i class="fa-regular fa-sun"></i>}
        </div>
      </nav>
    </div>
  );
}
