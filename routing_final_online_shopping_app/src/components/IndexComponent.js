import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoriesComponent from './CategoriesComponent';
import HomeComponent from './HomeComponent';
import ProductsComponent from './ProductsComponent';

export class IndexComponent extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <Router>
                    <header className='bg-danger text-center text-white'>
                        <h2 className='display-5'>Online Shopping</h2>
                    </header>

                    <div className='row mt-2'>
                        <div className='col-3'>
                            <div className='mt-2 d-grid'>
                                <Link className='btn btn-danger mt-1' to="/home">Home</Link>
                                <Link className='btn btn-danger mt-1' to="/categories">Categories</Link>
                            </div>
                        </div>
                        <div className='col-9'>
                            <Routes>
                                <Route path='/' element={<HomeComponent />} />
                                <Route path='/home' element={<HomeComponent />} />
                                <Route path='/categories' element={<CategoriesComponent />} />
                                <Route path='/products/:id' element={<ProductsComponent />} />
                                
                            </Routes>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default IndexComponent