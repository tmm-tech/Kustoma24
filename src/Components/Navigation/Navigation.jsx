import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import './navigation.css';

function Navigation({children}) {
  return (
    <>
      <div className="TopNav">
        <TopNav />
      </div>
      <div className="Container">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Content">{children}</div>
      </div>
    </>
  );
}

export default Navigation;
