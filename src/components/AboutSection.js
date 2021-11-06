import React from "react";
import home1 from "../img/home.png";
import { motion } from "framer-motion";
import {
  StyledHide,
  StyledAbout,
  StyledDescription,
  StyledImage,
} from "../styles";
import { titleAnimation, fade, photoAnimation } from "../animation";
/*import styled from "styled-components";*/
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </StyledHide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have profesionals with amazing skills
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </StyledDescription>
      <StyledImage>
        <motion.img src={home1} alt="" variants={photoAnimation} />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;

/** 
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const container = {
    hidden: {
      x: 100,
    },
    show: {
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.5,
      },
    },
  };
  */
