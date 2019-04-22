import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="headerTitle">
      <h1>Lambda School</h1>
      <span className="subTitle">
        @LambdaSchool <span className="dot" /> 26 jan
      </span>
    </div>
  );
};

export default HeaderTitle;
