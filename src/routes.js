import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route,Link,NavLink } from 'react-router-dom';
import {Col,Container,Row } from 'react-bootstrap';
import Menulinks from './Menulinks';
import Home from './pages/Home';
import Aboutus from './pages/About_us.js';
import Services from './pages/services.js';
import OurNetwork from './pages/our_network.js';
import NewMedia from './pages/news_media.js';
import ContactUs from './pages/Contactus.js';
import ExtraUs from './pages/ExtraUs.js';

class routes extends Component {

    render() {
        return (
                <div>
                     <div class="loader">
                        <div class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
         	          </div>                  
                   <Router>
                    <Switch>
                       <Route exact path='/' component={Home}/>
                       <Route exact path='/aboutus' component={Aboutus}/> 
                        <Route exact path='/services' component={Services}/>
                       <Route exact path='/our_network' component={OurNetwork}/>  
                       <Route exact path='/news_media' component={NewMedia}/>
                       <Route exact path='/contact_us' component={ContactUs}/>
                       <Route exact path='/extra_us' component={ExtraUs}/>
                    </Switch>
                  </Router>
                </div>             
        );
    }
}

export default routes;