import React from "react";

function CalculatorKeys(usage) {
  return (
    <div className="Calculator">
      <button
        className="Key"
        name="+"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        +
      </button>
      <button
        className="Key"
        name="-"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        -
      </button>
      <button
        className="Key"
        name="x"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        x
      </button>
      <button
        className="Key"
        name="/"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        /
      </button>
      <button
        className="Key"
        name="9"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        9
      </button>
      <button
        className="Key"
        name="8"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        8
      </button>
      <button
        className="Key"
        name="7"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        7
      </button>
      <button
        className="Key"
        name="6"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        6
      </button>
      <button
        className="Key"
        name="5"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        5
      </button>
      <button
        className="Key"
        name="4"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        4
      </button>
      <button
        className="Key"
        name="3"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        3
      </button>
      <button
        className="Key"
        name="2"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        2
      </button>
      <button
        className="Key"
        name="1"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        1
      </button>
      <button
        className="Key"
        name="0"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        0
      </button>
      <button
        className="Key"
        name="."
        onClick={(e) => usage.onClick(e.target.name)}
      >
        .
      </button>
      <button
        className="Key AC"
        name="AC"
        onClick={(e) => usage.onClick(e.target.name)}
      >
        AC
      </button>
      <button
        className="Key Equals"
        name="="
        onClick={(e) => usage.onClick(e.target.name)}
      >
        =
      </button>
    </div>
  );
}

export default CalculatorKeys;
