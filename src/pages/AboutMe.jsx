import React from "react";
import imageofme from "../assets/imageofme.png";

const AboutMe = () => {
  return (
    <section>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <img className="image-of-me"
          src={imageofme}
          alt="pic of me"
        ></img>
      <h1>
          Hello!
          <br className="hidden lg:inline-block" />
          {/* My name is Rachel and I XYZ. */}
        </h1>
        <p>My name is Rachel M and I'm a full stack developer</p>
      </div>
    </section>
  );
};

export default AboutMe;