import React from 'react';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Header from './common/Header';
import CoursePage from './CoursePage';
import {Route,Switch,Redirect } from 'react-router-dom';
import NotFound from './NotFound';
import ManageCoursePage from './ManageCoursePage';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App(){
    return(
        <div className='container-fluid'>
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/courses" component={CoursePage}/>
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route path="/about" component={AboutPage}/>
                <Redirect from="/about-page" to="about"/>
                <Route component={NotFound}/>
            </Switch>
            
        </div>
    );

    
}

export default App;