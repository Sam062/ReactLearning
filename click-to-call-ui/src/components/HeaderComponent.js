import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const isActive = ({ isActive }) => isActive ? "btn border-dark rounded-pill" : "btn border-light";
export default class HeaderComponent extends Component {
  state = {
    isActive: false
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand>
              <Link to="/" className='btn text-muted' style={{ "marginLeft": "-5rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                </svg>
                <span style={{ "fontSize": "x-large" }}>Voicera</span> <span style={{ "fontSize": "small" }}>click to call</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/viewAllContactList" className={isActive}>
                  Contact Lists
                </NavLink>
                <NavLink to="/xyz" className={isActive} style={{ marginLeft: "0.5rem" }}>
                  Admin
                </NavLink>
                <NavLink to="/contacts" className={isActive} style={{ marginLeft: "0.5rem" }}>
                  Contacts
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
