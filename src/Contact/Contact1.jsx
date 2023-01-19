import React from 'react'
import { Link } from 'react-router-dom';

const Contact1 = () =>{
    return(
        <>
            <div className="explore-header">
        <div className="container">
            <div className="col-lg-6">
                <h1>Contact Us</h1>
                <p>
                    <Link to='/'>Home</Link> / <a href="">Contact Us</a>
                </p>
            </div>
        </div>
    </div>
        </>
    )
}
export default Contact1;