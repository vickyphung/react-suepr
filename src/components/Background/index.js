import './style.css'

import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import  backgroundImage from "../../images/vector-gradient.jpg";



import textImage from "../../images/JSlogo.png";
import astronautImage from "../../images/css3.png";
import planet1Image from "../../images/nodejs.png";
import planet2Image from "../../images/html5.png";
import rocketImage from "../../images/react.png";

const layers = [
  {
    name: "text",
    image: textImage,
    dataDepth: "5"
  },
  {
    name: "astronaut",
    image: astronautImage,
    dataDepth: "2"
  },
  {
    name: "planet1",
    image: planet1Image,
    dataDepth: "4"
  },
  {
    name: "planet2",
    image: planet2Image,
    dataDepth: "3"
  },
  {
    name: "rocket",
    image: rocketImage,
    dataDepth: "6"
  }
];

const Container = Styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
	background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (

    
    <Container backgroundImage={backgroundImage}>



      {/* <div className="bio"> 
          <h3> Software Engineer</h3>
          <p className='tagline'>Coding my way to bohemian rhapsody.</p>
      </div> */}






      <div id="scene">




        {layers.map((l, index) => (
          <img
            key={index}
            data-depth={l.dataDepth}
            src={l.image}
            alt={l.name}
            className="iconFloat"
          />
        ))}



    {/* <h1>Software Engineer</h1> */}
      </div>
      
    </Container>
  );
};

Background.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string
    })
  )
};

Background.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default Background;
