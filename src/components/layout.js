import React from'react';

import Header from './header';

import '../styles/poole.css';
import '../styles/lanyon.css';

export default ({ children }) => (
    <div className="wrap">
        <Header />
        
        <main className="container content">
            {children}
        </main>
        
    </div>
)