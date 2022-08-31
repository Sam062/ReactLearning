import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isActive: false
    // }
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({
  //     isActive: true
  //   })
  // }
  render() {
    return (
      <div className='mt-1'>
        {/* <header> */}
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Voicera <span style={{ "fontSize": "small" }}>click to call</span></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/newContactList" className={this.state.isActive ? 'nav-link active' : 'nav-link '} onClick={this.handleClick}>Add contact list</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/viewAllContactList" className={this.state.isActive ? 'nav-link active' : 'nav-link '} onClick={this.handleClick}>View all contact lists</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contacts" className={this.state.isActive ? 'nav-link active' : 'nav-link '} onClick={this.handleClick}>Contact Details</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/importData" className={this.state.isActive ? 'nav-link active' : 'nav-link '} onClick={this.handleClick}>Import Data</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dialerData" className={this.state.isActive ? 'nav-link active' : 'nav-link '} onClick={this.handleClick}>Dialer Data</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}

        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand>
              <Link to="/" className='btn text-muted' style={{ "marginLeft": "-4rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                </svg>
                <span style={{ "fontSize": "x-large" }}>Voicera</span> <span style={{ "fontSize": "small" }}>click to call</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown title="Contact List" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/newContactList" className='btn'>Add New List</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/viewAllContactList" className='btn'>View All</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Contact Details" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/contacts" className='btn'>Add New Contact</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/contacts" className='btn'>View All</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Data Feed" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/importData" className='btn'>Import CSV</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/dialerData" className='btn'>Dialer Data</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        {/* </header> */}
      </div>
    )
  }
}
