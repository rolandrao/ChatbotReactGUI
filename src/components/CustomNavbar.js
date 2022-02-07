import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const CustomNavbar = () => (
    <Navbar sticky="top" bg="danger" variant="dark">
        <Container>
            <Navbar.Brand>Capstone Chatbot</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="/login">Instructor Login</Nav.Link>
                <Nav.Link href="/instructor">Bypass</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

export default CustomNavbar;