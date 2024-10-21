import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import progresstracker from "../../Assets/Projects/Progresstracker.png";
import puresalary from "../../Assets/Projects/Puresalary.jpg";
import skillassure from "../../Assets/Projects/SkillAssure.png";
import afterwords from "../../Assets/Projects/Afterwords.png";
import teamlocum from "../../Assets/Projects/Teamlocum.png";
import foregolf from "../../Assets/Projects/Foregolf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What I've Been <strong className="purple">Up To </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a look at some of my latest projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afterwords}
              isBlog={false}
              title="AfterWords"
              description="AfterWords is a compassionate digital platform designed to preserve and share cherished memories long after we're gone.Built on the reliable Ruby on Rails framework and powered by the PostgreSQL database, AfterWords offers a stable and scalable infrastructure.The project is hosted on GitHub for open-source collaboration and transparency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foregolf}
              isBlog={false}
              title="ForeGolf"
              description="ForeGolf is a comprehensive platform that simplifies the process of buying and selling golf property.ForeGolf is built on the robust Ruby on Rails framework and utilizes the PostgreSQL database for efficient data management. The project is hosted on GitHub, fostering open-source collaboration and transparency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillassure}
              isBlog={false}
              title="SkillAssure"
              description="SkillAssure is a comprehensive platform designed to empower students and test-takers to excel in online exams.SkillAssure is built using a combination of Ruby on Rails for the backend and React.js for the frontend, ensuring a robust and user-friendly experience. The PostgreSQL database provides efficient data storage and retrieval, while GitLab facilitates collaborative development and version control."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={progresstracker}
              isBlog={false}
              title="Progress Tracking Application"
              description="Progress Tracking is a powerful web application designed to streamline the process of evaluating developer progress on tasks. It provides clients and trainers with a centralized platform to track and assess performance, ensuring efficient project management and effective development teams.Built using the robust Ruby on Rails framework for the backend and the dynamic React.js library for the frontend, ensuring a seamless and user-friendly experience. The PostgreSQL database provides efficient data storage and retrieval, while GitLab facilitates collaborative development and version control."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamlocum}
              isBlog={false}
              title="TeamLocum"
              description="TeamLocum is a leading online healthcare services platform dedicated to connecting optic stores, clinics, and pharmacies with qualified healthcare professionals. By providing a seamless integration with backend systems, TeamLocum simplifies the process of managing bookings and delivering a wide range of healthcare services.TeamLocum is built on the robust Ruby on Rails framework, providing a stable and scalable foundation.The PostgreSQL database ensures efficient data management and retrieval."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puresalary}
              isBlog={false}
              title="PureSalary"
              description="PureSalary is a comprehensive platform designed to provide reliable and up-to-date information on job salaries.By exclusively relying on official declarations from employers to government agencies, PureSalary ensures the accuracy and authenticity of its salary data.PureSalary is built on the robust Ruby on Rails framework, providing a stable and scalable platform.The PostgreSQL database ensures efficient data management and retrieval.The project is hosted on GitHub, fostering open-source collaboration and transparency."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
