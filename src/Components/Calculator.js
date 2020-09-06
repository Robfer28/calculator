import React, { useState } from "react";
import CalculatorKeys from "./CalculatorKeys";
import Display from "./Display";
import "./Calculator.css";

function Calculator({ initialValue }) {
  const [operation, setOperation] = useState(initialValue);

  const buttonPress = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "AC") {
      reset();
    } else {
      doMath(operation + button);
    }
  };
  const doMath = () => {};
  const calculate = () => {};

  const reset = () => {
    setOperation("");
  };

  return (
    <div>
      <Display operation={operation} />
      <CalculatorKeys onClick={buttonPress} />
    </div>
  );
}
export default Calculator;
