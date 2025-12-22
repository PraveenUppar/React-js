import { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <div
        onClick={() => setIsOn(!isOn)}
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: isOn ? "green" : "gray",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          paddingLeft: isOn ? "30px" : "0px",
          cursor: "pointer",
          transition: "all 0.3s",
          color: "white",
        }}
      >
        ●
      </div>
      <p>{isOn ? "ON" : "OFF"}</p>
    </div>
  );
}

export default ToggleSwitch;
