import React from 'react';
import './Sidebar.css';
function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default Sidebar;