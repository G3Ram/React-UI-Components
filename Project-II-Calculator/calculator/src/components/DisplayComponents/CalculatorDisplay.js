import React from "react";
import "./Display.css";
import NumberButton from "../../components/ButtonComponents/NumberButton";
import ActionButton from "../../components/ButtonComponents/ActionButton";

const CalculatorDisplay = () => {
  return (
    <div className="calculatorDisplay">
      <div className="displayRow">
        <NumberButton text="0" className="displayButton" />
      </div>
      <div className="displayRow">
        <ActionButton text="clear" className="actionButton" />
        <NumberButton text="/" className="redNumberButton" />
      </div>
      <div className="displayRow">
        <NumberButton text="7" className="numberButton" />
        <NumberButton text="8" className="numberButton" />
        <NumberButton text="9" className="numberButton" />
        <NumberButton text="X" className="redNumberButton" />
      </div>
      <div className="displayRow">
        <NumberButton text="4" className="numberButton" />
        <NumberButton text="5" className="numberButton" />
        <NumberButton text="6" className="numberButton" />
        <NumberButton text="-" className="redNumberButton" />
      </div>
      <div className="displayRow">
        <NumberButton text="1" className="numberButton" />
        <NumberButton text="2" className="numberButton" />
        <NumberButton text="3" className="numberButton" />
        <NumberButton text="+" className="redNumberButton" />
      </div>
      <div className="displayRow">
        <ActionButton text="0" className="actionButton" />
        <NumberButton text="=" className="redNumberButton" />
      </div>
    </div>
  );
};

export default CalculatorDisplay;
