import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <p>
        Legal-<span>AI</span>
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;

  p {
    font-size: 1.2rem;
    color: var(--black);

    span {
      font-weight: 700;
      color: var(--blue);
    }
  }
`;

export default Nav;
