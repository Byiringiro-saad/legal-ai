import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// icons
import { TiDocumentText } from "react-icons/ti";

const Report = () => {
  return (
    <Container>
      <div className="header">
        <p className="title">Here is what you can expect</p>
        <p className="para">Similar cases</p>
      </div>
      <div className="content">
        <ol>
          <li>XYZ vs ABC</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
          <li>EFG vs HIJ</li>
        </ol>
      </div>
      <div className="reports">
        <div className="box">
          <p className="title">Winning probability</p>
          <p>0.6</p>
        </div>
        <div className="box">
          <p className="title">Compensation</p>
          <p>$378</p>
        </div>
        <div className="box">
          <p className="title">Duration</p>
          <p>3 Days</p>
        </div>
      </div>
      <div className="buttons">
        <Link className="button" to="/form/download">
          Download this report
        </Link>
        <div className="create">
          <TiDocumentText className="icon" />
          <p>Create court filling document</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .header {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
      color: var(--black);
    }

    p.title {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }

  .content {
    width: 100%;
    height: 450px;
    padding: 20px 40px;
    overflow-y: scroll;
    background: var(--gray);
    border-radius: 5px;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 10px;
      padding: 0 20px 0 0;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--black);
      border-radius: 10px;
    }

    li {
      margin: 0 0 10px 0;
    }
  }

  .reports {
    width: 100%;
    height: 100px;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .box {
      width: 30%;
      border-radius: 5px;
      height: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: var(--gray);

      p {
        color: var(--black);
      }

      p.title {
        font-weight: 700;
      }
    }
  }

  .buttons {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    .button {
      width: 250px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      background: var(--green);
      color: var(--white);
      border-radius: 5px;
      cursor: pointer;
    }

    .create {
      width: 300px;
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .icon {
        font-size: 1.4em;
        margin: 0 5px 0 0;
      }
    }
  }
`;

export default Report;
