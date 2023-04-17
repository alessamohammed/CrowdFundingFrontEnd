import * as React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { getAuthToken, removeAuthToken } from '../axios_helper';
export default function Header(props) {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">CrowdFunding</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/campaigns">campaigns</Nav.Link>
          </Nav>
          <Nav>
            {getAuthToken() ? (
              <Nav.Link  href='/'>Logout</Nav.Link>
            ) : (
              <Nav.Link href='/login'>Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    );
    };