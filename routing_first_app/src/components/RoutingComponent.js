import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LoginComponent from './LoginComponent';
import ErrorComponent from './ErrorComponent';

const HomeComponent = () => {
    return <>
        <h1>This is Home Page</h1>
        <p>Explore home</p>
    </>
}
const ContactUsComponent = () => {
    return <>
        <h1>This is Contact Us</h1>
        <p>React out to us @ details.com</p>
    </>
}



export class RoutingComponent extends React.Component {
    render() {
        return (
            <Router>
                <header>
                    <div style={{ "margin": "1rem" }}>
                        <span><Link to="/home" style={{ "textDecoration": "none" }}>Home</Link></span>
                        <span><Link to="/contactus" style={{ "textDecoration": "none" }}>Contact Us</Link></span>
                        <span><Link to="/login" style={{ "textDecoration": "none" }}>Login</Link></span>
                    </div>
                </header>
                <hr />
 
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/home' element={<HomeComponent />}/>
                    <Route path='/contactus' element={<ContactUsComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
            </Router>
        )
    }
}

export default RoutingComponent