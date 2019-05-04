import React from 'react';

const sidebarCheckbox = props => {
    return (
        <input
                type="checkbox"
                id="sidebar-checkbox"
                className="sidebar-checkbox"
                checked={props.checked} 
                onChange={(e) => props.toggle(e)}
            ></input>
    );
}

export default sidebarCheckbox;