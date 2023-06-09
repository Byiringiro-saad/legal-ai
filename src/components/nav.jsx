import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

//icons
import { BsRocketTakeoffFill } from "react-icons/bs";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate("/");
  };

  const goToProduct = () => {
    if (location.pathname === "/") {
      navigate("/form");
    }
  };

  return (
    <Container>
      <div className="content">
        <div className="logo" onClick={goHome}>
          <p>Faisala</p>
        </div>
        <div className="nav">
          <Button onClick={goToProduct} disabled={location.pathname !== "/"}>
            <BsRocketTakeoffFill className="icon" />
            <p>Try the product</p>
          </Button>
        </div>
      </div>
    </Container>
  );
};

const Button = styled.div`
  width: 300px;
  height: 60px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--green);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};

  p {
    color: var(--white);
  }

  .icon {
    font-size: 1.3em;
    margin: 0 10px 0 0;
    color: var(--white);
  }

  :hover {
    background: var(--green);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    p {
      color: var(--white);
    }

    .icon {
      color: var(--white);
    }
  }
`;

const Container = styled.div`
  width: calc(100vw - 50px);
  height: 100px;
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
    }
  }
`;

export default Nav;
