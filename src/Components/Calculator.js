import React, { useState } from "react";
import CalculatorKeys from "./CalculatorKeys";
import Display from "./Display";
import "./Calculator.css";
//falta poner resultado en display y numeros decimales
function Calculator({ initialValue }) {
  const [operation, setOperation] = useState(initialValue);
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");

  const DisplayValue = (num) => {
    setOperation(`${(operation + num).replace(/^0+/, "")}`);
  };

  const SetCalcFunct = (type) => {
    if (operation) {
      setFunctionType(type);
      setStoredNumber(operation);
      setOperation("");
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

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
          setStoredNumber(storedNumber - operation);
          break;
        case "/":
          setStoredNumber(storedNumber / operation);
          break;
        case "x":
          setStoredNumber(storedNumber * operation);
          break;
        default:
          break;
      }
      setOperation("");
    }
  };

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
    } else {
      DisplayValue(button);
    }
  };

  const reset = () => {
    setOperation(0);
    setStoredNumber("");
    setFunctionType("");
  };

  return (
    <div>
      <Display operation={operation} />
      <CalculatorKeys onClick={buttonPress} />
    </div>
  );
}
export default Calculator;
