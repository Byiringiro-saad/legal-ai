import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

const Form = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export default Form;
