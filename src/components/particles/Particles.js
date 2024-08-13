import React from "react";
import './particles.css';

export default function Particles() {
  return (
    <div class="background-particles">
      <div class="particle" style={{top: "10%", left: "20%"}}></div>
      <div class="particle" style={{top: "30%", left: "80%"}}></div>
      <div class="particle" style={{top: "70%", left: "50%"}}></div>
      <div class="particle" style={{top: "40%", left: "10%"}}></div>
      <div class="particle" style={{top: "60%", left: "90%"}}></div>
    </div>
  );
}
