import React from "react";
import githubimage from "../assets/githubimage.png";
import linkedinimage from "../assets/linkedinimage.png";
import stackoverflowimage from "../assets/stackoverflowimage.png";

const Footer = () => {
  return (
    <section className="footer-content">
      <div className="footer-content">
      <a href="https://github.com/rachelmcallister1" target="_blank" rel="noreferrer">
          <img className="footer-content" src={githubimage} alt="GitHub link"></img>
        </a>
        <a href="https://www.linkedin.com/in/rachelmcallister0/" target="_blank" rel="noreferrer">
          <img className="footer-content-linkedin" src={linkedinimage} alt="Linkedin link"></img>
        </a>
        <a href="https://stackoverflow.com/users/22255522/rachel" target="_blank" rel="noreferrer">
          <img className="footer-content-stackoverflow" src={stackoverflowimage} alt="Stackoverflow link"></img>
        </a>
      </div>
      {/* or make new div */}
    </section>
  );
};

export default Footer;
//download images from Halima or Kar's repo (Github, linkedin, stackoverflow)