import React, { useState } from 'react';
import '../styles/NavTabs.css';


function NavTabs({ currentPage, handlePageChange }) {
  const [isActive, setisActive] = useState(false);
  function MouseOver(event) {
    event.target.style.background = '#1aaaed';
    event.target.style.border = "solid #1ba0de 1px";
    event.target.style.borderRadius = '0 0 10px 10px';
    
  }
  function MouseOut(event){
    event.target.style.background="black";
    event.target.style.border = "none";

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
            className={`navbar-burger burger has-text-white ${isActive ? "is-active" : ""}`}
            
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
              data-analytics = "Home"
              onClick={() => handlePageChange('Home')}
              className={`${'navbar-item has-text-white'} currentPage === 'Home' 
          ? 'nav-link active' 
          : 'nav-link'  `}
            >
              Home
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#about"
              data-analytics = "About"
              onClick={() => handlePageChange('About')}
              className={`${'navbar-item has-text-white'} currentPage === 'About' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              About
            </a></li>
            <li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#analyticsprojects"
              data-analytics = "AnalyticsProjects"
              onClick={() => handlePageChange('AnalyticsProjects')}
              className={`${'navbar-item has-text-white'} currentPage === 'AnalyticsProjects' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Analytics Projects
            </a></li>
            <li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#webdevprojects"
              data-analytics = 'Projects'
              onClick={() => handlePageChange('Projects')}
              className={`${'navbar-item has-text-white'} currentPage === 'Projects' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Web Dev Projects
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#contacts"
              data-analytics = 'Contacts'
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
