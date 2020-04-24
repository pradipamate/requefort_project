import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Col,Button,Container,Row,Card,Form } from 'react-bootstrap';
import '../index.css';
class footer extends Component {
    render() {
        return (
            <div>
                 <div className="row-promotion" id="footer">
                    <Container id="footer-widgets">
                        <Row>
                            <Col sm={3} col={12}>
                                <div class="widget widget_text padding-left-7">
                                            <div class="textwidget">
                                                <p class="margin-bottom-22">
                                                    <img src={require('../pages/assets/img/logo.png')} width="226" height="50" alt="Finance" data-retina="assets/img/logo-footer@2x.png" data-width="226" data-height="50" />
                                                </p>
                                                <p class="sub-heading font-size-15 line-height-26 clearfix text-white" align="justify">The breadth of knowledge and experience at Financial Group assures our clients that we have the skills necessary to focus on their important financial matters.</p>
                                            </div>
                                        </div>
                                        <div class="widget widget_information padding-left-7">
                                            <div class="top-bar-socials">
                                                    <div class="inner">
                                                        <span class="texts">Follow Us:</span>
                                                            <div class="social-icons_1">
                                                                <ul>
                                                                    <li><a href="#"><i aria-hidden="true" class="fa fa-facebook"></i></a></li>
                                                                    <li><a href="#"><i aria-hidden="true" class="fa fa-twitter"></i></a></li>
                                                                    <li><a href="#"><i aria-hidden="true" class="fa fa-linkedin"></i></a></li>
                                                                    <li><a href="#"><i aria-hidden="true" class="fa fa-instagram"></i></a></li>
                                                                </ul>

                                                            </div>
                                                    </div>
                                                </div>
                                        </div>
                            </Col>
                            <Col sm={3} col={12}>
                            <div class="widget widget_twitter margin-top-6 padding-left-13">
                                    <h2 class="widget-title"><span>Quick Links</span></h2>
                                            <div class="widget widget_information padding-left-7 footer_box_1 ">
                                              <ul class="footer_link_1">
                                                <li class="clearfix">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="about.html">About US</a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="service.html">WHAT WE DO </a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="#">SUPPORT SERVICES</a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="our_network.html">OUR NETWORK</a>
                                                </li>
                                            </ul>
                                            <ul class="pull-right">
                                                <li class="clearfix">
                                                    <a href="investor.html">INVESTORS</a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="blog.html">BLOG</a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="news_media.html">NEWS &amp; MEDIA</a>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="contact.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </Col>
                            <Col sm={3} col={12}>
                                       <div class="widget widget_tag_cloud margin-top-6 padding-left-9">
                                            <h2 class="widget-title margin-bottom-43"><span>Latest Posts</span></h2>
                                                    <div class="latest_footer">
                                                        <h4><a href="#">Secure strong revenue growth</a></h4>
                                                        <p>14 Feb 2016</p>
                                                    </div>
                                                    <div class="latest_footer">
                                                        <h4><a href="#">Weekly meeting in companies Think Room</a></h4>
                                                        <p>14 Feb 2016</p>
                                                    </div>
                                        </div>
                            </Col>
                            <Col sm={3} col={12}>
                                 <div class="footer_sec_3 widget widget_flickr margin-top-6 padding-left-6">
                                            <h2 class="widget-title"><span>get in touch</span></h2>

                                            <div class="widget widget_information padding-left-7 footer_box-4" >
                                             <ul>
                                                 <li class="phone clearfix">
                                                    <div class="inner">
                                                
                                                    <i class="icon-telephone114"></i>
                                                    <span class="text"><a href="tel:+91-98231 80089">+91-98231 80089</a> </span>
                                                    </div>
                                                </li>
                                                 <li class="email clearfix">
                                                    <div class="inner">
                                                    <i class=" icon-icons142"></i>
                                                    <span class="text text3" ><a href="mailto:roquefortconsulting@gmail.com">roquefortconsulting@gmail.com</a></span>
                                                    </div>
                                                </li>
                                                <li class="email clearfix">
                                                    <div class="inner">
                                                    <i class="icon-alarmclock"></i>
                                                    <span class="text">Mon to Fri - 08:00 to 16:30</span>
                                                    </div>
                                                </li>
                                                <li class="address clearfix">
                                                    <div class="inner">
                                                        <i class="icon-icons74"></i>
                                                        <span class="text">Roquefort, Pune/Mumbai, India.</span>
                                                    </div>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                      </div>
                            </Col>
                       </Row>
                   </Container>
               </div>
               <div className="" id="bottom">
                    <Container>
                        <Row>
                            <Col sm={12} col={12}>
                               <div class="bottom-bar-inner-wrap">
                                    <div class="bottom-bar-content">
                                        <div id="copyright" class="padding-left-9">
                                            <center>&copy; <a href="#">COPYRIGHT ROQUEFORT</a>. DESIGN BY <a href="https://www.socialstardom.in/" target="_blank">SOCIALSTARDOM</a>.</center>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                       </Row>
                   </Container>
               </div>
                
            </div>
        );
    }
}

export default footer;