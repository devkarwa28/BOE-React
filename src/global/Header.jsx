import React from 'react'
import logo from '../images/Group 11.svg';
import img1 from '../images/user.svg';
import img2 from '../images/bag.svg'
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';


const Header = () => {
    return(
        <header className="container-fluid px-0">
        <nav>
            <div className="container d-flex justify-content-sm-between">
                <figure className="mb-0">
                    <Link to='/'><img src={logo} alt=""/></Link>
                </figure>
                

                <ul className="d-lg-flex ps-0 sm-none md-none">
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About</Link> </li>
                    <li> <Link to='/products'>Products</Link> </li>
                    <li><Link to='/'>Blog</Link></li>
                    <li> <Link to='/contactus'>Contact</Link> </li>
                </ul>
                <div className="search-box d-lg-none d-xl-block sm-none md-none">
                    <input type="text" name="" id="" placeholder="Search Product"/>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="user sm-none md-none">
                    <img src={img1} alt=""/>
                    <img src={img2} alt="" className="me-0"/>
                    <button className="d-lg-none offcanvas-btn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="fa-solid fa-bars"></i>
                </button>
                </div>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body pt-0">

                        <ul className="d-xl-flex ps-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Blog</a></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>
        
    </header>
    )
}
export default Header;