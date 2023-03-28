import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <p>Landing page</p>
      <Link to="/form">Get started</Link>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }

  p {
    font-size: 2em;
    font-weight: 700;
    line-height: 100px;
  }

  a {
    width: 150px;
    height: 40px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 3px;
    color: var(--white);
    text-decoration: none;
    background: var(--blue);
  }
`;

export default Home;
