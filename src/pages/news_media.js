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

class news_media extends Component {
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
                                        <h1 class="featured-title-heading"> NEW & MEDIA </h1>
                                     </div>
                                     <div id="breadcrumbs">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>NEW & MEDIA </Breadcrumb.Item>
                                        </Breadcrumb>
                                        </div>
                           </Row>
                        </Container>
                     </div>

                     <div className="row-video bg_gray" id="latest_news">
                         <Container>
                              <div class="themesflat-spacer-60" ></div>
                                       <div class="heading">
                                            <h2>Latest <span class="color_red">ARTICLES</span></h2>
                                              <div class="heading_border bg_red"></div>
                                        </div>
                             <Row>
                             <OwlCarousel className="owl-theme " 
                                                loop 
                                                items={3}
                                                margin={30}
                                                 autoplay 
                                                 dots
                                                 dotsEach='true'
                                                  nav>
                                 <div class="item">
                                         <div class="inner">
                                                        <div class="latest_box_1">
                                                            <div class="latest_news_item heading_space">
                                                                    <div class="image">
                                                                        <a href="news_details.html">
                                                                            <img class="img-responsive" alt="listin" src={require('./assets/img/news1.jpg')} />
                                                                            </a>
                                                                    </div>
                                                                    <div class="latest_news_content">
                                                                        <div class="latest_news_meta">
                                                                            <span><img src={require('./assets/img/latest_news.png')} alt="image_news"  /> by Michael Jordan</span>
                                                                            <span><i class="icon-icons228"></i> 14 Feb 2016</span>
                                                                        </div>
                                                                        <div class="latest_news_text">
                                                                            <h3>Need for growth and reliability</h3>
                                                                            <p class="p-font-15 p-b-30 p-t-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus deserunt, nobis quae eos provident quidem...</p>
                                                                            <a class="simple-link " href="news_details-2.html">News Detail</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                 </div>
                                </OwlCarousel>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
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

export default news_media;