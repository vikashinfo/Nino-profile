import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBaarCOM() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-auto sticky-top">
      <Container className="Container   ">
        <Navbar.Brand
          href="#"
          style={{ fontWeight: "700", fontSize: "2.2rem" }}
        >
          Nino
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{
              fontSize: "16px",
              fontWeight: "700",
            }}
            navbarScroll
          >
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/servie">SERVICES</Nav.Link>

            <Nav.Link href="/Project">PROJECT</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBaarCOM;
