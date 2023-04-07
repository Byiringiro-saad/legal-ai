import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="content">
        <div className="logo" onClick={goHome}>
          <p>Faisala</p>
        </div>
        <div className="nav">
          <Link to="/form" className="link">
            Try it out!
          </Link>
          <p className="button">Sign up for Beta Access</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw - 50px);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray);

  .content {
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    .logo {
      width: auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      p {
        font-size: 1.5em;
        font-weight: 700;
        color: var(--black);
      }
    }

    .nav {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .link {
        text-decoration: none;
        color: var(--black);
      }

      .button {
        cursor: pointer;
        padding: 10px 20px;
        margin: 0 0 0 20px;
        border-radius: 5px;
        color: var(--white);
        background: var(--green);
      }
    }
  }
`;

export default Nav;
