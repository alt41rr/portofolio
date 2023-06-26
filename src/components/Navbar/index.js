import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-padding">
        <Navbar.Brand as={Link} to="/">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/quotes">Quotes</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
