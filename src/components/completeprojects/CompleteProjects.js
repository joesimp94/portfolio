import React from "react";
import "./CompleteProjects.css";
import tamagotchi from "./images/tamagotchi.png";
import catsforlife from "./images/cats4lyf.png";
import instaclone from "./images/instaclone.png";
import boxedoff from "./images/boxedoff.png";

const CompleteProjects = () => {
  return (
    <div>
      <h2>Complete Projects</h2>
      <div className="completeProjectContainer">
        <div className="completeProjectCard">
          <h3>Virtual Pet</h3>
          <img src={tamagotchi} alt="Virtual Pet Project"></img>
          <p>
            This was my first group project. We were asked to design three pets
            that had multiple unique actions in order to keep them alive. We
            used local storage to store the best times in the browser, so the
            game would have replayability.
          </p>
        </div>
        <div className="completeProjectCard">
          <h3>E-Commerce Website</h3>
          <img src={catsforlife} alt="E-Commerce Project"></img>
          <p>
            For this project, we were required to use external APIs to create a
            store in which items were all unique and could be added and removed
            from a basket, as well as a checkout page.
          </p>
        </div>
        <div className="completeProjectCard">
          <h3>Instagram Clone</h3>
          <img src={instaclone} alt="Instagram Clone Project"></img>
          <p>
            This was the first project we tackled which used front and back end
            coding, using react.js in the front and sequelize in the back. This
            project was great to practice work flow, using trello for work
            tickets and github strategies to avoid conflicts.
          </p>
        </div>
        <div className="completeProjectCard">
          <h3>Boxed Off</h3>
          <img src={boxedoff} alt="Family Management App Project"></img>
          <p>
            This was my final full stack group project. We decided as a group to
            make an app that could be used as a household management app,
            allowing tasks to be set and assigned to members of the house. We
            used an SQL database for the relationships needed between data, and
            react in the front for clean excellent code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompleteProjects;
