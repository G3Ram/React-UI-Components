import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div>
      <h1 className="appHeader">Calculator Project</h1>
      <CalculatorDisplay />
    </div>
  );
};

export default App;
