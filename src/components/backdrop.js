import React from 'react';

import '../styles/backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;