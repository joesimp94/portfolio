import React from "react";
import "./LandingInfo.css";
import html5 from "./images/HTML5_Badge.svg";
import css3 from "./images/CSS3_logo.svg";
import javascript from "./images/Javascript_Logo.png";
import react from "./images/React-icon.svg";
import node from "./images/Node.js_logo.svg";
import mysql from "./images/mysql-official.svg";

const LandingInfo = () => {
  return (
    <div>
      <h1>Hi, I'm Joe</h1>
      <p>
        I'm a junior full stack developer based out of Ellesmere Port, Cheshire.
        Thank you for taking the time to visit my website!
      </p>
      <h3>
        Tech Stack:
        <img src={html5} alt="html5" />
        <img src={css3} alt="css3" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={node} alt="node" />
        <img src={mysql} alt="mysql" />
      </h3>
    </div>
  );
};
export default LandingInfo;
