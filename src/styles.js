import styled from "styled-components";
import { motion } from "framer-motion";
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    font-weight: bolder;
  }
  @media (max-width: 1300px) {
    margin: 3rem auto;
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const StyledImage = styled.div`
  flex: 1;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      object-position: 0% 15%;
      height: auto;
    }
  }
`;
export const StyledHide = styled.div`
  overflow: hidden;
`;
