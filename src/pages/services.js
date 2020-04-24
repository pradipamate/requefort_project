import React, { Component,useState,key,setKey} from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Tab,Col,Button,Container,Label,Row,Card,Form } from 'react-bootstrap';
import '../index.css';
import Accordion from 'react-bootstrap/Accordion';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Menulinks from '../Menulinks';
import Header from './header';
import Footer from './footer';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RevSlider, { Slide, Caption } from 'react-rev-slider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Tabs from 'react-bootstrap/Tabs'

class services extends Component {   
    constructor(props) {
        super(props);
         this.state={
                responsive:{
                    0: {
                        items: 1,
                    },
                    450: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                   
                },
           
        }
    }
    
    render() {
        // function ControlledTabs() {
        //     const [key, setKey] = useState('home');
        // }

        return (
                <div id="inner_pages">
                      <div>
                         <Header />
                     </div> 
                     <div className="Breadcrumb_main " id="featured-title">
                         <Container>
                           <Row className="featured-title-inner-wrap">
                                    <div class="featured-title-heading-wrap">
                                        <h1 class="featured-title-heading">
                                           WHAT WE DO 
                                        </h1>
                                     </div>
                                     <div id="breadcrumbs">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>Services</Breadcrumb.Item>
                                        </Breadcrumb>
                                        </div>
                           </Row>
                        </Container>
                     </div>
                     <div className="col-md-12">
                         <Container>
                             <div class="themesflat-spacer-60" ></div>
                             <Row>
                                <Col sm={12}>
                                     <div class="themesflat-headings style-1 clearfix text-center">
                                            <h2 class="heading clearfix">SERVICES</h2>
                                            <div class="sep clearfix"></div>    
                                    </div>
                                </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                         </Container>
                     </div>
                     <div className="">
                         <Container>
                             <Row>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-1.png')} alt="icon-1.png" />
                                            </div>
                                          <div class="nw_title">
                                                <h1>Investment Banking – Alternative Investments </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-2.png')} alt="icon-2.png" />
                                            </div>
                                          <div class="nw_title">
                                                <h1>Consulting – Strategic Advisory  </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-8.png')} alt="icon-8.png" />
                                            </div>
                                            <div class="nw_title">
                                                <h1>Mentorship </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-5.png')} alt="icon-5.png" />
                                            </div>
                                       <div class="nw_title">
                                                <h1>Sectors – Start-ups & SMEs </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                             </Row>
                             <Row>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-6.png')} alt="icon-1.png" />
                                            </div>
                                          <div class="nw_title">
                                                <h1>Real Estate </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-9.png')} alt="icon-2.png" />
                                            </div>
                                          <div class="nw_title">
                                                <h1>Angel Investors, HNIs & Wealth Management </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-7.png')} alt="icon-8.png" />
                                            </div>
                                            <div class="nw_title">
                                                <h1>Investment Banking – Alternative Investments </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3} className="nw_services_row">
                                   <div class="nw_services_container nw_services_container_4col">
                                        <div class="nw_services_content">
                                            <div class="nw_icon">
                                                <img src={require('./assets/img/icon-5.png')} alt="icon-5.png" />
                                            </div>
                                       <div class="nw_title">
                                                <h1>Investment Banking – Alternative Investments </h1>
                                            </div>
                                            <div class="nw_text">
                                                <p>We engage with <strong>start-ups</strong> , businesses in need for growth capital…</p>
                                            </div>
                                            <div class="nw_read_more">
                                              <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                             </Row>

                         </Container>
                     </div>

                     <div className="" >
                         <Container>
                             <Row>
                                <Col sm={12} className="nw_services_row">
                                      <div class="themesflat-headings style-1 clearfix text-center padding-left-3">
                                            <h2 class="heading clearfix">BEST SERVICES OFFER</h2>
                                            <div class="sep clearfix"></div>
                                            <p class="sub-heading clearfix">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                      </div>
                                </Col>
                             </Row>
                             <Row>
                             <Col sm={12} className="nw_services_row best_service_section">
                                      <OwlCarousel className="owl-theme " 
                                                loop 
                                                items={3}
                                                margin={30}
                                                 autoplay 
                                                 dots
                                                 dotsEach='true'
                                                  nav
                                                  responsive={this.state.responsive}  
                                                  >
                                            <div className="item">
                                                    <div class="news-item style-1 text-center clearfix">
                                                        <div class="inner">
                                                            <div class="thumb">
                                                                <img src={require('./assets/img/news/post-4.jpg')} alt="Image_post4" />
                                                                <h3 class="title bg-gradient font-size-16 padding-top-30 padding-bottom-10">
                                                                    <a href="#">INVESTMENT LOAN</a></h3>
                                                            </div>
                                                            <div class="text-wrap bg-light-grey">                                                     
                                                                <p class="excerpt-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                                <div class="post-btn">
                                                                    <a href="#" class="simple-link" >READ MORE</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="item">
                                                    <div class="news-item style-1 text-center clearfix">
                                                        <div class="inner">
                                                            <div class="thumb">
                                                                <img src={require('./assets/img/news/post-6.jpg')} alt="Image_post4" />
                                                                <h3 class="title bg-gradient font-size-16 padding-top-30 padding-bottom-10"><a href="#">REAL ESTATE PLANNING</a></h3>
                                                            </div>
                                                            <div class="text-wrap bg-light-grey">                                                     
                                                                <p class="excerpt-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                                <div class="post-btn">
                                                                    <a href="#" class="simple-link" >READ MORE</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="item">
                                                    <div class="news-item style-1 text-center clearfix">
                                                        <div class="inner">
                                                            <div class="thumb">
                                                                <img src={require('./assets/img/news/post-5.jpg')} alt="Image_post4" />
                                                                <h3 class="title bg-gradient font-size-16 padding-top-30 padding-bottom-10">
                                                                    <a href="#">Project Finance</a></h3>
                                                            </div>
                                                            <div class="text-wrap bg-light-grey">                                                     
                                                                <p class="excerpt-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                                <div class="post-btn">
                                                                    <a href="#" class="simple-link" >READ MORE</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="item">
                                                    <div class="news-item style-1 text-center clearfix">
                                                        <div class="inner">
                                                            <div class="thumb">
                                                                <img src={require('./assets/img/news/post-4.jpg')} alt="Image_post4" />
                                                                <h3 class="title bg-gradient font-size-16 padding-top-30 padding-bottom-10">
                                                                    <a href="#">INVESTMENT LOAN</a></h3>
                                                            </div>
                                                            <div class="text-wrap bg-light-grey">                                                     
                                                                <p class="excerpt-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                                <div class="post-btn">
                                                                    <a href="#" class="simple-link" >READ MORE</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                    </OwlCarousel>                                
                                </Col>
                             </Row>
                    </Container>                                                                                      
                     </div>
                     <div className="bg-parallax-overlay overlay-black ">
                       <Container>
                        <div class="themesflat-spacer-60"></div>
                         <Row>
                             <Col sm={4}>
                                      <div class="themesflat-headings style-4 color-white margin-top--6 clearfix">
                                            <h2 class="heading letter-spacing--2px clearfix">REQUEST A CALL BACK</h2>
                                            <div class="sep clearfix"></div>
                                            <p class="sub-heading font-size-15 line-height-26 clearfix">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                      </div>
                             </Col>
                             <Col sm={8}>
                                 <div class="themesflat-contact-form style-3 padding-left-56">
                                   <Form>
                                     <Row>
                                         <Col sm={6}>
                                            <Form.Group controlId="formBasicEmail">
                                                       <Form.Control type="text" placeholder="YOUR NAME*" />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={6}>
                                           <Form.Group controlId="formBasicEmail">
                                                       <Form.Control type="text" placeholder="YOUR PHONE*" />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={6}>
                                            <Form.Group controlId="formBasicEmail">
                                                       <Form.Control type="email" placeholder="YOUR EMAIL*" />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={6}>
                                                <Form.Group as={Col} controlId="formGridState" className="p-0">
                                                     <Form.Control as="select" value="Select...">
                                                        <option>STARTUPS & COMPANIES </option>
                                                        <option>INVESTORS</option>
                                                    </Form.Control>
                                                 </Form.Group>
                                         </Col>
                                         <Col sm={4}>
                                           <Form.Group controlId="formBasicEmail">
                                                     <button type="submit" class="themesflat-button blue">CALL ME BACK</button>
                                            </Form.Group>
                                         </Col>
                                         <Col sm={8}>
                                           <Form.Group controlId="formBasicEmail">
                                                  <span class="your-notification color-white font-size-14 padding-left-37">Thank you for showing your interest in us.</span>
                                            </Form.Group>
                                         </Col>
                                     </Row>
                                    </Form>
                                 </div>
                             </Col>
                         </Row>
                         <div class="themesflat-spacer-100"></div>
                     </Container>
                     </div>
                     <div className="">
                         <Footer />
                     </div>
            </div>
            
        );
    }
}


export default services;