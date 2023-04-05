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
  padding: 0 20px;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export default Form;
