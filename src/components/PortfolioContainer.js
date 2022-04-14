import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './Projects';
import About from './About';
import Contacts from './Contacts';
import Home from './Home'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contacts />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
    </div>
  );
}
