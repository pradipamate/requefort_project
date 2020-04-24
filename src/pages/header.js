import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Col,Button,Container,Row,Card,Form } from 'react-bootstrap';
import Menulinks from '../Menulinks';
import '../index.css';

class header extends Component {
    render() {
        return (
            <div>
                <div className="absolute" id="top-bar">
                        <div class="wrap-themesflat-container">
                            <div id="top-bar-inner" class="themesflat-container">
                                <div class="top-bar-inner-wrap">
                                    <div class="top-bar-content">
                                        <span class="address content"><a href="#">Roquefort, Pune/Mumbai, India</a></span>
                                        <span class="phone content"><a href="tel:+91-98231 80089">WhatsApp +91-98231 80089</a></span>
                                    </div>

                                    <div class="top-bar-content-right">
                                        <div class="top-bar-socials">
                                            <div class="inner">
                                                <span class="texts">Follow Us:</span>
                                                <span class="icons">
                                                    <a href="#" title="Facebook">
                                                        <span class="finance-icon-Facebook" aria-hidden="true"></span>
                                                    </a>
                                                    <a href="#" title="Twitter">
                                                        <span class="finance-icon-Twitter" aria-hidden="true"></span>
                                                    </a>
                                                    <a href="#" title="Linkedin">
                                                        <span class="flat-icon-linkedin" aria-hidden="true"></span>
                                                    </a>
                                                    <a href="#" title="Instagram">
                                                        <span class="flat-icon-instagram" aria-hidden="true"></span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-style-4 " id="site-header">
                            <Container id="site-header-inner">
                                    <Row>
                                        <div  className="">
                                            <Menulinks />
                                        </div>
                                </Row>
                           </Container>
                        </div>
                     </div>  
                
            </div>
        );
    }
}

export default header;