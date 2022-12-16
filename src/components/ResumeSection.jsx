import  React from "react";
import "../assets/styles/homepage.css";
import { Container, Row, Col, Badge } from "react-bootstrap";
import react_logo from "../assets/images/react.svg";
import css_logo from "../assets/images/css-3.svg";
import bootstrap_logo from "../assets/images/bootstrap.svg";
import figma_logo from "../assets/images/figma.svg";
import express_logo from "../assets/images/express.svg";
import git_logo from "../assets/images/git-icon.svg";
import javascript_logo from "../assets/images/javascript.svg";

const ResumeSection = () => {
    return(
        <section className="resume-section" id="resume">
            <Container>
                <div className="section-text text-center">
                    <p className="section-subtitle">RESUME</p>
                    <h3 className="section-title">Skill & Experience</h3>
                    <p className="section-sentence">Curious about experience and tech stack I use? Let's take a look at my resume</p>
                </div>
                <div className="resume-div">
                    <Row>
                        <Col md={4} className="resume">
                            <h4 className="resume-title">Why Choose Me</h4>
                            <p>I have been developing websites since I was in high school. Also, I enjoy exploring the world of UI/UX design because I believe that design is not merely about what we see, but also what we feel.</p>
                            <p>Being leader of a community, I enjoy working in a team because it gives me an opportunity to obtain feedback and develop better.  If you need someone creative and hard-working to work on your project, you can count on me</p>
                        </Col>
                        <Col md={5} className="Experience">
                            <h4 className="resume-title">Experience</h4>
                            <div className="timeline-area">
                                <div className="experience-1">
                                    <h5>BINAR ACADEMY</h5>
                                    <Badge>Full Stack Developer</Badge>
                                    <p>Here me and my team create an airline ticket booking website using React.js and Express.js.</p>
                                </div>
                                <div className="experience-2">
                                    <h5>UI LING</h5>
                                    <Badge>Freelance UI/UX Design</Badge>
                                    <p>Here I provide some User Experience and User Interface design services based on client needs. </p>
                                </div>
                                <div className="experience-2">
                                    <h5>SKILVUL</h5>
                                    <Badge>UI/UX Designer</Badge>
                                    <p>Redesigning Campaign App by adding Gamification Feature to achieve better user engagement.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="skill">
                            <h4 className="resume-title">Skill</h4>
                            <Row>
                                <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={react_logo} alt="react-logo" className="logo"/>
                                    <p>React.Js</p>
                                </Col>
                                <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={bootstrap_logo} alt="bootstrap-logo" className="logo"/>
                                    <p>Bootstrap</p>
                                </Col>
                                <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={css_logo} alt="react-logo" className="logo"/>
                                    <p>CSS</p>
                                </Col>
                                 <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={figma_logo} alt="react-logo" className="logo"/>
                                    <p>Figma</p>
                                </Col>
                                <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={git_logo} alt="git-logo" className="logo"/>
                                    <p>Git</p>
                                </Col>
                                <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={javascript_logo} alt="JS-logo" className="logo"/>
                                    <p>Javascript</p>
                                </Col>
                                <Col md={4} sm={4} xs={4} className="text-center skill-col">
                                    <img src={express_logo} alt="xd-logo" className="logo" width="80"/>
                                    <p>Express.js</p>
                                </Col>
                            </Row>
                        
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ResumeSection;