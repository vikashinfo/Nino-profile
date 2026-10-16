import { Container, Row, Col, Card } from "react-bootstrap";
import TESTINOMIALS from "./Testinosimal";

function ProjectSection() {
  return (
    <section>
      <Container className="mt-4">
        <Card.Text
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            fontWeight: "800",
            letterSpacing: "1.5px",
          }}
        >
          PROJECT
        </Card.Text>
        <span className="text-black fs-6 fw-bold flex-sm-wrap">
          some recent work
        </span>
        {/* *****************Row - 2 Cards  */}
        <Row className="mb-6">
          <Col md={6}>
            <Card className="bg-red">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1368180409/vector/drinking-cold-mojito-cocktail-surrounded-with-monstera-leaves-vector-illustration.jpg?s=612x612&w=0&k=20&c=yFHcFgPqta7cnr8NmuzphbLPv4iR3FxTf40_-ntj3po="
                alt="Card 1"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/2221005896/photo/warehouse-management-system-dashboard-on-laptop-for-data-analytics-inventory-tracking-and.jpg?s=612x612&w=0&k=20&c=xThQK7uXKkAt39h3b92nOTiglG9w-tqCEt_ZXeI2OaA="
                alt="Card 2"
              />
            </Card>
          </Col>
        </Row>

        {/* Row - ME THREE  3 Cards ************* */}
        <Row className="mt-2">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/645045256/photo/handmade-rose-extract-cosmetic-products-with-fresh-flowers.jpg?s=612x612&w=0&k=20&c=xKlunMfYq4RJvyIYi4DcDT4QC1dxbcGH0FDkyIwTE-A="
                alt="rose-1"
              ></Card.Img>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1456192902/photo/close-up-photo-of-woman-hands-typing-business-report-on-a-laptop-keyboard-in-the-cafe.jpg?s=612x612&w=0&k=20&c=FqziYIh-dMrkG902wxggcPogLVxbWgzMpyaD-s7h3vk="
              ></Card.Img>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/501159740/photo/men-perfume-bottle-isolated.jpg?s=612x612&w=0&k=20&c=m513sB-oLfL_26rfbIabpvauBZ9fUFMmM2b2Wbf7VP4="
                alt="rose-1"
              ></Card.Img>
            </Card>
          </Col>
        </Row>
      </Container>
      <div>
        <TESTINOMIALS />
      </div>
    </section>
  );
}

export default ProjectSection;
