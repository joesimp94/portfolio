import React from "react";
import github from "./images/github-mark.png";
import linkedin from "./images/LI-In-Bug.png";
import mail from "./images/goog.png";

const ContactInfo = () => {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>
        Please find me at any of the following links! Don't hesitate to get in
        touch!
      </p>
      <div className="contactInfoIcons">
        <a href="https://github.com/joesimp94">
          <img src={github}></img>
        </a>
        <a href="https://linkedin.com/in/joseph-simpson94">
          <img src={linkedin}></img>
        </a>
        <a href="mailto:josephsimpson94@googlemail.com">
          <img src={mail}></img>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
