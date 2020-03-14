import React from "react";
import Image from "material-ui-image";

import evanImage from "../assets/img/guggenheim.jpeg";

const About: React.FC = () => {
  return (
    <div className="about-body">
      <div className="about-body-text">
        <h3>
          My name is Evan Hirsh. I'm software engineer with experience in full
          stack / distributed systems who will be working at Microsoft full time
          this fall.
        </h3>
      </div>
      <Image
        onClick={() =>
          console.log("Image clicked. Will do something with this later lmao")
        }
        src={evanImage}
        aspectRatio={9 / 11}
      />
    </div>
  );
};

export default About;
