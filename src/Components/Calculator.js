import React, { useState } from "react";
import "./Calculator.css";

function Calculator({ initialValue }) {
  const [operation, setOperation] = useState(initialValue);
  const buttonPress = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "AC") {
      reset();
    } else {
      setOperation(operation + button);
    }

    const calculate = () => {};

    const reset = () => {
      setOperation("");
    };
  };
  return (
    <div className="Calculator">
      <button className="Key" name="+" onClick={buttonPress}>
        +
      </button>
      <button className="Key" name="-" onClick={buttonPress}>
        -
      </button>
      <button className="Key" name="x" onClick={buttonPress}>
        x
      </button>
      <button className="Key" name="÷" onClick={buttonPress}>
        ÷
      </button>
      <button className="Key" name="9" onClick={buttonPress}>
        9
      </button>
      <button className="Key" name="8" onClick={buttonPress}>
        8
      </button>
      <button className="Key" name="7" onClick={buttonPress}>
        7
      </button>
      <button className="Key" name="6" onClick={buttonPress}>
        6
      </button>
      <button className="Key" name="5" onClick={buttonPress}>
        5
      </button>
      <button className="Key" name="4" onClick={buttonPress}>
        4
      </button>
      <button className="Key" name="3" onClick={buttonPress}>
        3
      </button>
      <button className="Key" name="2" onClick={buttonPress}>
        2
      </button>
      <button className="Key" name="1" onClick={buttonPress}>
        1
      </button>
      <button className="Key" name="0" onClick={buttonPress}>
        0
      </button>
      <button className="Key" name="." onClick={buttonPress}>
        .
      </button>
      <button className="Key AC" name="AC" onClick={buttonPress}>
        AC
      </button>
      <button className="Key Equals" name="=" onClick={buttonPress}>
        =
      </button>
    </div>
  );
}
export default Calculator;
