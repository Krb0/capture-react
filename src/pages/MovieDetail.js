import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MovieState from "../movieState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(...currentMovie);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <ScrollTop />
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                description={award.description}
                title={award.title}
                key={award.title}
              />
            ))}
          </StyledAwards>
        </StyledDetails>
      )}
    </>
  );
};
const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    font-weight: 700;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  img[alt="Good Times"] {
    object-position: 0% 70%;
  }
  img[alt="The Racer"] {
    object-position: 0% 20%;
  }
`;
const StyledAwards = styled.div`
  color: white;
  min-height: 50vh;
  display: flex;
  margin: 0rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
    border-radius: 2px;
  }
  p {
    padding: 2rem 0;
  }
`;

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
export default MovieDetail;

/** 
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

`;<ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
          */
