import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import ilmiosito from "../../Assets/Projects/ilmiosito.png";
import caratglitz from "../../Assets/Projects/caratglitz.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import HomeHealth from "../../Assets/Projects/HomeHealth.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caratglitz}
              isBlog={false}
              title="CaratGlitz"
              description="CaratGlitz is a premier e-commerce jewelry platform offering exquisite craftsmanship. Discover the finest online jewelry store with a global presence in India, Dubai, London, and New York. Experience unparalleled quality and elegance with CaratGlitz, your trusted source for stunning jewelry pieces."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://caratglitz.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeHealth}
              isBlog={false}
              title="Home Health Support"
              description="On-demand health support at your doorstep in India. Trusted by over 10,000 families, our licensed healthcare professionals provide quality care for seniors, people with disabilities, and caregivers. We prioritize safety, patient autonomy, education, and cost-effective services, ensuring positive outcomes through coordinated community and agency resources."
              demoLink="https://homehealthsupport.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ilmiosito}
              isBlog={false}
              title="Editor.io"
              description="Pulicenter Maule specializes in cleaning services for all types of fabrics. We work with maximum efficiency, using the best products and machinery, and we stay up-to-date with the latest techniques and systems on the market."
              demoLink="https://ilmiosito.italiaonline.it/preview/dc295247"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
