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
        <p>
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
          Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
          molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit
          sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse
          tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue
          libero quis, commodo purus. Cras iaculis massa ut elit tempor
          malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt
          velit ullamcorper. Suspendisse potenti. Nam varius varius erat.
          Aliquam pulvinar elit ut orci egestas tincidunt. Morbi ornare orci
          ante, mollis posuere lacus accumsan sit amet. Cras ut dignissim ipsum.
        </p>
      </div>
      <div className="reports">
        <div className="box">
          <p className="title">Winning probability</p>
          <p>75%</p>
        </div>
        <div className="box">
          <p className="title">Compensation</p>
          <p>$10k</p>
        </div>
        <div className="box">
          <p className="title">Duration</p>
          <p>3 Months</p>
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
    padding: 40px 35px;
    overflow-y: scroll;
    background: var(--gray);
    border-radius: 5px;
    scrollbar-width: thin;

    p {
      color: var(--dark);
    }

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
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    .button {
      width: 250px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      background: var(--green);
      color: var(--white);
      border-radius: 10px;
      cursor: pointer;
    }

    .create {
      width: 300px;
      height: 40px;
      margin: 0 0 0 20px;
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
