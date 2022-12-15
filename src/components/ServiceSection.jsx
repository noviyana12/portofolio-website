import  React from "react";
import "../assets/styles/homepage.css";
import { Container, Row, Col} from "react-bootstrap";
import ui_icon from "../assets/images/ui-icon.png";
import coding_icon from "../assets/images/coding-icon.png";
import mentor_icon from "../assets/images/mentor-icon.png";

const ServiceSection = () => {
    return(
        <section className="service-section" id="services">
            <Container>
                <div className="section-text text-center">
                    <p className="section-subtitle">SERVICES</p>
                    <h3 className="section-title">What I Offer</h3>
                    <p className="section-sentence">With experience ranging from design to development, I offer various services to suit your business needs</p>
                </div>
                <div className="service-card">
                    <Row>
                        <Col md={4} sm={4} xs={12} className="card text-center">
                            <img src={ui_icon} className="serviceIcon"/>
                            <h3>UI/UX Design</h3>
                            <p>Need help designing your web or application's interface? Here I can help you turn ideas into a high-fidelity design</p>
                        </Col>
                        <Col md={4} sm={4} xs={12} className="text-center card">
                            <img src={coding_icon} className="serviceIcon"/>
                            <h3>Web Development</h3>
                            <p>I'm here to help you grow your business efficiently with implementation of web-based application.</p>
                        </Col>
                        <Col md={4} sm={4} xs={12} className="text-center card">
                            <img src={mentor_icon} className="serviceIcon"/>
                            <h3>Mentoring</h3>
                            <p>Having trouble learning design or programming? Here I can help you learn from basic by being a mentor</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ServiceSection;