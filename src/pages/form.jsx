import React from "react";
import styled from "styled-components";
import { Widget } from "@typeform/embed-react";

const Form = () => {
  return (
    <Container>
      <Widget id="Eesj1xGc" style={{ width: "100%", height: "700px" }} />
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export default Form;
