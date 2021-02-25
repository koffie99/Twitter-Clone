import React from 'react'
import './SidebarOption.css';

function SidebarOption( {Icon, text} ) {
    return (
        <div className="sidebarOption">
            <Icon />
            <h3>{text}</h3>
        </div>
    )
}

export default SidebarOption
