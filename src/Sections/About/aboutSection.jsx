import { Container, Row, Col } from "react-bootstrap";
import "./aboutSectin.css";

const companies = ["amazon", "Walmart", "Walmart", "LinkedIn", "Google"];

function AboutSection() {
  const stats = [
    { number: "8+", label: "Years Of Experience" },
    { number: "1k+", label: "Completed Projects" },
    { number: "90%+", label: "Client Satisfactions" },
  ];
  return (
    <section className="bg-black text-white py-5 ">
      <Container>
        <p className="text-center fw-bold small mb-4">COMPANY I WORKED WITH</p>

        <div className="marquee">
          <div className="marquee-track">
            {[1, 2].map((group) => (
              <div className="marquee-group" key={group}>
                {companies.map((company, index) => (
                  <div className="company-logo" key={index}>
                    <span className="fw-bold fs-5 text-secondary">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <Row className="align-items-start mt-5 pt-md-5 gy-4 w-100">
          {/* Left Title */}
          <Col xs={12} md={3} sm={4}>
            <h6 className="fw-semibold mb-0">About Me</h6>
          </Col>

          {/* Right Content */}
          <Col xs={12} md={9}>
            <span className="fs-5 fs-md-4 lh-base mb-4 w-100">
              I am Nino Walker, a seasoned UX designer with over 8 years of
              experience in crafting intuitive and engaging digital experiences.
              My journey began with a background in graphic design, where I
              discovered my passion for understanding user behavior and
              translating it into seamless interactions.
            </span>

            {/* Statistics */}
            <Row className="mt-4 pt-2 text-center gy-4">
              {stats.map((item, index) => (
                <Col xs={12} sm={4} key={index}>
                  <h2 className="fw-bold display-6 mb-0">{item.number}</h2>

                  <p className="small mb-0">{item.label}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
