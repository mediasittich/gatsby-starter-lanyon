import React from'react';

import Header from './header';

export default ({ children }) => (
    <div style={{ maxWidth: 650, margin: `0 auto`}}>
        <Header />
        {children}
    </div>
)