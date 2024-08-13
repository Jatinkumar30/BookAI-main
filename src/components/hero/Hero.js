import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        Explore the Possibilities of{" "}
        <span class="highlight">AI Book Writing</span> with BookAI
      </h1>
      <p class="subtitle">
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <a href="#" class="cta">
        Get Started
      </a>
      <a href="#" class="cta">
        Get API Access
      </a>
    </div>
  );
}
