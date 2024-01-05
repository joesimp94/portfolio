import React from "react";
import "./CurrentProjects.css";
import ITMM from "./images/dinoIdle1.png";
import ACPV from "./images/octoIdle1.png";
import SPNL from "./images/uniIdle1.png";

const CurrentProjects = () => {
  console.log("HELLO FROM CURRENTPROJECT COMPONENT");
  return (
    <div>
      <h2>Current Projects</h2>
      <div className="currentProjectContainer">
        <div className="currentProjectCard">
          <h3>ITMM</h3>
          <img src={ITMM} alt="ITMM"></img>
          <p>
            This project is one I am undertaking with my partner and fellow
            coding wizz Cordelia Snape. We both have a love for travelling and
            experiencing different cultures, so to bring this to life we wanted
            to create an interactive map containing different styles of
            traditional music from around the world. You can find her links
            here:
          </p>
        </div>
        <div className="currentProjectCard">
          <h3>ACPV</h3>
          <img src={ACPV} alt="ACPV"></img>
          <p>Some Text</p>
        </div>
        <div className="currentProjectCard">
          <h3>SPNL</h3>
          <img src={SPNL} alt="SPNL"></img>
          <p>Some other text</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjects;
