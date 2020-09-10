import React from "react";
import Image from "material-ui-image";

import evanImage from "../assets/img/woods.jpg";

const About: React.FC = () => {
  return (
    <div className="about-body">
      <div className="about-body-text">
        <h3>
          My name is Evan Hirsh. I'm a software engineer with years of experience
          in full stack / distributed systems, starting full time at Microsoft
          this summer.
        </h3>
      </div>
      <Image
        onClick={() =>
          console.log("Image clicked. Will do something with this later lmao")
        }
        src={evanImage}
        aspectRatio={8.5 / 11}
      />
    </div>
  );
};

export default About;
