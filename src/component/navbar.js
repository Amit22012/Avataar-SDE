import React, { useState } from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

const Navbar = () => {
  const [showMediaIcons,setShowMediaIcons]=useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log("Selected item:", item);
   
    setIsOpen(false);
  };


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
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                More<IoMdArrowDropdown />
              </button>
              {/* Dropdown menu items */}
              {isOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleItemClick("Item 1")}><a href="#">Service1</a></li>
                  <li onClick={() => handleItemClick("Item 2")}><a href="#">Service2</a></li>
                  <li onClick={() => handleItemClick("Item 3")}><a href="#">Service3</a></li>
                  {/* Add more items as needed */}
                </ul>
                )}
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
