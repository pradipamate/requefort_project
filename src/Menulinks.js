import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Navbar,Nav,NavDropdown,Col,Container,Row } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import './index.css';

class Menulinks extends Component {
    render() {
        return (
            <div >
                <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <div id="site-logo" class="clearfix">
                                <div id="site-logo-inner">
                                        <img src={require('./pages/assets/img/logo.png')} alt="Finance"  width="184" height="40" />
                                </div>
                       </div>
                </Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                             <Link to="/Aboutus">About Us</Link> 
                             <Link to="/services">Services</Link>
                             <Link to="/our_network">OUR NETWORK</Link> 
                             <Link to="/news_media">News & media</Link>
                             <Link to="/contact_us">Contact Us</Link> 
                             <Link to="/extra_us">extra Us</Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menulinks;