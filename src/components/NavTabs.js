import React, { useState } from 'react';
import '../styles/NavTabs.css';

// style for mouse over and out is declared here 
function NavTabs({ currentPage, handlePageChange }) {
  const [isActive, setisActive] = useState(false);
  function MouseOver(event) {
    event.target.style.background = '#1aaaed';
    event.target.style.border = "solid #1ba0de 1px";
    event.target.style.borderRadius = '0 0 10px 10px';
    
  }
  function MouseOut(event){
    event.target.style.background="#5b6362";
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
              onClick={() => {handlePageChange('Home');
                //make the mobile menu closing when clicking on the item
                setisActive(!isActive);
              }}
              className={`${'navbar-item has-text-white'} currentPage === 'Home' 
          ? 'nav-link active' 
          : 'nav-link'  `}
            >
              Home
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#about"
              data-analytics = "About"              
              onClick={() => {
                handlePageChange('About');
                setisActive(!isActive);
              //   window.dataLayer.push({     //NOT NEEDED IT ANYMORE SINCE CAN GRAB THAT PAGE WITH HISTORY CHANGE ON GTM
              //     event: 'custom_page_view',
              //     eventProps: {
              //        page: window.location.hash
              //     }
              //   });
              }
            }              
              className={`${'navbar-item has-text-white'} currentPage === 'About' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              About
            </a></li>
            <li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#analytics-projects"
              data-analytics = "AnalyticsProjects"
              onClick={() => { 
                handlePageChange('AnalyticsProjects');
                setisActive(!isActive);
                // window.dataLayer.push({
                //   event: 'custom_page_view',
                //   eventProps: {
                //      page: window.location.hash
                //   }
                // });
              }

              }
              className={`${'navbar-item has-text-white'} currentPage === 'AnalyticsProjects' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Analytics Projects
            </a></li>
            <li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#web-dev-projects"
              data-analytics = 'Projects'
              onClick={() => {
                handlePageChange('Projects');
                setisActive(!isActive);
                // window.dataLayer.push({
                //   event: 'custom_page_view',
                //   eventProps: {
                //      page: window.location.hash
                //   }
                // });
              }
              
              }
              className={`${'navbar-item has-text-white'} currentPage === 'Projects' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Web Dev Projects
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#contacts"
              data-analytics = 'Contacts'
              onClick={() => {
                handlePageChange('Contacts');
                setisActive(!isActive);
                // window.dataLayer.push({
                //   event: 'custom_page_view',
                //   eventProps: {
                //      page: window.location.hash
                //   }
                // });
              }
              }
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
