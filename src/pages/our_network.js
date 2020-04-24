import React, { Component,useState,key,setKey} from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Tab,Col,Button,Container,Label,Row,Card,Form } from 'react-bootstrap';
import '../index.css';
import Menulinks from '../Menulinks';
import Header from './header';
import Footer from './footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CountUp from 'react-countup';

class our_network extends Component {
    render() {
        return (
            <div>
                <div id="inner_pages">
                      <div>
                         <Header />
                     </div> 
                     <div className="Breadcrumb_main " id="featured-title">
                         <Container>
                           <Row className="featured-title-inner-wrap">
                                    <div class="featured-title-heading-wrap">
                                        <h1 class="featured-title-heading">
                                        OUR NETWORK 
                                        </h1>
                                     </div>
                                     <div id="breadcrumbs">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Our Network</Breadcrumb.Item>
                                        </Breadcrumb>
                                        </div>
                           </Row>
                        </Container>
                     </div>

                     <div className="">
                         <Container>
                             <div class="themesflat-spacer-60" ></div>
                             <Row>
                                <Col sm={12}>
                                  <div class="themesflat-headings style-1 clearfix text-center">
                                        <h2 class="heading clearfix">ROQSTAR ADVISORS & ASSOCIATES </h2>
                                        <div class="sep clearfix"></div>  
                                        <div class="themesflat-spacer-30" ></div>  
                                        <p>
                                       Our Advisors &amp; Associates network form the core of our support system. They are all influential, dynamic and eminent personalities successful in their own professional &amp; business domains across India and the world. They form a good sounding board for us and businesses associated with us, and their collective wisdom, advice and network are invaluable for us and everything we at Roquefort do, and aspire to do. And we feel privileged that they are part of our advisors &amp; associates network.
                                       </p>
                                    </div>
                                </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                         </Container>
                     </div>

                     <div className="row-video bg-light-grey">
                         <Container>
                                 <div class="themesflat-headings margin-bottom-50 animate bounceIn style-1 clearfix text-center" id="our_advisory">
                                                <h2 class="heading clearfix">OUR ADVISORS</h2>
                                                <div class="sep clearfix"></div>    
                                     </div>
                             <Row>
                                <Col sm={4}>
                                  <div class="team-member animate fadeInUp">
                                    <div class="our_network_img">
                                            <img src={require('./assets/img/1.jpg')} alt="icon-2.png" />
                                        </div>
                                        <h4>Lorem ipsum dolor<span>Lorem ipsum dolor</span></h4>
                                        <p class="sub-heading clearfix">Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore.</p>
                                        <ul class="social-text">
                                            <li><a class="facebook" href="#.">facebook</a></li>
                                            <li><a class="twitter" href="#.">twitter</a></li>
                                            <li><a class="youtube" href="#.">youtube</a></li>
                                        </ul>
                                 </div>
                                </Col>
                                <Col sm={4}>
                                  <div class="team-member animate fadeInUp">
                                    <div class="our_network_img">
                                            <img src={require('./assets/img/1.jpg')} alt="icon-2.png" />
                                        </div>
                                        <h4>Lorem ipsum dolor<span>Lorem ipsum dolor</span></h4>
                                        <p class="sub-heading clearfix">Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore.</p>
                                        <ul class="social-text">
                                            <li><a class="facebook" href="#.">facebook</a></li>
                                            <li><a class="twitter" href="#.">twitter</a></li>
                                            <li><a class="youtube" href="#.">youtube</a></li>
                                        </ul>
                                  </div>
                                </Col>
                                <Col sm={4} >
                                  <div class="team-member animate fadeInUp">
                                    <div class="our_network_img">
                                            <img src={require('./assets/img/1.jpg')} alt="icon-2.png" />
                                        </div>
                                        <h4>Lorem ipsum dolor<span>Lorem ipsum dolor</span></h4>
                                        <p class="sub-heading clearfix">Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore.</p>
                                        <ul class="social-text">
                                            <li><a class="facebook" href="#.">facebook</a></li>
                                            <li><a class="twitter" href="#.">twitter</a></li>
                                            <li><a class="youtube" href="#.">youtube</a></li>
                                        </ul>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div class="team-member animate fadeInUp">
                                    <div class="our_network_img">
                                            <img src={require('./assets/img/1.jpg')} alt="icon-2.png" />
                                        </div>
                                        <h4>Lorem ipsum dolor<span>Lorem ipsum dolor</span></h4>
                                        <p class="sub-heading clearfix">Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore.</p>
                                        <ul class="social-text">
                                            <li><a class="facebook" href="#.">facebook</a></li>
                                            <li><a class="twitter" href="#.">twitter</a></li>
                                            <li><a class="youtube" href="#.">youtube</a></li>
                                        </ul>
                                  </div>
                                </Col>
                             </Row>
                         </Container>
                     </div>
                     <div className="counter" >
                         <Container>
                           <div class="themesflat-spacer-60"></div>
                             <Row>
                                
                                  <div class="themesflat-headings style-1 clearfix  color-white text-center w-100 text-center">
                                            <h2 class="heading clearfix">COMPANY FACTS</h2>
                                            <div class="sep clearfix"></div>    
                                    </div>
                               
                             </Row>
                             <div class="themesflat-spacer-30"></div>
                             <Row>
                                 <Col sm={4} className="counter_div">
                                      <div class="inner d-flex">
                                                <div class="icon-wrap">
                                                    <div class="icon">
                                                        <i class="finance-icon-bulb"></i></div>
                                                </div>
                                                <div class="text-wrap">
                                                    <div class="number-wrap font-heading text-white">
                                                            <span class="prefix"></span>
                                                            <span class="number accent" data-speed="3000" data-to="7513" data-inviewport="yes">
                                                            <CountUp start={0} end={7513} delay={6} /></span>
                                                            <span class="suffix">+</span>
                                                    </div>

                                                    <div class="sep"></div>
                                                    <h3 class="heading  text-white">Happy Clients</h3>
                                                </div>
                                        </div>
                                 </Col>
                                 <Col sm={4} className="counter_div">
                                        <div class="inner d-flex">
                                                <div class="icon-wrap">
                                                    <div class="icon">
                                                        <i class="finance-icon-businessman-1"></i></div>
                                                </div>
                                                <div class="text-wrap">
                                                    <div class="number-wrap font-heading text-white">
                                                            <span class="prefix"></span>
                                                            <span class="number accent" data-speed="3000" data-to="7513" data-inviewport="yes">
                                                            <CountUp start={0} end={1290} delay={6} /></span>
                                                            <span class="suffix">+</span>
                                                    </div>

                                                    <div class="sep"></div>
                                                    <h3 class="heading  text-white">Expert Advisors</h3>
                                                </div>
                                        </div>
                                 </Col>
                                 <Col sm={4} className="counter_div">
                                        <div class="inner d-flex">
                                                <div class="icon-wrap">
                                                    <div class="icon">
                                                        <i class="finance-icon-award"></i></div>
                                                </div>
                                                <div class="text-wrap">
                                                    <div class="number-wrap font-heading text-white">
                                                            <span class="prefix"></span>
                                                            <span class="number accent" data-speed="3000" data-to="7513" data-inviewport="yes">
                                                            <CountUp start={0} end={2684} delay={6} /></span>
                                                            <span class="suffix">+</span>
                                                    </div>

                                                    <div class="sep"></div>
                                                    <h3 class="heading  text-white">Project Success</h3>
                                                </div>
                                        </div>
                                 </Col>
                             </Row>
                             <div class="themesflat-spacer-60"></div>
                         </Container>

                     </div>
                     <div className="row-promotion bg-accent" >
                        <Container>
                                <div class="themesflat-spacer-20"></div>
                                    <Row>
                                        <Col sm={12} col={12}>
                                        <div class="themesflat-action-box style-1 has-icon padding-left-110 padding-right-113">
                                                        <div class="inner">
                                                            <div class="heading-wrap">
                                                                <div class="text-wrap">
                                                                    <span class="icon finance-icon-award"></span>
                                                                <h3 class="heading mobi-padding-top20 mobi-padding-bottom20">
                                                                        PROFESSIONAL HELP IN PLANNING YOUR FINANCIAL FUTURE
                                                                    </h3>
                                                                    <span class="icon"><i class="as-icon-speedometer2"></i></span> 
                                                                </div>
                                                            </div>
                                                            <div class="button-wrap">
                                                                <a href="contact.html" class="themesflat-button white font-weight-600 margin-top-10 margin-bottom-13">CONTACT US TODAY</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                        </Col>
                                </Row>
                                <div class="themesflat-spacer-20"></div>
                            </Container>
                        </div>





                     <div className="">
                         <Footer />
                     </div>
              </div>
            </div>
        );
    }
}

export default our_network;