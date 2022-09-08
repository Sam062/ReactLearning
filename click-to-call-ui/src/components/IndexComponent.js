import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactListComponent from './ContactListComponent';
import ContactsComponent from './ContactsComponent';
import HomeComponent from './HomeComponent';
import { AddContactList } from './ContactListComponent';
import { ContactLists } from './ContactListComponent';
// import { EditContactList } from './ContactListComponent';
import ImportDataComponent from './ImportDataComponent';
import DialerComponent from './DialerComponent';
import ContactListData from './ContactListData';
import Error404Component from './Error404Component';

export class IndexComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent />

          <div>
            <Routes>
              <Route path='/' element={<HomeComponent />} />
              <Route path='/home' element={<HomeComponent />} />
              <Route path='/contacts' element={<ContactsComponent />} />

              <Route path='/contactList' element={<ContactListComponent />} />
              {/* <Route path='/newContactList' element={<AddContactList />} /> */}
              <Route path='/viewAllContactList' element={<ContactLists />} />
              {/* <Route path='/editContactList/:id/:name/:desc' element={<EditContactList />} /> */}
              {/* <Route path='/importData' element={<ImportDataComponent />} /> */}
              <Route path='/dialerData' element={<DialerComponent />} />
              <Route path='/contactListData/:contactListId/:listName' element={<DialerComponent />} />

              <Route path='/*' element={<Error404Component />} />


            </Routes>
          </div>

          <FooterComponent />
        </div>
      </Router>

    )
  }
}

export default IndexComponent