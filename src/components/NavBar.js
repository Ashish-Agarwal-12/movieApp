import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/hallList">
                            <Nav.Link>Halls</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/slotList">
                            <Nav.Link>Slots</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Movies">
                            <Nav.Link>Movies</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Logout</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            My Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;