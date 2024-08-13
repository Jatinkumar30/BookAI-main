import React from "react";
import "./features.css";

export default function Features() {
  return (
    <section id="features" className="features">
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-robot"></i>
        </div>
        <h3>AI-Powered Writing</h3>
        <p>Generate high-quality content with advanced AI technology.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-book"></i>
        </div>
        <h3>Custom Genres</h3>
        <p>Create stories in any genre or blend multiple styles.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-download"></i>
        </div>
        <h3>Instant Download</h3>
        <p>Get your completed book in various formats instantly.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <i class="fas fa-language"></i>
        </div>
        <h3>Multilingual</h3>
        <p>Generate content in multiple languages effortlessly.</p>
      </div>
    </section>
  );
}
