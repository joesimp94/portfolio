import React from "react";
import mokpo from "./images/IMG_3077.jpg";
import hickorys from "./images/IMG_0837.jpg";
import mongolia from "./images/IMG_1716.jpg";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="aboutInfoContainer">
      <div className="aboutInfoCard">
        <h2>About Me</h2>
        <div className="image-cluster">
          <img src={mokpo} alt="mokpo"></img>
          <img src={hickorys} alt="hickorys"></img>
          <img src={mongolia} alt="mongolia"></img>
        </div>
        <p>
          Born in Southampton in '94, I was pre-installed with a passion for
          languages and travelling. I spent my childhood learning French at
          school, only to throw it all away at university and trade languages
          for Chinese. Since graduating, I have spent my twenties living abroad,
          starting in China then migrating to South Korea. It was in these
          high-tech countries that I truly became enamoured with learning to
          code and software development, and after arriving back home earlier
          this year I began my full-stack development course to do just that.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
