import React, { useState, useEffect  } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Home from './Home'
import Cards from './Cards'
import FetchTest from './FetchTest'
import Colors from './Colors'
import FormTest from './FormTest'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


function Main() {
    
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path = '/home' component= {Home} />
                    <Route path = '/about' component= {About} />
                    <Route path = '/cards' component= {Cards} />
                    <Route path = '/colors' component= {Colors} />
                    <Route path = '/formtest' component= {FormTest} />
                    <Route path = '/fetchtest' component= {FetchTest} />
                    <Redirect to='/home' />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default Main