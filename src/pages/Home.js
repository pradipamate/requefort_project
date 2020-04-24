import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Col,Button,Container,Row,Card,Form } from 'react-bootstrap';
import '../index.css';
import Accordion from 'react-bootstrap/Accordion';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Menulinks from '../Menulinks';
import Header from './header';
import Footer from './footer';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RevSlider, { Slide, Caption } from 'react-rev-slider';
import CountUp from 'react-countup';
// import imgslider1 from 



class Home extends Component {   
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
        // const config = {
        //     delay:9000,
        //     startwidth:1170,
        //     startheight:500,
        //     hideThumbs:10,
        //     fullWidth:"on",
        //     forceFullWidth:"on"
        // };

        return (
                <div>
                     <div>
                         <Header />
                     </div>




               {/* <div id="rev-slider1">
                    <RevSlider config={config}>
                    <Slide 
                            src={require('../pages/assets/img/slider/slider-bg-1.jpg')}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}>   
                            <Caption
                                class="tp-caption skewfromrightshort fadeout"
                                data-x="85"
                                data-y="224"
                                data-speed="500"
                                data-start="1200"
                                data-easing="Power4.easeOut"
                            >
                                This is a caption
                            </Caption>
                        </Slide>
                        <Slide
                            src={require('../pages/assets/img/slider/slider-bg-2.jpg')}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}
                        >   
                            <Caption
                                class="tp-caption skewfromrightshort fadeout"
                                data-x="85"
                                data-y="224"
                                data-speed="500"
                                data-start="1200"
                                data-easing="Power4.easeOut"
                            >
                                This is a caption
                            </Caption>
                        </Slide>
                        <Slide
                            src={require('../pages/assets/img/slider/slider-bg-3.jpg')}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}
                        >   
                            <Caption
                                class="tp-caption skewfromrightshort fadeout"
                                data-x="85"
                                data-y="224"
                                data-speed="500"
                                data-start="1200"
                                data-easing="Power4.easeOut"
                            >
                                This is a caption
                            </Caption>
                        </Slide>
                    </RevSlider>
            </div> */}
            
            <div className="main-container">
                <section class="hero-slider">
                    <ul class="slides m-0">
                        <li class="overlay">
                            <div class="background-image-holder parallax-background">
                                <img class="background-image" alt="Background_Image" src={require('../pages/assets/img/hero4.jpg')} />
                            </div>
                            
                            <div class="video-wrapper">
                                <video controls id="video" autoplay   muted loop>
                                    <source type="video/webm" src={require('../pages/assets/video/video.webm')} />
                                    <source type="video/mp4" src={require('../pages/assets/video/video.mp4')} />
                                    <source type="video/ogg" src={require('../pages/assets/video/video.ogv')} />	
                                </video>
                            </div>
                            <Container className="align-vertical" >
                                <Row>
                                    <Col sm={6} col={9}>
                                    <h1 class="text-white">Get ready for the launch of our amazing new SaaS Suit - Pi.TEAM, You will be awed.</h1>
                                        <a href="https://www.pi.team/" class="btn btn-primary btn-white">KNOW MORE</a>
                                        <a href="https://www.pi.team/" class="btn btn-primary btn-filled inner-link">Purchase Pi.team</a>
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                        
                        
            
                    </ul>
                </section>
            </div>
            
               <Container className="home nw_type_1 nw_container">
                               <Row className="custom_row footer  nw_services">
                                 <Col sm={4} xs={12} className="nw_services_row">
                                    <div class="nw_services_container ">
                                                    <div class="nw_services_content">
                                                        <div class="nw_icon">
                                                            <img class="wow fadeInUp animated animated" src={require('../pages/assets/img/icon-1.png')} alt="icon-1.png"  />
                                                        </div>
                                                       <div class="nw_subtitle ">
                                                            <p class="wow fadeInUp animated animated" >Consulting Service</p>
                                                        </div> 
                                                        <div class="nw_title">
                                                            <h1 class="wow fadeInUp animated animated" >Investment Banking – Alternative Investments </h1>
                                                        </div>
                                                        <div class="nw_text">
                                                            <p class="wow fadeInUp animated animated" >We engage with start-ups, businesses in need for growth capital, and run the process of raising such investments though our extensive network …</p>
                                                        </div>
                                                        <div class="nw_read_more wow fadeInUp animated animated" >
                                                        <a href="Investment_Banking.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                   </Col>
                                   <Col sm={4} xs={12} className="nw_services_row">
                                      <div class="nw_services_container ">
                                           <div class="nw_services_content">
                                                        <div class="nw_icon wow fadeInUp animated" >
                                                        <img class="wow fadeInUp animated animated" src={require('../pages/assets/img/icon-2.png')} alt="icon-1.png"  />
                                                        </div>
                                                        <div class="nw_subtitle">
                                                            <p class="wow fadeInUp animated animated" >Business Service</p>
                                                        </div> 
                                                        <div class="nw_title">
                                                            <h1 class="wow fadeInUp animated animated" >Consulting – Strategic Advisory </h1>
                                                        </div>
                                                        <div class="nw_text">
                                                            <p class="wow fadeInUp animated animated" >Whilst engaging with such companies, it is often that we come across specialists who have created an interesting start-up/business …</p>
                                                        </div>
                                                        <div class="nw_read_more wow fadeInUp animated animated" >
                                                            <a href="Consulting-%20Strategic-Advisory.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                   </Col>
                                   <Col sm={4} xs={12} className="nw_services_row">
                                    <div class="nw_services_container">
                                            <div class="nw_services_content">
                                                <div class="nw_icon">
                                                <img class="wow fadeInUp animated animated" src={require('../pages/assets/img/icon-8.png')} alt="icon-1.png"  />
                                                </div>
                                                <div class="nw_subtitle">
                                                    <p class="wow fadeInUp animated animated" >Taxes Service</p>
                                                </div>
                                                <div class="nw_title">
                                                    <h1 class="wow fadeInUp animated animated" >Mentorship</h1>
                                                </div>
                                                <div class="nw_text">
                                                    <p class="wow fadeInUp animated animated" >Our team, associates and industry experts potentially engage as mentors to guide young start-ups and founders …</p>
                                                </div>
                                                <div class="nw_read_more wow fadeInUp animated animated" >
                                                    <a href="Mentorship.html">read more<i class="fa fa-long-arrow-alt-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                   </Col>
                                </Row>
                </Container> 
                {/* third section */}

               <div className="row-video bg-light-grey" id="introduction">
                    <Container >
                        <div class="themesflat-spacer-80" ></div>
                            <Row className="equalize sm-equalize-auto">
                                <Col sm={6} col={12}>
                                <div class="themesflat-spacer-30 clearfix" ></div>
                                    <div class="themesflat-headings style-1 clearfix">
                                        <h2 class="heading clearfix">INTRODUCTION</h2>
                                        <div class="sep clearfix"></div>
                                        <p class="sub-heading clearfix">
                                        We are a boutique consulting & investment banking firm with a presence in Pune & Mumbai, India that specialises in engaging with dynamic start-ups & entrepreneurs involved in exciting businesses and opportunities across sectors and deal sizes. We engage with such entrepreneurs and businesses at a fundamental level, and get involved in Business Strategy Consulting and other facets of business all geared towards growth, and therefore a need for Growth Capital.</p>
                                        <div class="themesflat-spacer-80 clearfix "></div>
                                    </div>
                                </Col>
                                <Col sm={6} col={12} className="half-background style-1">
                                <div class="themesflat-icon style-1 clearfix background">
                                                <a class="icon-wrap popup-video" href="https://www.youtube.com/watch?v=LQpedLhpQsk">
                                                    <span class="icon"><i class="finance-icon-playbutton"></i></span>
                                                </a>
                                            </div>
                                </Col>
                            </Row>
                            <div class="themesflat-spacer-80" ></div>
                        </Container>
                </div>

                <div className="theme-counter section-spacing" id="Fun_fact">
                    <Container>
                        <Row>
                            <Col sm={12} col={12}>
                            <div class="bg">
                            <h6>Company Success</h6>
                            <h2>Some fun facts about our consulting</h2>
                            <div class="cunter-wrapper">
                                <Row >
                                    <Col sm={3} col={6}>
                                        <div class="single-counter-box">
                                            <div class="number"><span class="timer" data-from="0" data-to="30" data-speed="1200" data-refresh-interval="5"> <CountUp start={0} end={30} delay={6} /></span>+</div>
                                            <p>Years of Excellence</p>
                                        </div>
                                    </Col>
                                    <Col sm={3} col={6}>
                                    <div class="single-counter-box">
                                            <div class="number"><span class="timer" data-from="0" data-to="100" data-speed="1200" data-refresh-interval="5"><CountUp start={0} end={100} delay={6} /></span>%</div>
                                            <p>Client Satisfaction</p>
                                        </div> 
                                    </Col>
                                    <Col sm={3} col={6}>
                                       <div class="single-counter-box">
                                            <div class="number"><span class="timer" data-from="0" data-to="53" data-speed="1200" data-refresh-interval="5"><CountUp start={0} end={53} delay={6} /></span>k</div>
                                            <p>Cases Completed</p>
                                        </div>
                                    </Col>
                                    <Col sm={3} col={6}>
                                    <div class="single-counter-box">
                                            <div class="number"><span class="timer" data-from="0" data-to="24" data-speed="1200" data-refresh-interval="5"><CountUp start={0} end={24} delay={6} /></span></div>
                                            <p>Consultants</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div> 
                            <a href="service.html#casestudies" class="themesflat-button accent big video"><i class="flat-icon-check-1 font-size-25"></i>VIEW CASE STUDIES</a>
                         </div> 
                        </Col>
                       </Row>
                   </Container>
               </div>
               
               <div className="" id="">
                    <Container>
                        <Row>
                            <Col sm={12} col={12}>
                                <div class="themesflat-spacer-60"></div>
                                <div class="themesflat-headings style-2 clearfix text-center padding-left-24">
                                                <h2 class="heading clearfix">OUR ANALYSIS COVERS</h2>                                            
                                                <p class="sub-heading clearfix">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <div class="sep clearfix"></div>
                                            </div>
                                <div class="themesflat-spacer-60"></div>
                                <div class="">
                                <Row >
                                    <Col sm={4} col={12}>
                                         <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-bank-2"></i>
                                            </div>

                                            <h3 class="heading">
                                                <a href="#">LOAN INVESTMENT</a></h3>

                                            <p class="desc ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                       <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-chat"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">FINANCIAL CONSULTING</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                       <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-hammer-2"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">INSURANCE CONSULTING</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                        <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-signature-1"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">EDUCATION PLANNING</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                       <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-graphic"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">INVESTMENT MANAGEMENT</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>

                                    </Col>
                                    <Col sm={4} col={6}>
                                        <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-security"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">PROTECTION PLANNING</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                        <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-safebox-3"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">RETIREMENT & INCOME</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                        <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-buildings-2"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">ESTATE PLANNING</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    <Col sm={4} col={6}>
                                        <div class="themesflat-icon-box style-3 clearfix icon-left w70 dark-bg align-left rounded-100 has-width">
                                            <div class="icon-wrap">
                                                <i class="finance-icon-cheque-2"></i>
                                            </div>

                                            <h3 class="heading"><a href="#">TAXES PREPARATION</a></h3>

                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</p>
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </div> 
                        </Col>
                       </Row>
                   </Container>
                   <div class="themesflat-spacer-60"></div>
               </div>
               
               <div className="row-accordions bg-light-grey">
                   <Container>
                       <Row>
                           <Col sm={5} col={12}>
                               <div class="img-single margin-top--60">
                                            <img src={require('../pages/assets/img/img-single/img-single2.png')}  alt="img_single2.png"    />
                                </div>

                           </Col>
                           <Col sm={7} col={12}>
                              <div class="themesflat-spacer-60"></div>
                               <div class="themesflat-headings style-1 clearfix padding-left-27">
                                            <h2 class="heading clearfix">WHY CHOOSE OUR COMPANY?</h2>
                                            <div class="sep clearfix"></div>
                              </div>
                              <div class="themesflat-spacer-30"></div>
                                 <div className="accordian_section padding-left-27">
                                  <Accordion>
                                        <Card>
                                            <Card.Header className="p-0">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            LOREM IPSUM DOLAR SIT AMET,CONSEECTETUER ADIPISCING ELIT 
                                            </Accordion.Toggle>
                                            </Card.Header>
                                             <Accordion.Collapse eventKey="0">
                                                 <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <div class="themesflat-spacer-15"></div>
                                        <Card>
                                            <Card.Header className="p-0">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            LOREM IPSUM DOLAR SIT AMET,CONSEECTETUER ADIPISCING ELIT 
                                            </Accordion.Toggle>
                                            </Card.Header>
                                             <Accordion.Collapse eventKey="1">
                                                 <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <div class="themesflat-spacer-15"></div>
                                        <Card>
                                            <Card.Header className="p-0">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            LOREM IPSUM DOLAR SIT AMET,CONSEECTETUER ADIPISCING ELIT 
                                            </Accordion.Toggle>
                                            </Card.Header>
                                             <Accordion.Collapse eventKey="2">
                                                 <Card.Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                </Accordion>
                                </div>
                           </Col>
                       </Row>
                   </Container>
               </div>
               
               <div className="founder_counter" id="">
                    <Container>
                        <Row>
                            <Col sm={12} col={12}>
                                <div class="themesflat-spacer-100"></div>
                                <div class="">
                                <Row >
                                    <Col sm={3} col={12}>
                                        <div class="themesflat-counter style-3 mobi-center clearfix icon-top margin-top--27">
                                                <div class="inner">
                                                    <div class="text-wrap">
                                                        <div class="number-wrap font-heading">
                                                            <span class="prefix">FOUNDED IN </span>
                                                              <span class="number accent" data-speed="3000" data-to="1988" data-inviewport="yes">1988</span><span class="suffix">.</span>
                                                        </div>

                                                        <div class="sep"></div>
                                                        <h3 class="heading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
                                                    </div>
                                                </div>
                                        </div>
                                    </Col>
                                    <Col sm={3} col={6}>
                                      <div class="themesflat-counter style-2 clearfix icon-top text-center">
                                            <div class="inner">
                                                <div class="text-wrap">
                                                    <div class="number-wrap font-heading">
                                                        <span class="prefix"></span><span class="number accent" data-speed="3000" data-to="7513" data-inviewport="yes"><CountUp start={0} end={7513} delay={6} /></span><span class="suffix">+</span>
                                                    </div>

                                                    <div class="sep"></div>
                                                    <h3 class="heading">HAPPY CUSTOMERS</h3>
                                                </div>

                                                <div class="border-right-2"></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={3} col={6}>
                                      <div class="themesflat-counter style-2 clearfix icon-top text-center">
                                            <div class="inner">
                                                <div class="text-wrap">
                                                    <div class="number-wrap font-heading">
                                                        <span class="prefix"></span><span class="number accent" data-speed="3000" data-to="1290" data-inviewport="yes"><CountUp start={0} end={1290} delay={6} /></span><span class="suffix">+</span>
                                                    </div>

                                                    <div class="sep"></div>
                                                    <h3 class="heading">EXPERT ADVISORS</h3>

                                                    <div class="border-right-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={3} col={6}>
                                     <div class="themesflat-counter style-2 clearfix icon-top text-center">
                                            <div class="inner">
                                                <div class="text-wrap">
                                                    <div class="number-wrap font-heading">
                                                        <span class="prefix"></span><span class="number accent" data-speed="3000" data-to="2684" data-inviewport="yes"><CountUp start={0} end={2684} delay={6} /></span><span class="suffix">+</span>
                                                    </div>

                                                    <div class="sep"></div>
                                                    <h3 class="heading">PROJECT SUCCESS</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div> 
                        </Col>
                       </Row>
                   </Container>
                   <div class="themesflat-spacer-60"></div>
               </div>

               <div className="row-services bg-light-grey " id="blog">
                    <Container>
                        <Row>
                            <Col sm={12} col={12}>
                                <div class="themesflat-spacer-60"></div>
                                <div class="themesflat-headings style-1 clearfix">
                                            <h2 class="heading clearfix">BLOG </h2>
                                            <div class="sep clearfix"></div>
                                        </div>
                                 <div class="themesflat-spacer-30"></div>
                                <div class="themesflat-news style-2 clearfix image-circle">
                                    <OwlCarousel className="owl-theme " 
                                                loop 
                                                items={3}
                                                margin={30}
                                                 autoplay dots='false' 
                                                 dotsEach='false'
                                                  nav
                                                  responsive={this.state.responsive}>
                                                <div class="item">
                                                        <div class="news-item clearfix">
                                                                <div class="inner">
                                                                    <div class="thumb">
                                                                        <img src={require('../pages/assets/img/news/post-7.jpg')} alt="post_7" />
                                                                        <div class="meta">
                                                                            <span class="post-events">BLOG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h3 class="title"><a href="#">Lorem ipsum dolor Lorem ipsum dolor</a></h3>

                                                                        <p class="excerpt-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor Lorem ipsum dolor...</p>

                                                                        <div class="post-btn">
                                                                            <a href="blog_details.html" class="small themesflat-button outline ol-accent" >READ MORE</a>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                        <div class="news-item clearfix">
                                                                <div class="inner">
                                                                    <div class="thumb">
                                                                        <img src={require('../pages/assets/img/news/post-8.jpg')} alt="post_7" />
                                                                        <div class="meta">
                                                                            <span class="post-events">BLOG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h3 class="title"><a href="#">Lorem ipsum dolor Lorem ipsum dolor</a></h3>

                                                                        <p class="excerpt-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor Lorem ipsum dolor...</p>

                                                                        <div class="post-btn">
                                                                            <a href="blog_details.html" class="small themesflat-button outline ol-accent" >READ MORE</a>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                        <div class="news-item clearfix">
                                                                <div class="inner">
                                                                    <div class="thumb">
                                                                        <img src={require('../pages/assets/img/news/post-9.jpg')} alt="post_7" />
                                                                        <div class="meta">
                                                                            <span class="post-events">BLOG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h3 class="title"><a href="#">Lorem ipsum dolor Lorem ipsum dolor</a></h3>

                                                                        <p class="excerpt-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor Lorem ipsum dolor...</p>

                                                                        <div class="post-btn">
                                                                            <a href="blog_details.html" class="small themesflat-button outline ol-accent" >READ MORE</a>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                        <div class="news-item clearfix">
                                                                <div class="inner">
                                                                    <div class="thumb">
                                                                        <img src={require('../pages/assets/img/news/post-7.jpg')} alt="post_7" />
                                                                        <div class="meta">
                                                                            <span class="post-events">BLOG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h3 class="title"><a href="#">Lorem ipsum dolor Lorem ipsum dolor</a></h3>

                                                                        <p class="excerpt-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor Lorem ipsum dolor...</p>

                                                                        <div class="post-btn">
                                                                            <a href="blog_details.html" class="small themesflat-button outline ol-accent" >READ MORE</a>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                        <div class="news-item clearfix">
                                                                <div class="inner">
                                                                    <div class="thumb">
                                                                        <img src={require('../pages/assets/img/news/post-8.jpg')} alt="post_7" />
                                                                        <div class="meta">
                                                                            <span class="post-events">BLOG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h3 class="title"><a href="#">Lorem ipsum dolor Lorem ipsum dolor</a></h3>

                                                                        <p class="excerpt-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor Lorem ipsum dolor...</p>

                                                                        <div class="post-btn">
                                                                            <a href="blog_details.html" class="small themesflat-button outline ol-accent" >READ MORE</a>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                 </OwlCarousel>
                            </div>
                         </Col>
                       </Row>
                   </Container>
                   <div class="themesflat-spacer-60"></div>
               </div>

               <div className="row-testimonials" id="row-testimonials">
                    <Container>
                        <Row>
                            <Col sm={12} col={12}>
                                <div class="themesflat-spacer-60"></div>
                                <div class="themesflat-headings style-1 clearfix text-center">
                                            <h2 class="heading clearfix">TESTIMONIALS</h2>
                                            <div class="sep clearfix"></div>
                                            <p class="sub-heading clearfix">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        </div>
                                <div class="themesflat-spacer-60"></div>
                                <div class="themesflat-testimonials style-2 clearfix image-circle">
                                    <OwlCarousel className="owl-theme " 
                                                loop 
                                                items={2}
                                                margin={25}
                                                dots autoplay>
                                          <div class="item">
                                                <div class="inner">
                                                        <div class="thumb">
                                                            <img src={require('../pages/assets/img/testimonials/customer-3.png')} alt='customer_3' />
                                                        </div>
                                                        <blockquote class="text">
                                                        <div class="start">
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        <div class="name-pos">
                                                            <h6 class="name">LOREM IPSUM </h6>
                                                            <span class="position">Delicates Studio</span>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="inner">
                                                        <div class="thumb">
                                                            <img src={require('../pages/assets/img/testimonials/customer-2.png')} alt='customer_3' />
                                                        </div>
                                                        <blockquote class="text">
                                                        <div class="start">
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        <div class="name-pos">
                                                            <h6 class="name">LOREM IPSUM </h6>
                                                            <span class="position">Delicates Studio</span>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="inner">
                                                        <div class="thumb">
                                                            <img src={require('../pages/assets/img/testimonials/customer-3.png')} alt='customer_3' />
                                                        </div>
                                                        <blockquote class="text">
                                                        <div class="start">
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        <div class="name-pos">
                                                            <h6 class="name">LOREM IPSUM </h6>
                                                            <span class="position">Delicates Studio</span>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                        </div>
                                        <div class="item">
                                                <div class="inner">
                                                        <div class="thumb">
                                                            <img src={require('../pages/assets/img/testimonials/customer-3.png')} alt='customer_3' />
                                                        </div>
                                                        <blockquote class="text">
                                                        <div class="start">
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        <div class="name-pos">
                                                            <h6 class="name">LOREM IPSUM </h6>
                                                            <span class="position">Delicates Studio</span>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                        </div>
                                        <div class="item">
                                                <div class="inner">
                                                        <div class="thumb">
                                                            <img src={require('../pages/assets/img/testimonials/customer-3.png')} alt='customer_3' />
                                                        </div>
                                                        <blockquote class="text">
                                                        <div class="start">
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                            <i class="finance-icon-star"></i>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        <div class="name-pos">
                                                            <h6 class="name">LOREM IPSUM </h6>
                                                            <span class="position">Delicates Studio</span>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                        </div>
                                 </OwlCarousel>
                            </div>
                         </Col>
                       </Row>
                   </Container>
                   <div class="themesflat-spacer-60"></div>
               </div>

               <div className="row-partner partner-section bg-color" id="row-testimonials">
                    <Container>
                        <Row>
                            <Col sm={4} col={12}>
                               <h6>OUR <br /> PARTNERS</h6>
                            </Col>
                            <Col sm={8} col={12}>
                                <div class="themesflat-partner style-1 arrow-center offset30 offset-v0 has-arrows arrows-circle w32">
                                    <OwlCarousel className="owl-theme " 
                                                loop 
                                                items={5}
                                                margin={25}
                                                autoplay 
                                                nav="false">
                                                <div class="item">
                                                    <div class="partner-item clearfix">
                                                        <div class="inner">
                                                            <a target="_blank" href="#">
                                                                <div class="thumb">
                                                                    <img src={require('../pages/assets/img/partners/logo-1.png')} alt="logo" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                   </div>
                                                </div>
                                            <div class="item">
                                                    <div class="partner-item clearfix">
                                                        <div class="inner">
                                                            <a target="_blank" href="#">
                                                                <div class="thumb">
                                                                    <img src={require('../pages/assets/img/partners/logo-1.png')} alt="logo" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                   </div>
                                            </div>
                                            <div class="item">
                                                <div class="partner-item clearfix">
                                                        <div class="inner">
                                                            <a target="_blank" href="#">
                                                                <div class="thumb">
                                                                    <img src={require('../pages/assets/img/partners/logo-1.png')} alt="logo" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="item">
                                            <div class="partner-item clearfix">
                                                        <div class="inner">
                                                            <a target="_blank" href="#">
                                                                <div class="thumb">
                                                                    <img src={require('../pages/assets/img/partners/logo-1.png')} alt="logo" />
                                                                </div>
                                                            </a>
                                                        </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                           <div class="partner-item clearfix">
                                                        <div class="inner">
                                                            <a target="_blank" href="#">
                                                                <div class="thumb">
                                                                    <img src={require('../pages/assets/img/partners/logo-1.png')} alt="logo" />
                                                                </div>
                                                            </a>
                                                        </div>
                                            </div>
                                        </div>
                                 </OwlCarousel>
                            </div>
                         </Col>
                       </Row>
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
            
        );
    }
}


export default Home;