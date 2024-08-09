import React from 'react';
import './Navbar.css'
function Navbar({chapterName}) {
  return (
    <div className="navbar">
      <h1>Chapter Name: {chapterName}</h1>
    </div>
  );
};

export default Navbar;