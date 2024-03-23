import React, { useState } from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

const Navbar = () => {
  const [showMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>A</span>VATAAR
          </h2>
        </div>

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare className='facebook'/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare className='instagram'/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare className='youtube'/>
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className='hamburger' />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
