import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ContactsComponent from './ContactsComponent';
import ContactListComponent from './ContactListComponent';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: true
    })
  }
  render() {
    return (
      <div className='mt-1'>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Voicera <span style={{ "fontSize": "small" }}>click to call</span></Link>
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
                  {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div> */}

                  {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
