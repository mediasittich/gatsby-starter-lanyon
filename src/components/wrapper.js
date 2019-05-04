import React from 'react';

// import './ContentWrapper.css';

const contentWrapper = props => {
    let wrapperClasses = ['wrap'];

    if (props.show) {
        wrapperClasses = ['wrap', 'open'];
    }
    
    return <div className={wrapperClasses.join(' ')}>{props.children}</div>
}

export default contentWrapper;