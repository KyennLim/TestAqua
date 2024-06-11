import React from 'react';
import { Container, Row, Col, Image, Button, Navbar, Nav } from 'react-bootstrap';
import companyImage from '../assets/image/AquaPrintLogo.png';
import { useNavigate } from 'react-router-dom';
function AboutUs() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/', {replace:true});
    }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className=" grid">
        <Navbar.Brand onClick={handleClick} style={{ marginLeft: '20px' }}>
          <img
            src={companyImage}
            alt="AquaPrint Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          AquaPrint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: '20px' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Mission">Mission</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Story">Story</Nav.Link>
            <Nav.Link href="#Behindscene">Behind the scene</Nav.Link>
            <Nav.Link href="#Location">Location</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="py-4">
        <Row id='Mission'>
          <Col md={6} className='d-flex column align-items-center justify-content-end'>
            <h1>About Us</h1>
            <Image className='mx-3' src={companyImage} width={120} alt="Company Image" fluid />
          </Col>
          <Col md={6} className='p-3' style={{backgroundColor: '#'}}>
            <h2>Our Unique Value Proposition</h2>
            <p>
              At AquaPrint, we are committed to revitalizing ocean life through innovative coral restoration techniques. Our mission is to restore and preserve marine ecosystems for future generations.
            </p>
          </Col>
        </Row>

        <Row id='Team' className='p-3' style={{backgroundColor: '#'}}>
          <Col>
            <h2>Meet Our Team</h2>
            <p>
              Behind AquaPrint, there's a passionate team of scientists, environmentalists, and volunteers dedicated to our cause. Get to know the faces behind our mission.
            </p>
            <Button variant="primary" href="#team">Meet Our Team</Button>
          </Col>
        </Row>

        <Row id='Story' className='p-3' style={{backgroundColor: '#'}}>
          <Col>
            <h2>Our Brand Story</h2>
            <p>
              AquaPrint started as a small initiative to address the alarming decline of coral reefs. Over the years, our dedication and innovation have allowed us to grow into a leading organization in marine conservation.
            </p>
            <Button variant="primary" href="#story">Read Our Story</Button>
          </Col>
        </Row>

        <Row id='Behindscene' className='p-3' style={{backgroundColor: '#'}}>
          <Col>
            <h2>Behind the Scenes</h2>
            <p>
              Dive into our world and discover the latest projects, research, and initiatives that are driving our mission forward.
            </p>
            <Button variant="primary" href="#behind-the-scenes">Explore More</Button>
          </Col>
        </Row>

        <Row id='Location' className='p-3' style={{backgroundColor: '#'}}>
          <Col>
            <h2>Where You Can Find Us</h2>
            <p>
              AquaPrint is headquartered in [Location]. Visit us to learn more about our work and how you can get involved.
            </p>
          </Col>
        </Row>

        <Row className='Contact' style={{backgroundColor: '#',}}>
          <Col>
            <h2>Take the Next Step</h2>
            <p>
              Ready to join the movement? Explore our donation options, volunteer opportunities, or get in touch with us to learn more.
            </p>
            <Button variant="primary" href="#contact">Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
