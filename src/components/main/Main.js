import React from "react";
import "./main.css";

export default function Main({ mode }) {
  return (
    <div className="main-content">
      <div class={`ai-demo ai-demo-${mode}`}>
        <img
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
          alt="AI Book Generator"
        />
        <div class={`floating-ui top-left floating-ui-${mode}`}>
          <div class="floating-icon"></div>
          <img
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png"
            alt=""
            sizes=""
            srcset=""
            width="90px"
            height="130px"
          />
        </div>
        <div class={`floating-ui bottom-right floating-ui-${mode}`}>
          <div class="floating-icon"></div>
          <span>Chapter complete</span>
        </div>
      </div>
    </div>
  );
}
