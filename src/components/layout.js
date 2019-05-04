import React, { Component } from'react';

import Sidebar from './sidebar';
import ContentWrapper from './wrapper';
import SidebarToggler from './sidebarToggler';
import Header from './header';

import '../styles/poole.css';
import '../styles/lanyon.css';

class Layout extends Component {
    state = {
        sideBarOpen: false
    };

    UNSAFE_componentWillMount() {
        // document.body.classList.add('layout-reverse'); // add class to reverse layout (sidebar on the right)
        // document.body.classList.add('theme-base-08');
    }

    sidebarToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideBarOpen: !prevState.sideBarOpen};
        });
    };

    render() {
        const { children } = this.props;

        return (
            <>
                <Sidebar />
                <SidebarToggler />
                <ContentWrapper>
                    <Header />
                    <main className="container content">
                        {children}
                    </main>
                </ContentWrapper>
            </>
        );
    }
}

export default Layout;