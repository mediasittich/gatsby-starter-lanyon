import React, { Component } from'react';

import Sidebar from './sidebar';
import SidebarToggler from './sidebarToggler';
import Header from './header';

import '../styles/poole.css';
import '../styles/lanyon.css';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillMount() {
        // document.body.classList.add('layout-reverse'); // add class to reverse layout (sidebar on the right)
        // document.body.classList.add('theme-base-08');
    }

    render() {
        const { children } = this.props;

        return (
            <>
                <Sidebar />
                <SidebarToggler />
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