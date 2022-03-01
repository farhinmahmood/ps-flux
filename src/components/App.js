import React from 'react';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Header from './common/Header';
import CoursePage from './CoursePage';
import {Route,Switch,Redirect } from 'react-router-dom';
import NotFound from './NotFound';


function App(){
    return(
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/courses" component={CoursePage}/>
                <Route path="/about" component={AboutPage}/>
                <Redirect from="/about-page" to="about"/>
                <Route component={NotFound}/>
            </Switch>
            
        </div>
    );

    
}

export default App;