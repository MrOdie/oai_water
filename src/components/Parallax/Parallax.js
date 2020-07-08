import React from 'react';
import { Parallax } from 'react-scroll-parallax';
//import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';


const ParallaxContainer = ({ data }) => (
  <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
    <Image test="parallax.jpg" />
  </Parallax>
)

export default ParallaxContainer;