import React from "react";
import styled from "styled-components";

// images
import logo from "../assets/favicon.ico";

const Nav = () => {
  return (
    <Container>
      <div className="content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <a href="#" className="link blue">
            We're hiring!
          </a>
          <p className="link ">Join our Waitlist</p>
          <a href="#" className="link last">
            Resources
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
    }

    .nav {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .link {
        margin: 0 20px;
        text-decoration: none;
        color: var(--black);
      }

      .blue {
        color: var(--blue);
        text-decoration: underline;
      }

      .last {
        margin: 0 0 0 20px !important;
      }
    }
  }
`;

export default Nav;
