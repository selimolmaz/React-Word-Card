import React from 'react';
import './Navbar.css'
function Navbar({ chapterName }) {
  return (
    <div className="navbar">
      <div>
        <h1>
          Reader At Work
        </h1>
      </div>
      <div className="chapter-container">
        <span className="chapter-label">chapter name:</span>
        <span className="chapter-name">{chapterName}</span>
      </div>
      <div className='user-container'>
        <h1 >🤖</h1>
      </div>

    </div>
  );
};

export default Navbar;