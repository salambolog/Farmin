import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navi() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Farmin' It</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#shop">shop</Nav.Link>
            <Nav.Link href="#farms">farms</Nav.Link>
            <Nav.Link href="#markets">farmer markets</Nav.Link>
            <Nav.Link href="#events">events</Nav.Link>
            <Nav.Link href="#gallery">gallery</Nav.Link>
            <NavDropdown title="produce" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">apples</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                banaynays
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                vegetables
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;