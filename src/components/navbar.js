import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navbar.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        bg="none"
        className="d-flex justify-content-center w-100"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Container className="navbarContainer px-3 align-items-center">
          <Navbar.Brand href="/" className="fw-bold">
            <h3 className="px-0 m-0 text-light">LOGO</h3>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="gamburger"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link
                to="about"
                className="mx-2 text-decoration-none text-light text-center py-1"
              >
                Biz haqimizda
              </Link>
              <Link
                to="contact"
                className="mx-2 text-decoration-none text-light text-center py-1"
              >
                Aloqa
              </Link>
              <Link
                to="table"
                className="mx-2 text-decoration-none text-light text-center py-1"
              >
                Ro'yxat
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
