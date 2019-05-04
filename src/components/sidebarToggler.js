import React from 'react';

const sidebarToggler = props => {
    let togglerClasses = ['sidebar-toggle'];

    if (props.active) {
        togglerClasses = ['sidebar-toggle', 'active']
    }
    return (
        <label htmlFor="sidebar-checkbox" className={togglerClasses.join(' ')}></label>
    );
}
    

export default sidebarToggler;