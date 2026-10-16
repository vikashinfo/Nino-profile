import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ContactCard() {
  return (
    <Container Container className="bg-light p-4 ">
      <Container className="py-3 ">
        <h1 className="fw-bold mb-4 flex-wrap">CONTACT ME</h1>

        <Row className="g-4">
          {/* Left Contact Information */}
          <Col lg={3} md={6} xs={12}>
            <Card className="border-0 h-100 rounded-3">
              <Card.Body className="p-4">
                <div className="mb-4">
                  <i class="fa-solid fa-location-dot"></i>
                  <h6 className="fw-bold mt-3 mb-1">OUR OFFICE:</h6>
                  <p className="text-secondary small mb-0">
                    BIHAR CHHAPRA INDIA
                  </p>
                </div>

                <div className="mb-4">
                  <i class="fa-solid fa-headphones"></i>
                  <h6 className="fw-bold mt-3 mb-1">CONTACT NUMBER:</h6>
                  <p className="text-secondary small mb-0">+91 9060961701</p>
                </div>

                <div className="mb-4">
                  <i class="fa-solid fa-envelope"></i>
                  <h6 className="fw-bold mt-3 mb-1">EMAIL US:</h6>
                  <p className="text-secondary small mb-0">
                    vikashcprinfo@mail.com
                  </p>
                </div>

                <h6 className="fw-bold mb-3">SOCIALS</h6>
                <div className="d-flex gap-2">
                  <Button variant="outline-secondary" size="sm">
                    <i class="fa-brands fa-facebook"></i>
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    <i class="fa-brands fa-github"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Contact Form */}
          <Col lg={7} md={8} xs={12}>
            <Card className="border-0 rounded-3 h-100">
              <Card.Body className="p-4">
                <Form>
                  <Row className="g-3">
                    <Col md={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="small">FULL NAME</Form.Label>
                        <div className="input-group">
                          <Form.Control
                            placeholder="Your full name"
                            className="border-dark rounded-2"
                          />
                          <span className="input-group-text bg-transparent border-0"></span>
                        </div>
                      </Form.Group>
                    </Col>

                    <Col md={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="small">EMAIL ADDRESS</Form.Label>
                        <div className="input-group">
                          <Form.Control
                            type="email"
                            placeholder="exmple@gmail.com"
                            className="border-dark rounded-2 "
                          />

                          <span className="input-group-text bg-transparent border-0"></span>
                        </div>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small">SUBJECT</Form.Label>
                        <Form.Control
                          placeholder="Your Subject"
                          className="border-dark rounded-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small">YOUR MESSAGE</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Write Your message"
                          className="border-dark rounded-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Button
                        type="submit"
                        variant="dark"
                        className="rounded-2 px-4 py-3 small fw-bold"
                      >
                        Send Me Message <i class="fa-regular fa-envelope"></i>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactCard;
