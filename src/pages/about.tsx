import React from "react";
import Image from "react-bootstrap/Image";
import { Parallax } from "react-scroll-parallax";
import "./about.css";

const About: React.FC = () => {
  return (
    <div>
      {/* <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={}
        bgImageAlt="the cat"
        strength={200}
      >
        Hi. I'm a software engineer with years of experience in backend, full
        stack, and distributed systems. I've worked for high valuation startups
        and trillion dollar companies, and will be starting this fall at
        Microsoft.
        <div style={{ height: "1200px", width: "1200px" }} />
      </Parallax> */}
      <Parallax
        className="about-description-body"
        y={[-20, 20]}
        tagOuter="figure"
      >
        <Image src={process.env.PUBLIC_URL + "img/messy_hair.jpeg"} />
      </Parallax>
    </div>
  );
};

export default About;
