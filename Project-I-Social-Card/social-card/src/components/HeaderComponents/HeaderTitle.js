import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  var moment = require("moment");
  return (
    <div className="headerTitle">
      <h1>Lambda School</h1>
      <span className="subTitle">
        @LambdaSchool <span className="dot" /> {moment().format("Do MMM")}
      </span>
    </div>
  );
};

export default HeaderTitle;
