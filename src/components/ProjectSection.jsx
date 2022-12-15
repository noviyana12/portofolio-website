import  React from "react";
import "../assets/styles/homepage.css";
import { Container, Row, Col} from "react-bootstrap";
import project_1 from "../assets/images/project-1.png";
import project_2 from "../assets/images/project-2.png";
import project_3 from "../assets/images/project-3.png";
import project_4 from "../assets/images/project-4.png";
import project_5 from "../assets/images/project-5.png";
import project_6 from "../assets/images/project-6.png";
import project_7 from "../assets/images/project-7.png";
import project_8 from "../assets/images/project-8.png";

const ProjectSection = () => {
    return(
        <section className="project-section" id="projects">
            <Container className="text-center">
                <div className="section-text text-center">
                    <p className="section-subtitle">PROJECTS</p>
                    <h3 className="section-title">My Projects</h3>
                    <p className="section-sentence">Let's take a look at some of the projects I've made before</p>
                </div>
                <div className="project-card-div">
                    <Row className="project-card-row">
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <a>
                                <img src={project_1} alt="Edufun" className="card-project-img"></img>
                                <h4>Edufun</h4>
                                <p>Mobile App Design</p>
                            </a>
                            
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <img src={project_2} alt="PPDB Website" className="card-project-img"></img>
                            <h4>PPDB Website</h4>
                            <p>Website Redesign</p>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <a href="https://dribbble.com/shots/18332607" target="_blank">
                                <img src={project_3} alt="Campaign App" className="card-project-img"></img>
                                <h4>Campaign App</h4>
                                <p>Mobile App Redesign</p>
                            </a>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project" id="last-card-project">
                            <a>
                                <img src={project_4} alt="BeAlive" className="card-project-img"></img>
                                <h4>BeAlive</h4>
                                <p>Website Design</p>
                            </a>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <a>
                                <img src={project_5} alt="Peticare" className="card-project-img"></img>
                                <h4>Peticare</h4>
                                <p>Web Application</p>
                            </a>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <a>
                                <img src={project_6} alt="Airline Ticket Booking" className="card-project-img"></img>
                                <h4>Airline Ticket Booking</h4>
                                <p>Web Application</p>
                            </a>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <a >
                                <img src={project_7} alt="Car Rental Website" className="card-project-img"></img>
                                <h4>Car Rental</h4>
                                <p>Web Application</p>
                            </a>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="text-center card-project">
                            <a>
                                <img src={project_8} alt="Travel Indonesia" className="card-project-img"></img>
                                <h4>Travel Indonesia</h4>
                                <p>Web Application</p>
                            </a>
                        </Col>   
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ProjectSection;