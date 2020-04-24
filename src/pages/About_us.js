import React, { Component,useState,key,setKey} from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Tab,Col,Button,Container,Row,Card,Form } from 'react-bootstrap';
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

class Aboutus extends Component {   
    
    render() {
        // const config = {
        //     delay:9000,
        //     startwidth:1170,
        //     startheight:500,
        //     hideThumbs:10,
        //     fullWidth:"on",
        //     forceFullWidth:"on"
        // };
        function ControlledTabs() {
            const [key, setKey] = useState('home');
        }

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
                                            ABOUT US
                                        </h1>
                                     </div>
                                     <div id="breadcrumbs">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
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
                                    <div class="themesflat-headings style-1 clearfix">
                                        <h2 class="heading clearfix">INTRODUCTION</h2>
                                            <p class="sub-heading clearfix">
                                                    We are a boutique consulting &amp; investment banking firm with a presence in Pune &amp; Mumbai, India that specialises in engaging with dynamic start-ups &amp; entrepreneurs involved in exciting businesses and opportunities across sectors and deal sizes. We engage with such entrepreneurs and businesses at a fundamental level, and get involved in <i>Business Strategy Consulting  </i>   and other facets of business all geared towards growth, and therefore a need for <i>Growth Capital.</i><br /><br />
                                                        Our key focus area is investments or fund raising for such entrepreneurs and their businesses across deal sizes; including Start-ups, MSMEs, larger companies &amp; real estate via our extensive direct and associate investor network across the ecosystem, from <strong>Seed and Angel investments, Venture Capital (VC) &amp; Private Equity (PE) investments,</strong> pre IPO investments and Mergers &amp; Acquisitions <strong>(M&amp;A).</strong><br /><br /> 
                                                </p>
                                     </div>
                                </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                         </Container>
                     </div>
                     <div className="">
                         <Container>
                             <Row>
                               
                                <Col sm={5}>
                                        <div class="feature-about-us">
                                                <img src={require('./assets/img/brand_story.png')} alt="image_brand" />
                                        </div>
                                </Col>
                                 <Col sm={7}>
                                        <div class="themesflat-headings style-1 clearfix">
                                                <h2 class="heading clearfix">BRAND STORY</h2>
                                                <div class="sep clearfix"></div>
                                                <p class="sub-heading clearfix">
                                                    Roquefort is a quaint little village in the South of France, which produces the world’s best cheese, named after the village itself. The cheese, called Roquefort, is known the world over, as the ‘King of Cheeses’.<br/> Symbolically directly relevant to what we, at Roquefort aim to do and achieve. A boutique consulting and investment banking firm, aiming to run and successfully close the ‘King of Deals’, albeit in either quality or investment size, or both. We aim to do this by providing only the highest quality advice, a lot of thought, brainstorming, strategy, best practices and efforts towards both clients and investors.</p>
                                            </div>
                                            <div class="themesflat-spacer-30" ></div>
                                              <a href="Brandstory.html" class="themesflat-button blue"><i class="flat-icon-check-1 font-size-25"></i>  READ MORE </a>
                                            <div class="themesflat-spacer clearfix" data-desktop="28" data-mobi="60" data-smobi="60"></div>
                                </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                         </Container>
                     </div>
                     <div className="founder_section bg-light-grey" id="founder">
                         <Container>
                             <div class="themesflat-spacer-60" ></div>
                             <Row>
                                <Col sm={7}>
                                        <div class="profile flat-pl101">
                                                    <h2 class="pro-title">Hi, I’m Nishant Oberoi</h2>
                                                    <ul>
                                                        <li>Founder &amp; CEO of Roquefort</li>
                                                         <li> Executive Coach</li> 
                                                    </ul>
                                                    <div class="pro-content m-b-27">
                                                         <h6><a href="#">I’VE INSPIRED HUNDREDS OF BUSINESSMEN!</a></h6> 
                                                        <p>Founder &amp; CEO of Roquefort, India, <i>Nishant Oberoi</i>  hails from an illustrious family with a long history in the world of profession and business across the education, real estate and hospitality industries...</p>
                                                    </div>

                                                    <div class="readmore m-b-27 ">
                                                        <a href="profile.html" class="themesflat-button accent big video"><i class="flat-icon-check-1 font-size-25"></i>View Profile</a>
                                                    </div>
                                        </div>
                                </Col>
                                <Col sm={5}>
                                         <div class="feature-about-us">
                                                <img src={require('./assets/img/founder.png')} alt="founder_image" />
                                          </div>
                                </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                         </Container>
                     </div>

                     <div className="founder_section" id="founder">
                         <Container>
                             <div class="themesflat-spacer-60" ></div>
                             <Row>
                                 <Col sm={12}>
                                     <div class="themesflat-headings style-1 clearfix text-center">
                                            <h2 class="heading clearfix">OUR MAIN ABOUT</h2>
                                            <div class="sep clearfix"></div>
                                            <p class="sub-heading clearfix">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                     </div>
                                 </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                             <Row>
                                <Col sm={6}>
                                        <div class="themesflat-tabs">
                                               <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                                  <Tab className="tab-content" eventKey="home" title="EXPERIENCE">
                                                    <div class="item-content">
                                                        <h3 class="heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                        <ul>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                        </ul>
                                                    </div>
                                                    </Tab>
                                                    <Tab className="tab-content" eventKey="profile" title="INDEPENDENT">
                                                    <div class="item-content">
                                                        <h3 class="heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                        <ul>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                        </ul>
                                                    </div>
                                                    </Tab>
                                                    <Tab className="tab-content" eventKey="contact" title="PRO-ACTIVE" >
                                                    <div class="item-content">
                                                        <h3 class="heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                        <ul>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                            <li><i class="finance-icon-check-square"></i> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                                        </ul>
                                                    </div>
                                                    </Tab>
                                            </Tabs>
                                        </div>
                                </Col>
                                <Col sm={6}>
                                         <div class="half_background_style2">
                                                <div class="themesflat-icon style-1 clearfix background">
                                                    <a class="icon-wrap popup-video" href="https://www.youtube.com/watch?v=LQpedLhpQsk">
                                                        <span class="icon"><i class="finance-icon-playbutton"></i></span>
                                                    </a>
                                                </div>
                                          </div>
                                </Col>
                             </Row>
                             <div class="themesflat-spacer-60" ></div>
                         </Container>
                     </div>

                     <div className="row-services bg-light-grey " id="blog">
                      <Container>
                        <Row>
                            <Col sm={12} col={12}>
                                <div class="themesflat-spacer-60"></div>
                                      <div class="themesflat-headings style-1 clearfix text-center padding-left-3">
                                            <h2 class="heading clearfix">MEET OUR TEAM</h2>
                                            <div class="sep clearfix"></div>
                                            <p class="sub-heading clearfix">Appropriate and sufficient financing for a company is crucially important for its long-term success. </p>
                                       </div>
                                 <div class="themesflat-spacer-60"></div>
                                <div class="themesflat-news aboutus_page_slider style-2 clearfix image-circle">
                                    <OwlCarousel className="owl-theme " 
                                                loop 
                                                items={4}
                                                margin={30}
                                                 autoplay 
                                                 dots='true' 
                                                 dotsEach='true'
                                                  nav>
                                                <div class="item">
                                                        <div class="team-item">
                                                            <div class="inner">
                                                                <div class="thumb hover-effect bg-black">
                                                                    <img src={require('./assets/img/team/member-1-370x359.jpg')} alt="Image_team" />
                                                                    {/* <ul class="socials clearfix">
                                                                        <li class="facebook"><a href="#"><i class="icon flat-icon-facebook"></i></a></li>
                                                                        <li class="twitter"><a href="#"><i class="icon finance-icon-Twitter"></i></a></li>
                                                                        <li class="camera"><a href="#"><i class="icon flat-icon-instagram"></i></a></li>
                                                                    </ul> */}
                                                                </div>

                                                                <div class="text-wrap">
                                                                    <h4 class="name">
                                                                        Lorem Ipsum
                                                                    </h4>
                                                                    <div class="position">Project Manager</div>
                                                                    <a  href=".html">Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     </div>
                                                     <div class="item">
                                                        <div class="team-item">
                                                            <div class="inner">
                                                                <div class="thumb hover-effect bg-black">
                                                                    <img src={require('./assets/img/team/member-1-370x359.jpg')} alt="Image_team" />
                                                                    {/* <ul class="socials clearfix">
                                                                        <li class="facebook"><a href="#"><i class="icon flat-icon-facebook"></i></a></li>
                                                                        <li class="twitter"><a href="#"><i class="icon finance-icon-Twitter"></i></a></li>
                                                                        <li class="camera"><a href="#"><i class="icon flat-icon-instagram"></i></a></li>
                                                                    </ul> */}
                                                                </div>

                                                                <div class="text-wrap">
                                                                    <h4 class="name">
                                                                        Lorem Ipsum
                                                                    </h4>
                                                                    <div class="position">Project Manager</div>
                                                                    <a  href=".html">Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     </div>
                                                     <div class="item">
                                                        <div class="team-item">
                                                            <div class="inner">
                                                                <div class="thumb hover-effect bg-black">
                                                                    <img src={require('./assets/img/team/member-3-370x359.jpg')} alt="Image_team" />
                                                                    {/* <ul class="socials clearfix">
                                                                        <li class="facebook"><a href="#"><i class="icon flat-icon-facebook"></i></a></li>
                                                                        <li class="twitter"><a href="#"><i class="icon finance-icon-Twitter"></i></a></li>
                                                                        <li class="camera"><a href="#"><i class="icon flat-icon-instagram"></i></a></li>
                                                                    </ul> */}
                                                                </div>

                                                                <div class="text-wrap">
                                                                    <h4 class="name">
                                                                        Lorem Ipsum
                                                                    </h4>
                                                                    <div class="position">Project Manager</div>
                                                                    <a  href=".html">Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     </div>
                                                     <div class="item">
                                                        <div class="team-item">
                                                            <div class="inner">
                                                                <div class="thumb hover-effect bg-black">
                                                                    <img src={require('./assets/img/team/member-2-370x359.jpg')} alt="Image_team" />
                                                                    {/* <ul class="socials clearfix">
                                                                        <li class="facebook"><a href="#"><i class="icon flat-icon-facebook"></i></a></li>
                                                                        <li class="twitter"><a href="#"><i class="icon finance-icon-Twitter"></i></a></li>
                                                                        <li class="camera"><a href="#"><i class="icon flat-icon-instagram"></i></a></li>
                                                                    </ul> */}
                                                                </div>
                                                                <div class="text-wrap">
                                                                    <h4 class="name">
                                                                        Lorem Ipsum
                                                                    </h4>
                                                                    <div class="position">Project Manager</div>
                                                                    <a  href=".html">Read More</a>
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



                     <div className="">
                         <Footer />
                     </div>



              
            
            

              


            </div>
            
        );
    }
}



export default Aboutus;