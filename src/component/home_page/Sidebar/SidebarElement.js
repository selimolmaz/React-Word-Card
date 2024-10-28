import './SidebarElement.css';
import React from 'react';

function SideBarElement({ name, onClick, index }) {
    // Index'in çift veya tek olmasına göre renk belirle
    const color = index % 2 === 0 ? 'rgb(255, 201, 101)': 'rgb(255, 168, 6)';

    return (
        <button className="bar-element" style={{ backgroundColor: color }} onClick={onClick}>
            {name}
        </button>
    );
}

export default SideBarElement;
