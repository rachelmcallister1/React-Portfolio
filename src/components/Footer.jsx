import React from "react";
import githubimage from "../assets/githubimage.png";

const Footer = () => {
  return (
    <section className="footer-content">
      <div className="footer-content">
      <a href="https://github.com/rachelmcallister1" target="_blank" rel="noreferrer">
          <img className="footer-content" src={githubimage} alt="GitHub link"></img>
        </a>
        {/* <a href="https://github.com/rachelmcallister1" target="_blank" rel="noreferrer">
          <img className="footer-content" src={githubimage} alt="GitHub link"></img>
        </a> */}
      </div>
      {/* or make new div */}
    </section>
  );
};

export default Footer;
//download images from Halima or Kar's repo (Github, linkedin, stackoverflow)