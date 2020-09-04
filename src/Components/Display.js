import React from "react";
import "./Display.css";

function Display({ operation }) {
  return (
    <div className="Display">
      <div className="Display-Text">{operation}</div>
    </div>
  );
}
export default Display;
