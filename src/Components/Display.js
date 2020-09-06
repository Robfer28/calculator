import React from "react";
import "./Display.css";

function Display({ operation }) {
  return (
    <div className="Display">
      <h2 className="Display-Text">{operation}</h2>
    </div>
  );
}
export default Display;
