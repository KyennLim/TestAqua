import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/Users/test/Desktop/AquaPrint/src/assets/image/AquaPrintLogo.png';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Aboutus', {replace:true});
    }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" style={{ marginLeft: '20px' }}>
          <img
            src={logo}
            alt="AquaPrint Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          AquaPrint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: '20px' }}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#donate">Donate</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="p-5 text-center bg-light">
        <Row>
          <Col>
            <img
              src={logo}
              alt="AquaPrint Logo"
              width="120"
              height="120"
              className="d-inline-block align-top"
            />{' '}
            <br />
            <h1>Welcome to AquaPrint</h1>
            <h2>Revitalize the Ocean with Corals</h2>
            <p>Join us in our mission to restore marine ecosystems by donating and learning more about our work.</p>
            <Button variant="primary" href="#donate">Donate Now</Button>
          </Col>
        </Row>
      </Container>
      <Container id="about" className="p-5">
        <Row>
          <Col>
            <h2>About AquaPrint</h2>
            <p>AquaPrint is dedicated to revitalizing ocean life through coral restoration. Learn more about our innovative techniques and success stories.</p>
            <Button variant="success" onClick={handleClick}>More</Button>
          </Col>
        </Row>
      </Container>
      <Container id="donate" className="p-5 bg-light">
        <Row>
          <Col>
            <h2>Make a Donation</h2>
            <p>Your support helps us continue our work in restoring marine habitats. Every donation makes a difference.</p>
            <Button variant="success" onClick={handleClick}>Donate</Button>
          </Col>
        </Row>
      </Container>
      <Container id="contact" className="p-5">
        <Row>
          <Col>
            <h2>Contact Us</h2>
            <p>Have questions or want to get involved? Reach out to us!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
