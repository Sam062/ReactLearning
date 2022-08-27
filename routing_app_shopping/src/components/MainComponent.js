import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import HomeComponent from './HomeComponent';
import ElectronicsComponent from './ElectronicsComponent';
import FashonComponent from './FashonComponent';
import DetailsComponent from './DetailsComponent';
import CategoryComponent from './CategoryComponent';
import ProductsComponent from './ProductsComponent';

export class MainComponent extends Component {
    render() {
        return (
            <Router>
                <HeaderComponent />
                <div className='container-fluid row' style={{"height": "508px"}}>
                    <div className='col-3'>
                        <NavbarComponent />
                    </div>
                    <div className='col-9'>
                        <Routes>
                            <Route path='/' element={<HomeComponent />} />
                            <Route path='/home' element={<HomeComponent />} />
                            <Route path='/electronics' element={<ElectronicsComponent />} />
                            <Route path='/fashon' element={<FashonComponent />} />
                            <Route path='/categories' element={<CategoryComponent />} />
                            <Route path='/products/:id' element={<ProductsComponent />} />

                            <Route path='/details/:id/:name' element={<DetailsComponent />} />
                        </Routes>
                    </div>
                </div>
                <FooterComponent />
            </Router>
        )
    }
}

export default MainComponent