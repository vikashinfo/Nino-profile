import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";
import AboutSection from "../About/aboutSection";
import ServiceSection from "../Services/Service";
import ProjectSection from "../Projects/Projects";
import BlogCard from "../BLOG/blogs";
import ContactCard from "../Contact/Contacts";

const HeroSection = () => {
  return (
    <section>
      <section className="hero-section">
        <Container fluid className="hero-container">
          {/* Big Heading */}
          <h1 className="hero-title">NINO WALKER</h1>

          <Row className="hero-row align-items-center justify-content-between">
            {/* Left Reviews */}
            <Col lg={4} md={4} className="review-column">
              <div className="review-content">
                <div className="review-avatars">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Reviewer" />
                  <img src="https://i.pravatar.cc/100?img=47" alt="Reviewer" />
                  <img src="https://i.pravatar.cc/100?img=11" alt="Reviewer" />
                </div>

                <h5 className="review-heading">
                  100+ reviews <span>(4.96 of 5)</span>
                </h5>

                <p className="review-text">
                  Five-star reviews from my esteemed clients.
                </p>
              </div>
            </Col>

            {/* Center Profile Image */}
            <Col lg={4} md={4} xs={12} className="profile-column">
              <div className="profile-image-box">
                <img
                  src="https://nino-reactvit.vercel.app/assets/images/about/me.jpg"
                  alt="imges"
                  className="profile-image"
                />
              </div>
            </Col>

            {/* Right Introduction */}
            <Col lg={4} md={4} className="intro-column">
              <div className="intro-content">
                <p className="intro-text">
                  Hi, I'm Walker, a passionate UX Designer dedicated to creating
                  user-friendly digital experiences.
                </p>

                <Button className="contact-btn">Get In touch</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <AboutSection />
      </div>
      <div>
        <ServiceSection />
      </div>
      <div>
        <ProjectSection />
      </div>
      <div>
        <BlogCard />
      </div>
      <div>
        <ContactCard />
      </div>
    </section>
  );
};

export default HeroSection;
