import React, { useState } from "react";
import CalculatorKeys from "./CalculatorKeys";
import Display from "./Display";
import "./Calculator.css";

function Calculator({ initialValue }) {
  const [operation, setOperation] = useState(initialValue);
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");

  //displays numbers to the screen
  const DisplayValue = (button) => {
    setOperation(
      `${(operation === "0" ? button : operation + button).replace(/^0+/, "")}`
    );
  };

  //adds decimal dot
  const Decimal = (button) => {
    if (operation !== button) {
      setOperation(operation + button);
    }
  };

  //stores the operator to functionType
  const SetCalcFunct = (type) => {
    setFunctionType(type);
    setStoredNumber(operation);
    setOperation("");
  };

  //math operations
  const calculate = () => {
    if (operation && storedNumber) {
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) + parseFloat(operation)) * 100}`
              ) / 100
            }`
          );
          break;
        case "-":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) - parseFloat(operation)) * 100}`
              ) / 100
            }`
          );
          break;
        case "/":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) / parseFloat(operation)) * 100}`
              ) / 100
            }`
          );
          break;
        case "x":
          setStoredNumber(
            `${
              Math.round(
                `${parseFloat(storedNumber) * parseFloat(operation) * 100}`
              ) / 100
            }`
          );
          break;
        default:
          break;
      }
      setOperation("");
    }
  };

  //button handler, derives to functions
  const buttonPress = (button) => {
    if (button === "=") {
      calculate();
    } else if (
      button === "+" ||
      button === "-" ||
      button === "x" ||
      button === "/"
    ) {
      SetCalcFunct(button);
    } else if (button === "AC") {
      reset();
    } else if (button === ".") {
      Decimal(button);
    } else {
      DisplayValue(button);
    }
  };

  // resets display and operation state
  const reset = () => {
    setOperation(0);
    setStoredNumber("");
    setFunctionType("");
  };

  return (
    <div>
      <Display
        operation={
          !operation.length && !storedNumber ? 0 : operation || storedNumber
        }
      />
      <CalculatorKeys onClick={buttonPress} />
    </div>
  );
}
export default Calculator;
