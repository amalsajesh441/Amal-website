import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/amaldev_protfolio.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My passion for programming has led me to acquire a solid
              understanding of its fundamentals.
              <br />
              <br />I have a strong foundation in{" "}
              <i>
                <b className="purple mx-1"> Ruby on Rails </b>
              </i>{" "}
              for back-end development.
              <br />
              <br />I am skilled in both{" "}
              <b className="purple mx-1"> React.js </b>and{" "}
              <b className="purple mx-1"> Angular </b>for creating dynamic and
              responsive user interfaces.
              <br />
              <br />I focus on delivering web applications that provide an
              exceptional user experience.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                width="80%"
                height="80%"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amalsajesh441"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amaldev-k-s/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-app-tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiIndeed />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/amaldev_k_sajesh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
