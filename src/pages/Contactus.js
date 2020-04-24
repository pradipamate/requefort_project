import React, { Component} from 'react';
import {FormControl,Col,Button,Container,Label,Row,Form } from 'react-bootstrap';
import '../index.css';
import Menulinks from '../Menulinks';
import Header from './header';
import Footer from './footer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {connect} from 'react-redux';
import axios from 'axios';
import {Contactformdata,fetchstudent} from './action/contactinfo';





class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state={name:"", mobileno:"", email:"", message:""}
       
        // for sending data
        this.submithandler=this.submithandler.bind(this);
        // for mailing
        this.sendMail=this.sendMail.bind(this);
    }

    changehandler=(event)=>{
           console.log(event.target.value);
           this.setState({[event.target.name]:event.target.value})
    }


    // for fetching data throw api
componentDidMount() {
            this.props.dispatch(fetchstudent()); }


// for submitt Form data
    submithandler=(event)=>{
        event.preventDefault()
        console.log(this.state.name)
        var data={};
        data=this.state;
        // var name = this.state.name;
        // var mobileno = this.state.mobileno;
        // var email = this.state.email;
        // var message = this.state.message;
        // data.name = name;
        // data.mobileno = mobileno;
        // data.email = email;
        // data.message = message;
        console.log(data);
        this.setState({name:"", mobileno:"", email:"", message:""});
     
        var bodyFormData = new FormData();
        bodyFormData.set('name', this.state.name);
        bodyFormData.set('mobileno', this.state.mobileno);
        bodyFormData.set('email', this.state.email);
        bodyFormData.set('message', this.state.message);
        this.props.dispatch(Contactformdata(bodyFormData));
    }

    sendMail() {
        alert();
        window.Email.send({
            
        //    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
            Host : "45.113.122.73",
            Username : "gaurav@socialstardom.in",
            Password : "gJ8404#@#@",
           To : 'pradipmate07@gmail.com',
           From : "you@isp.com",
           Subject : "This is the subject",
           Body : "And this is the body"
       }).then(
     message => alert(message)
   );
 }
      
    render() {
        // for adding state
        const{name,mobileno,email,message}=this.state;
       
        //for feteching data
        // const studentAlldata=this.props.studentdetails;
        // console.log("list all student",studentAlldata);
        //  if(studentAlldata.fetching){
        //      alert("startingfetching");
        //  }
        //  if(!studentAlldata.fetching && studentAlldata!==undefined ){
        //    alert("2");
        //  }








        return (
            <div>
                <div id="inner_pages">
                      <div>
                         <Header />
                     </div> 
                     <div className="Breadcrumb_main " id="featured-title">
                         <Container>
                           <Row className="featured-title-inner-wrap">
                                    <div className="featured-title-heading-wrap">
                                        <h1 className="featured-title-heading">CONTACT US</h1>
                                     </div>
                                     <div id="breadcrumbs">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active>CONTACT US</Breadcrumb.Item>
                                        </Breadcrumb>
                                        </div>
                           </Row>
                        </Container>
                     </div>

                     <div className="row-video" id="latest_news">
                         <Container>
                              <div className="themesflat-spacer-60" ></div>
                                   <div className="themesflat-headings style-1 clearfix">
                                        <h2 className="heading clearfix">CONTACT US</h2>
                                        <div className="sep clearfix"></div>
                                        <p className="sub-heading clearfix">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat . 
                                                </p>
                                  </div>
                               <div className="themesflat-spacer-60" ></div>
                              <Row>
                                  <Col sm={3}>
                                            <div className="iconbox style3">
                                                    <div className="box-header">
                                                        <div className="box-icon">
                                                            <i className="fa fa-phone"></i>
                                                        </div>
                                                    </div>
                                                    <div className="box-content">  
                                                        <a href="#" rel="alternate">+91-98231 80089</a> 
                                                    </div>
                                           </div>
                                  </Col>
                                  <Col sm={3}>
                                       <div className="iconbox style3">
                                                    <div className="box-header">
                                                        <div className="box-icon">
                                                            <i className="fa fa-envelope"></i>
                                                        </div>
                                                    </div>
                                                    <div className="box-content pdl">  
                                                        <a href="#" rel="alternate">roquefortconsulting@gmail.com</a> 
                                                    </div>
                                        </div>
                                  </Col>
                                  <Col sm={3}>
                                         <div className="iconbox style3">
                                                    <div className="box-header">
                                                        <div className="box-icon">
                                                            <i className="fa fa-globe"></i>
                                                        </div>
                                                    </div>
                                                    <div className="box-content">  
                                                        <a href="#" rel="alternate">www.roquefort.in</a> 
                                                    </div>
                                        </div>
                                  </Col>
                                  <Col sm={3}>
                                        <div className="iconbox style3">
                                                    <div className="box-header">
                                                        <div className="box-icon">
                                                            <i className="fa fa-clock-o"></i>
                                                        </div>
                                                    </div>
                                                    <div className="box-content pdl2">  
                                                        <a href="#" rel="alternate">Open hours: 8.00-18.00 Mon-Fri</a> 
                                                    </div>
                                        </div>
                                  </Col>
                             </Row>
                             <div className="themesflat-spacer-60" ></div>
                         </Container>
                     </div>
                     <div className="">
                         <Container>
                             <Row>
                                 <Col sm={8}>
                                    <Form onSubmit={this.submithandler}> 
                                     <Row>
                                         <Col sm={6}>
                                            <Form.Group controlId="formBasicEmail">
                                                       <Form.Control type="text" placeholder="YOUR NAME*"  onChange={this.changehandler}  name="name"  value={name}  />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={6}>
                                           <Form.Group controlId="formBasicEmail">
                                                       <Form.Control type="text" placeholder="YOUR PHONE*"  onChange={this.changehandler} name="mobileno" value={mobileno} />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={12}>
                                            <Form.Group controlId="formBasicEmail">
                                                       <Form.Control type="email" placeholder="YOUR EMAIL*"   onChange={this.changehandler} name="email" value={email} />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={12}>
                                             <Form.Group controlId="formBasicEmail">
                                                <Form.Control as="textarea" rows="5"   placeholder="Message"  onChange={this.changehandler}  name="message" value={message} />
                                            </Form.Group>
                                         </Col>
                                         <Col sm={4}>
                                           <Form.Group controlId="formBasicEmail">
                                                     <button type="submit" className="themesflat-button blue">Submit</button>
                                            </Form.Group>
                                         </Col>
                                         <Col sm={8}>
                                           <Form.Group controlId="formBasicEmail">
                                                  <span className="your-notification color-white font-size-14 padding-left-37">Thank you for showing your interest in us.</span>
                                            </Form.Group>
                                         </Col>

                                        
                                     </Row>
                                    </Form>
                                 </Col>
                                 {/* <button onClick={this.sendMail} > Send Mail </button> */}
                                 <Col sm={4}>
                                    <div className="themesflat-contact-info">
                                                    <div className="inner">
                                                        <div className="contact-info-item clearfix">
                                                            <h6 className="title margin-bottom-16"><span>ADDRESS</span></h6>
                                                            <p>Roquefort, Pune/Mumbai, India</p>
                                                        </div>

                                                        <div className="contact-info-item clearfix">
                                                            <h6 className="title"><span>PHONE </span></h6>
                                                            <ul>
                                                                <li><a href="#">WhatsApp: +91-98231 80089</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="contact-info-item clearfix">
                                                           <h6 className="title margin-bottom-16"><span>ADDRESS</span></h6>
                                                            <p>383 South Cheryl Lane, CA, 91789, United state</p> 
                                                            <div className="socials clearfix">
                                                                <span className="icons">
                                                                    <a href="#" title="Facebook">
                                                                        <span className="finance-icon-Facebook" aria-hidden="true"></span>
                                                                    </a>
                                                                    <a href="#" title="Twitter">
                                                                        <span className="finance-icon-Twitter" aria-hidden="true"></span>
                                                                    </a>
                                                                    <a href="#" title="Linkedin">
                                                                        <span className="flat-icon-linkedin" aria-hidden="true"></span>
                                                                    </a>
                                                                    <a href="#" title="Instagram">
                                                                        <span className="flat-icon-instagram" aria-hidden="true"></span>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                 </div>
                                        </div>
                                 </Col>
                             </Row>
                             <div className="themesflat-spacer-60" ></div>
                         </Container>
                     </div>
                     <div className="">
                         <Container>
                            <Row>
                                 <Col sm={12}>
                                    <iframe src="https://www.google.com/maps/d/embed?mid=1gaQSzilmEXF7ALoUH7VAifYe9fg" width="100%" height="480"></iframe>
                                 </Col>
                            </Row>
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


const mapStatetToProps=(state)=>{
    //console.log("state condition",state)
return{ 
      studentdetails:state.ContactUs
  }
}
export default connect(mapStatetToProps)(Contactus);
