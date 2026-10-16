import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import

function Footer() {
  return (
    <footer className=" text-dark py-4 mt-5">
      <Container>
        <Row>
          <Col md={12} className="text-center ">
            <span>Have project in mind?</span>
            <h2 style={{ fontSize: "4rem", fontWeight: "bold" }}>LETS WORK</h2>
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "12px",
          }}
        >
          <span>Template by Creative Personal®</span>
          <span> © Copyright vikas 2026 </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
