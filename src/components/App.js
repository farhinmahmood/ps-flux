import React from 'react';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Header from './common/Header';


function App(){
    function getPage(){

    const route = window.location.pathname;
    if(route === "/about") return <AboutPage />;
    return <HomePage/>
    }
    return(
        <div className='container-fluid'>
            <Header/>
            {getPage()}
        </div>
    );

    
}

export default App;