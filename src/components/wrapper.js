import React from 'react';

const contentWrapper = props => {
    let wrapperClasses = ['wrap'];

    if (props.sidebarOpen) {
        wrapperClasses = ['wrap', 'open'];
    }
    
    return <div className={wrapperClasses.join(' ')}>{props.children}</div>
}

export default contentWrapper;