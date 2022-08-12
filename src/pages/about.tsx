import React from "react";
import Image from "material-ui-image";

import evanImage from "../assets/img/woods.jpg";

const About: React.FC = () => {
  return (
    <div className="about-body">
      <div className="about-body-text">
        <h3>
          Hey!! I'm a professional software engineer with years of experience
          creating full stack and distributed systems relied on by hundreds of
          thousands of users across the world. I graduated from RIT with a
          degree in computer science, and a minor in computer security. While
          there I also created their{" "}
          <a href="https://ritesports.org">esports program</a>. Right now I am
          making{" "}
          <a href="https://azure.microsoft.com/en-us/services/data-factory/">
            Azure Data Factory
          </a>{" "}
          /{" "}
          <a href="https://azure.microsoft.com/en-us/services/synapse-analytics/#overview">
            Synapse
          </a>{" "}
          at Microsoft. Feel free to email / tweet at me, as I respond quickly!
          Here's a photo of me walking through the woods
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
