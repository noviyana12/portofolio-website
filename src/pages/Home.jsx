import React from "react";
import { Header, Contact, Service, Resume, Projects, Blog } from "../components";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button} from "react-bootstrap";
import "../assets/styles/homepage.css";
import banner from "../assets/images/banner-pic.png";
import line_banner from "../assets/images/line-banner.svg";
import { NavHashLink } from "react-router-hash-link";


const Home = () => {
    return (
        <div>
        <Header />
        <section className="banner-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={3} sm={12} xs={12} className="profile-banner-section">
                        <h2>Noviyana</h2>
                        <img src={line_banner} alt="line banner" className="line-banner" width="100"/>
                        <div className="contact-banner-section">
                            <p><a href="https://www.instagram.com/novyna__" target="_blank">Instagram</a> | </p>
                            <p><a href="https://www.linkedin.com/in/noviyana-ling12/" target="_blank">LinkedIn</a> |</p>
                            <p><a href="https://github.com/noviyana12" target="_blank">Github</a> |</p>
                            <p><a href="https://dribbble.com/noviyanaling" target="_blank">Dribbble</a></p>
                        </div>
                        <Button variant="warning" className="download-cv-btn"><Link to="/files/myfile.pdf" target="_blank" download>Download CV</Link></Button>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <img src={banner} alt="banner-pic" className="banner-pic"/>
                    </Col>
                    <Col md={3} sm={12} xs={12} className="intro-banner-section">
                        <p className="section-subtitle">INTRODUCTION</p>
                        <h3 className="section-title">UI/UX Designer, Web Developer</h3>
                        <p className="section-sentence">Need someone who think out of the box when developing your app? You've come into the right place!</p>
                        <NavHashLink smooth to="/#resume" className="intro-learn-more"><span>Learn more <i className="ri-arrow-down-line"></i></span></NavHashLink>
                    </Col>
                </Row>
            </Container>
        </section>
        <Service />
        <Resume />
        <Projects />
        <Blog />
        <Contact />
        </div>
    );
};

export default Home;