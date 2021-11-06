import React from "react";

// icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices animate={controls} variants={scrollReveal} ref={element}>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="Efficiency Icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="Time Icon" />
              <h3>Fastest</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="Money Icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="Teamwork Icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="Camera" />
      </StyledImage>
    </StyledServices>
  );
};
const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0.6rem;
      background: white;
      color: black;
      padding: 1rem;
      width: 35%;
      text-align: center;
    }
  }
  @media (max-width: 530px) {
    display: inline-block;
    align-items: center;
    p {
      margin-right: 0;
    }
  }
`;
export default ServicesSection;
