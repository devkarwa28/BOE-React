import React from 'react'
import logo from '../images/Group 11.svg';
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import { Link } from 'react-router-dom';


const Footer = () =>{
    return (
        <>
            <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-4">
                    <div class="footer-1">
                        <figure>
                            <img src={logo} alt=""/>
                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nisl aenean et cursus cursus diam arcu volutpat id.
                        </p>
                        <div class="social-media">
                            <a href=""><img src={facebook} alt=""/></a>
                            <a href=""><img src={twitter} alt=""/></a>
                            <a href=""><img src={instagram} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-2 col-lg-2">
                    <div class="footer-2">
                        <h1>Quick Menu</h1>
                        <ul class="ps-3">
                            <li><Link to='/'><a href="">Home</a></Link></li>
                            <li><Link to='/about'><a href="">About</a></Link></li>
                            <li><Link to='/'><a href="">Shop</a></Link></li>
                            <li><Link to='/'><a href=''>Blog</a></Link></li>
                            <li><Link to='/'><a href="">Contact</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="footer-3">
                        <h1>Categories</h1>
                        <ul class="ps-3">
                            <li><a href="">Chairs</a></li>
                            <li><a href="">Kitchen</a></li>
                            <li><a href="">Sofas</a></li>
                            <li><a href="">Tables</a></li>
                            <li><a>Extra's</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3">
                    <div class="footer-4">
                        <h1>Explore by collection</h1>
                        <ul class="ps-3">
                            <li><a href="">Chairs</a></li>
                            <li><a href="">Kitchen</a></li>
                            <li><a href="">Sofas</a></li>
                            <li><a href="">Tables</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="disclaimer container-fluid">
        <div class="container">
            <div class="d-md-flex d-lg-flex justify-content-between">
                <h1>Copyright © 2021 Best of Export</h1>
                <h1>Designed and Development by <a href="">MicroClick Pvt Ltd.</a></h1>
            </div>
        </div>
    </div>
        </>
    )
}
export default Footer;