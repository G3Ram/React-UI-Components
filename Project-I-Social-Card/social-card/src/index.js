import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const Index = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById("root"));
