import React, { useState } from 'react';
import '../styles/NavTabs.css';


function NavTabs({ currentPage, handlePageChange }) {
  const [isActive, setisActive] = useState(false);
  function MouseOver(event) {
    event.target.style.background = 'Tomato';
  }
  function MouseOut(event){
    event.target.style.background="black";
  }
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        
          <a 
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger has-text-white${isActive ? "is-active" : ""}`}
            //aria-label="menu"
            // aria-expanded="false"
            // data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <ul ><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={`${'navbar-item has-text-white'} currentPage === 'Home' 
          ? 'nav-link active' 
          : 'nav-link'  `}
            >
              Home
            </a></li><li>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#about"
              onClick={() => handlePageChange('About')}
              className={`${'navbar-item has-text-white'} currentPage === 'About' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              About
            </a></li><li>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={`${'navbar-item has-text-white'} currentPage === 'Projects' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Projects
            </a></li><li>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#contacts"
              onClick={() => handlePageChange('Contacts')}
              className={`${'navbar-item has-text-white'} currentPage === 'Contacts' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Contacts
            </a></li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}

export default NavTabs;
