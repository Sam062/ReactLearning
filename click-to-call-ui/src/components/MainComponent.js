import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import ContactListComponent from './ContactListComponent';

export class MainComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <FooterComponent />
      </div>
    )
  }
}

export default MainComponent