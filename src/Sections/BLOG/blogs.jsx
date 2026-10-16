import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function BlogCard() {
  return (
    <Container fluid className="bg-dark py-5">
      <Row className="justify-content-center">
        <Col md={8} className="mb-5">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            STORIES
          </h1>
          <Card border="light" className="bg-dark text-white">
            <Row className="g-0">
              {/* Left Side - Text */}

              <Col md={6}>
                <Card.Img
                  src="https://media.istockphoto.com/id/1299655280/photo/apps-installed-on-a-samsung-galaxy-s21-smart-phone.jpg?s=612x612&w=0&k=20&c=w6rUAXJgmXJ8YMwqy5Ry59Vfw_334GYn72ZNsapmdlQ="
                  alt="Example"
                  className="h-100 w-100"
                />
              </Col>
              {/* Right Side - Image */}

              <Col md={6} className="d-flex align-items-center p-4">
                <div>
                  <p style={{ fontSize: "10px" }}>Posted on Aug 28</p>
                  <h3>CREATE A LANDING PAGE THAT PERFORMS GREAT</h3>
                  <div style={{ padding: "20px" }}>
                    <Button className="contact-btn custom-btn mt-2 bg-info text-black ">
                      Read more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 2card */}
        <Col md={8} className="mb-5">
          <Card border="light" className="bg-dark text-white">
            <Row className="g-0">
              {/* Right Side - Image */}
              <Col md={6}>
                <Card.Img
                  src="https://media.istockphoto.com/id/2221005896/photo/warehouse-management-system-dashboard-on-laptop-for-data-analytics-inventory-tracking-and.jpg?s=612x612&w=0&k=20&c=xThQK7uXKkAt39h3b92nOTiglG9w-tqCEt_ZXeI2OaA="
                  alt="Example"
                  className="h-100 w-100"
                />
              </Col>
              {/* Left Side - Text */}
              <Col md={6} className="d-flex align-items-center p-4">
                <div>
                  <p style={{ fontSize: "10px" }}>Posted on Aug 28</p>
                  <h3>STARING AND GROWING A CAREER IN WEB DESIGN</h3>
                  <div style={{ padding: "20px" }}>
                    <Button className="contact-btn custom-btn mt-2 bg-info text-body ">
                      Read more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* 3 card */}
        <Col md={8}>
          <Card border="light" className="bg-dark text-white">
            <Row className="g-0">
              {/* Left Side - Image */}
              <Col md={6}>
                <Card.Img
                  src="https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.jpg?s=612x612&w=0&k=20&c=U53dUb_GsOqsngIbknNaIQhW32dGbTIbCDSAIKV2nHM="
                  alt="Example"
                  className="h-100 w-100"
                />
              </Col>
              {/* Right Side - Text */}
              <Col md={6} className="d-flex align-items-center p-4">
                <div>
                  <p style={{ fontSize: "10px" }}>Posted on Aug 28</p>
                  <h3>HOW CAN DESIGNERS PREPARE FOR THE FUTURE</h3>
                  <div style={{ padding: "20px" }}>
                    <Button className="contact-btn custom-btn mt-2 bg-info text-black ">
                      Read more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default BlogCard;
