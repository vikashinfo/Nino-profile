import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ServiceSection() {
  return (
    <Container className="mt-4">
      <Card.Title className=" mt-2 fs-1 fw-bold text-center ">
        <p>SERVICES</p>
      </Card.Title>

      <Row className="g-2 bg-light">
        {/* Left big card */}
        <Col md={8}>
          <Card className="h-100">
            <Card.Body>
              <Card.Text className=" mt-3  d-flex justify-content-between text-black">
                <div
                  className=" btn-outline-primary custom-hover"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid #ccc",
                    marginBottom: "2rem",
                  }}
                >
                  <span style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-1"></i>
                  </span>
                </div>
                <span style={{ cursor: "pointer", color: "blue" }}>
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </Card.Text>
              <Card.Title className="fs-2 fw-bold">
                BRAND IDENTITY DESIGN
              </Card.Title>
              <Card.Text>
                Blend of strotegic thinking and creative flair to craft a
                digital identily that resonates and coptivates. kits you need to
                create a true website within minutes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Right small card */}
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Text className=" mt-3  d-flex justify-content-between text-black">
                <div
                  className=" btn-outline-primary custom-hover"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid #ccc",
                    marginBottom: "2rem",
                  }}
                >
                  <span style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-2"></i>
                  </span>
                </div>
                <span style={{ cursor: "pointer", color: "blue" }}>
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </Card.Text>
              <Card.Title className="fs-2 fw-bold">VISUAL DESIGN</Card.Title>
              <Card.Text>
                Blend of artistic intution with strategic insight to craft a
                visual identily.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Left side smail card */}

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Text className=" mt-3  d-flex justify-content-between text-black">
                <div
                  className=" btn-outline-primary custom-hover"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid #ccc",
                    marginBottom: "2rem",
                  }}
                >
                  <span style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-3"></i>
                  </span>
                </div>
                <span style={{ cursor: "pointer", color: "blue" }}>
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </Card.Text>
              <Card.Title className=" mt-3 fs-2 fw-bold">
                UX RESEARCH
              </Card.Title>
              <Card.Text>
                Blend of functionaliy with aesthetic to create delightful
                experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Right side big card */}
        <Col md={8}>
          <Card className="h-100">
            <Card.Body>
              <Card.Text className=" mt-3  d-flex justify-content-between text-black">
                <div
                  style={{
                    width: "23px",
                    height: "23px",
                    border: "1px solid #ccc",
                    marginBottom: "2rem",
                  }}
                >
                  <span style={{ textAlign: "center" }}>
                    <i class="fa-solid fa-4"></i>
                  </span>
                </div>
                <span style={{ cursor: "pointer", color: "blue" }}>
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </Card.Text>
              <Card.Title className=" mt-3 fs-2 fw-bold">
                ARI DIRECTION
              </Card.Title>
              <Card.Text>
                Blend of strategic thinking and artistic finesse to craft a
                visual identily that goes beyond aesthetics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSection;
