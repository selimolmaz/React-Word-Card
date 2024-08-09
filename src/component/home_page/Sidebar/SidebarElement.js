import './SidebarElement.css';
import React from 'react';

function SideBarElement({ name, onClick, index }) {
    // Index'in çift veya tek olmasına göre renk belirle
    const color = index % 2 === 0 ? '#000000': '#808080';

    return (
        <button className="bar-element" style={{ backgroundColor: color }} onClick={onClick}>
            {name}
        </button>
    );
}

export default SideBarElement;
