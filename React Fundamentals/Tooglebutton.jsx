import React, { useState } from "react";

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Current State: {isVisible ? "Visible" : "Hidden"}</h2>
      {isVisible && <p>This content is now visible!</p>}
      <button onClick={toggle} style={{ marginRight: "10px" }}>
        Toggle
      </button>
    </div>
  );
}

export default ToggleButton;
