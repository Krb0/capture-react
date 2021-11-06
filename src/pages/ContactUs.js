import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <a href="https://twitter.com/">Send Us A Message</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <a href="https://twitter.com/">Send Us an Email</a>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <a href="https://twitter.com/">Social Media</a>
          </Social>
        </Hide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  background: #fff;
  padding: 5rem 10rem;
  color: #353535;
  @media (max-width: 1300px) {
    padding: 5rem 2rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  h2 {
    font-weight: 500;
    font-size: 3rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #313131;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  a {
    color: #313131;
    margin: 1rem;
    font-size: 3rem;
  }
`;
export default ContactUs;
