import React from "react";
import styled from "styled-components";

// icons
import { BsSlack, BsRocketTakeoffFill } from "react-icons/bs";
import { TbArrowsMaximize, TbArrowDownRight } from "react-icons/tb";

// images
import hero from "../assets/hero.png";
import coding from "../assets/coding.jpg";

const Home = () => {
  return (
    <Container>
      <div className="hero">
        <p className="header">
          Develop and manage enterprise grade data models, effortlessly.
        </p>
        <p className="para">
          Accelerate your enterprise AI application development journey with
          pre-built models, no code user interface and model performance assist
          tool.
        </p>
        <p className="something">LOVED BY DEVELOPERS, TRUSTED BY ENTERPRISES</p>
        <div className="button">
          <BsSlack className="icon" />
          <p>Join our Slack Community</p>
        </div>
        <div className="image">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className="features">
        <p className="top">AMAZING</p>
        <p className="header">
          Features of <span>Predixion AI</span>
        </p>
        <div className="container">
          <div className="div">
            <div className="box">
              <div className="circle">
                <TbArrowsMaximize className="icon" />
              </div>
              <div className="text">
                <p className="title">Rapid Model Development</p>
                <p className="para">
                  Create production-ready data models faster with Predixion AI's
                  low-code interface.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="circle">
                <TbArrowsMaximize className="icon" />
              </div>
              <div className="text">
                <p className="title">Optimise Performance with ease</p>
                <p className="para">
                  Monitor and Improve your data model performance with machine
                  powered recommendations
                </p>
              </div>
            </div>
            <div className="box">
              <div className="circle">
                <TbArrowsMaximize className="icon" />
              </div>
              <div className="text">
                <p className="title">Publish data models</p>
                <p className="para">
                  Start model serving directly from the application and get
                  feedback from your friends and colleagues
                </p>
              </div>
            </div>
          </div>
          <div className="div">
            <div className="box">
              <div className="circle">
                <TbArrowsMaximize className="icon" />
              </div>
              <div className="text">
                <p className="title">Pre-built and Customizable Models</p>
                <p className="para">
                  Get started with an existing model or build your own custom
                  model with Predixion AI.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="circle">
                <TbArrowsMaximize className="icon" />
              </div>
              <div className="text">
                <p className="title">Model experiments from your browser</p>
                <p className="para">
                  Save all your cloud resources and perform all heavy duty
                  expriements directly from the browser.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="circle">
                <TbArrowsMaximize className="icon" />
              </div>
              <div className="text">
                <p className="title">Visualisation and Dashboards</p>
                <p className="para">
                  Draw insights from our accurate graphs available to you with
                  click on a button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bigger">
        <img src={coding} alt="hero" />
      </div>
      <div className="faq">
        <p className="title">Frequently Asked Questions</p>
        <div className="container">
          <div className="div">
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                How does Predixion AI make it easier to build data models?
              </p>
              <p className="para">
                Predixion AI makes it easier to build data models by providing a
                low code user interface that allows users to quickly and easily
                customize pre-built models, as well as create custom models.
                This helps data professionals save time and effort and get their
                models up and running faster.
              </p>
            </div>
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                Can I use Predixion AI to create custom models?
              </p>
              <p className="para">
                Yes! Predixion AI provides users with the ability to create
                custom models from scratch using its low code user interface.
                This makes it easy for users to create models tailored to their
                specific needs and tasks.
              </p>
            </div>
          </div>
          <div className="div">
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                What features does Predixion AI have for managing data models?
              </p>
              <p className="para">
                Predixion AI provides a comprehensive suite of features for
                managing data models. It allows users to track their models'
                performance over time, identify areas of improvement and quickly
                make adjustments to keep their models running optimally.
              </p>
            </div>
            <div className="box">
              <p className="header">
                <TbArrowDownRight className="icon" />
                Does Predixion AI provide support for existing models?
              </p>
              <p className="para">
                Absolutely! Predixion AI provides extensive support for existing
                models. Its user interface allows users to easily adjust their
                models and optimize their performance over time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="waitlist">
        <p className="title">
          Build and Manage Production-Ready Models Quickly and Easily with
          Predixion AI.
        </p>
        <div className="button">
          <BsRocketTakeoffFill className="icon" />
          <p>Join the Waitlist</p>
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
  align-items: center;

  .hero {
    height: auto;
    display: flex;
    padding: 50px 20px;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    p.header {
      font-size: 3.5em;
      margin: 10px 50px;
      text-align: center;
      font-weight: 700;
      line-height: 60px;
    }

    p.para {
      width: 70%;
      margin: 10px 0;
      text-align: center;
      color: var(--black);
    }

    p.something {
      margin: 10px 0;
      font-weight: 700;
      color: var(--blue);
    }

    .button {
      margin: 10px 0;
      padding: 15px 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: var(--blue);
      cursor: pointer;

      .icon {
        font-size: 1.2em;
        margin: 0 10px 0 0;
        color: var(--white);
      }

      p {
        color: var(--white);
      }
    }

    .image {
      width: 65%;
      margin: 20px 0;

      img {
        width: 100%;
      }
    }
  }

  .features {
    height: auto;
    display: flex;
    margin: 40px 0;
    padding: 40px 50px 20px 50px;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    background: #dbeafe;
    color: var(--black);

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    p.top {
      color: var(--blue);
    }

    p.header {
      font-size: 3em;
      font-weight: 700;
    }

    .container {
      width: 90%;
      height: auto;
      margin: 50px 0 0 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px;

      .div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .box {
          width: 100%;
          height: auto;
          display: flex;
          margin: 0 0 50px 0;
          flex-direction: row;

          .circle {
            width: 70px;
            height: 50px;
            margin: 0 10px 0 0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--blue);

            .icon {
              color: var(--white);
            }
          }

          .text {
            height: auto;

            p.title {
              font-size: 1.5em;
              font-weight: 700;
            }

            p.para {
              margin: 10px 0 0 0;
            }
          }
        }
      }
    }
  }

  .bigger {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    img {
      width: 60%;
    }
  }

  .faq {
    height: auto;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    color: var(--black);
    margin: 40px 0;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    .title {
      font-size: 3em;
      font-weight: 700;
      margin: 0 0 40px 0;
    }

    .container {
      width: 90%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px;

      .div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .box {
          width: 100%;
          height: auto;
          display: flex;
          margin: 0 0 40px 0;
          flex-direction: column;

          p.header {
            font-size: 1.5em;
            font-weight: 700;

            .icon {
              font-size: 1.6em;
              margin: 0 5px -7px 0;
              color: var(--blue);
            }
          }

          p.para {
            margin: 10px 0 0 0;
          }
        }
      }
    }
  }

  .waitlist {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    padding: 20px 30px;
    background: var(--blue);
    border-radius: 5px;

    @media only screen and (min-width: 1200px) {
      width: 800px;
    }

    @media only screen and (max-width: 1200px) {
      width: 70%;
    }

    p.title {
      font-size: 2em;
      font-weight: 700;
      text-align: center;
      color: var(--white);
    }

    .button {
      width: auto;
      height: 50px;
      margin: 20px 0;
      padding: 0 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: var(--white);
      cursor: pointer;

      p {
        color: var(--blue);
      }

      .icon {
        font-size: 1.3em;
        margin: 0 10px 0 0;
        color: var(--blue);
      }
    }
  }
`;

export default Home;
