import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ABODE",
      description: "  In this project we can take houses, flat and apartment etc on rant for a shorter time period like hotels rooms and this is tourand traveling website. ",
      tech: "In this we use React js as front end, Node js as back end and MySQL as database"
     
    },
    {
      
      title: "THE ULTIMATE GARMENTS",
      description: "It is a e-commerce cloth shopping website. The Customer can purchase cloths and the seller can add their garments.",
      tech: " In this we use React js as front end, Node js as back end and MySQL as database"
    },
    {
      title: "BESTGOODS",
      description: "An e-commerce platform specializing in electronic products, appliances. Explore a seamless online shopping experience dedicated to electronic products, featuring top-notch brands, competitive prices, and convenient delivery options.",
      tech: " In this we use React js as front end, Node js as back end and MySQL as database"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Each project reflects my proficiency in utilizing cutting-edge technologies, such as HTML5, CSS3, JavaScript, and responsive design, to develop intuitive interfaces and optimize performance across various devices. </p> <br/>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
