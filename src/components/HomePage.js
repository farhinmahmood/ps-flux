import React from "react";
import {Link} from "react-router-dom"

function HomePage(){
    return(
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p1>React,Flux and React Router for ultra-responsive web apps.</p1>
            <br/>
            {/* <a href="/about"> About </a> */}
            <Link to="about" className='btn btn-primary'>About</Link>

        </div>

    );
}
export default HomePage;