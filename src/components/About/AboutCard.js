import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amaldev </span>
            from <span className="purple"> Kerala</span>,
            <span className="purple"> India.</span>
            <br />I am currently employed as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">Techversant</span>.
            <br />I have completed BSC in{" "}
            <span className="purple">Computer Science</span> at{" "}
            <span className="purple">IHRD Vattamkulam</span>,
            <span className="purple"> Kerala</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="purple" /> Grooming Vehicles
            </li>
            <li className="about-activity">
              <ImPointRight className="purple" /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight className="purple" /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be driven to construct something that matters!"{" "}
          </p>
          <footer className="blockquote-footer">Amaldev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
