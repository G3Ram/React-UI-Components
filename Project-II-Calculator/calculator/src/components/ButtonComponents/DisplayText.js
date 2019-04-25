import React from "react";
import "./Button.css";

const DisplayText = props => {
  return (
    <div>
      <button className={props.className}>{props.text}</button>
    </div>
  );
};

export default DisplayText;
