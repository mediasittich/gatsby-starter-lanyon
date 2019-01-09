import React, { Component } from'react';

import Sidebar from './sidebar';
import Header from './header';

import '../styles/poole.css';
import '../styles/lanyon.css';

class Layout extends Component {
    render() {
        const { children } = this.props;

        return (
            <>
                <Sidebar />
                <div className="wrap">
                    <Header />

                    <main className="container content">
                        {children}
                    </main>
                    
                </div>
            </>
        );
    }
}

export default Layout;