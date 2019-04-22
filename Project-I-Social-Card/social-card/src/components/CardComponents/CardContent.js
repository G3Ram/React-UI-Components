import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div class="cardContent">
      <h1 className="cardHeader">Get Started with React</h1>
      <p className="cardText">
        React makes it painless to create iteractive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="cardSubText">reactjs.org</p>
    </div>
  );
};

export default CardContent;
