import React from 'react';

const sidebarToggler = () => (
    <div>
        <input type="checkbox" id="sidebar-checkbox" className="sidebar-checkbox"></input>
        <label htmlFor="sidebar-checkbox" className="sidebar-toggle"></label>
    </div>
)

export default sidebarToggler;