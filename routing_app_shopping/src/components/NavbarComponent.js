import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavbarComponent extends Component {
  render() {
    return (
      <div className='mt-3'>
        <nav>
          <ul className='list-unstyled'>
            <li className='d-grid mt-2'>
              <Link to="/home" className='btn btn-secondary'>Home</Link>
            </li>
            <li className='d-grid mt-2'>
              <Link to="/electronics" className='btn btn-secondary'>Electronics</Link>
            </li>
            <li className='d-grid mt-2'>
              <Link to="/fashon" className='btn btn-secondary'>Fashon</Link>
            </li>
            <li className='d-grid mt-2'>
              <Link to="/categories" className='btn btn-secondary'>Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavbarComponent