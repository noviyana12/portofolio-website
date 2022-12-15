import  React from "react";
import "../assets/styles/homepage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import blog_1 from "../assets/images/blog-1.svg";
import blog_2 from "../assets/images/blog-2.svg";
import blog_3 from "../assets/images/blog-3.svg";
import blog_4 from "../assets/images/blog-4.svg";

const BlogSection = () => {
    return (
         <section className="blog-section" id="blogs">
            <Container>
                <div className="service-text text-center">
                    <p className="section-subtitle">BLOG</p>
                    <h3 className="section-title">My Blogs</h3>
                    <p className="section-sentence">Besides coding and designing, I also like to share knowledge from what I experience and read on a microblog</p>
                </div>
                <div className="blog-card-div text-center">
                    <Row className="blog-card">
                    <Col md={3} sm={6} xs={12} className="blog-card-col">
                        <a href="https://www.instagram.com/p/ChvxGbgPN3L/" target="_blank"><img src={blog_1} alt="blog-1" className="blog-img"></img></a>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="blog-card-col">
                        <a href="https://www.instagram.com/p/Ch3-WXDPqDz/" target="_blank"><img src={blog_2} alt="blog-2" className="blog-img"></img></a>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="blog-card-col">
                        <a href="https://www.instagram.com/p/Ch1cJiLPO6x/" target="_blank"><img src={blog_3} alt="blog-3" className="blog-img"></img></a>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="blog-card-col">
                        <a href="https://www.instagram.com/p/CiJi6AcPvPH/" target="_blank"><img src={blog_4} alt="blog-4" className="blog-img"></img></a>
                    </Col>
                </Row>
                <Button className="btn-see-more" variant="warning"><a href="https://www.instagram.com/idiotcoding__/" target="_blank">See More</a></Button>
                </div>
                
            </Container>
        </section>
    )
}

export default BlogSection;