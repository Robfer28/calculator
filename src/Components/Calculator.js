import React from "react";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="Calculator">
      <button className="Keypad">+</button>
      <button className="Keypad">-</button>
      <button className="Keypad">x</button>
      <button className="Keypad">÷</button>
      <button className="Keypad">9</button>
      <button className="Keypad">8</button>
      <button className="Keypad">7</button>
      <button className="Keypad">6</button>
      <button className="Keypad">5</button>
      <button className="Keypad">4</button>
      <button className="Keypad">3</button>
      <button className="Keypad">2</button>
      <button className="Keypad">1</button>
      <button className="Keypad">0</button>
      <button className="Keypad">.</button>
      <button className="Keypad AC">AC</button>
      <button className="Keypad Equals">=</button>
    </div>
  );
}
export default Calculator;
