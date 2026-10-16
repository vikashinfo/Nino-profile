import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testinom.css";

function TESTINOMIALS() {
  return (
    <Container className="mt-4 mb-4">
      <h2 style={{ fontSize: "2.2em", fontWeight: "700", marginTop: "2em" }}>
        TESTINOMIALS
      </h2>
      {/* *****************Row - 2 Cards  */}
      <Row className="mb-6 gy-3 ">
        <Col className="card-conntet p-5" md={6}>
          <Card className="top-images ">
            <Card.Img
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/images/testimonials/author1.jpg"
              alt="Card 1"
            />
          </Card>
          <Card.Body>
            <Card.Text className="py-3  text-secondary">
              Financial planners help people to knowledge in about how to invest
              and in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how
            </Card.Text>
            <Card.Title>Zonathon Doe</Card.Title>
            <span style={{ fontSize: "10px" }}>CEO & Founder X</span>
          </Card.Body>
        </Col>

        <Col className="card-conntet p-5" md={6}>
          <Card className="top-images ">
            <Card.Img
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/images/testimonials/author2.jpg"
              alt="Card 2"
            />
          </Card>
          <Card.Body>
            <Card.Text className="py-3 text-secondary">
              Asian planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>Martin Smith</Card.Title>
            <span style={{ fontSize: "10px" }}>CEO & Founder Google</span>
          </Card.Body>
        </Col>
      </Row>

      {/* Row - ME THREE  3 Cards ************* */}
      <Row className="mt-2 g-3">
        <Col className="card-conntet p-5 " md={4}>
          <Card className="top-images ">
            <Card.Img
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/images/testimonials/author3.jpg"
              alt="Card 3"
            />
          </Card>
          <Card.Body>
            <Card.Text className="py-3 text-secondary">
              Hello planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>Methail Dev</Card.Title>
            <span style={{ fontSize: "10px" }}>
              Managing Director - Paydesk
            </span>
          </Card.Body>
        </Col>

        <Col className="card-conntet p-5" md={4}>
          <Card className="top-images ">
            <Card.Img
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/images/testimonials/author4.jpg"
              alt="Card 4"
            />
          </Card>
          <Card.Body>
            <Card.Text className="py-3 text-secondary">
              Financial planners help people to knowledge in about how to invest
              and in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>Eliana tweet</Card.Title>
            <span style={{ fontSize: "10px" }}>CEO & Founder Tesla</span>
          </Card.Body>
        </Col>
        <Col className="card-conntet p-5" md={4}>
          <Card className="top-images ">
            <Card.Img
              variant="top"
              src="https://nino-reactvit.vercel.app/assets/images/testimonials/author5.jpg"
              alt="Card 5"
            />
          </Card>
          <Card.Body>
            <Card.Text className="py-3 text-secondary">
              Yelp planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </Card.Text>
            <Card.Title>Henry Clark</Card.Title>
            <span style={{ fontSize: "10px" }}>Founder Oxyzen</span>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default TESTINOMIALS;
