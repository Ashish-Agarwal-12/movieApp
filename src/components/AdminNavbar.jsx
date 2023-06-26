import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";


export default function AdminNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Movie Ticket Booking System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
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
            <LinkContainer to="/bookingList">
              <Nav.Link>Bookings</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/logout">
              
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/profile">
                <Nav.Link>My Profile</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
