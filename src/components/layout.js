import React, { Component } from'react';

import Sidebar from './sidebar';
import SidebarCheckbox from './sidebarCheckbox';
import SidebarToggler from './sidebarToggler';
import ContentWrapper from './wrapper';
import Header from './header';

import '../styles/poole.css';
import '../styles/lanyon.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarOpen: false
        };
    }
    

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
                <Sidebar>
                    <SidebarCheckbox 
                        value={this.state.sideBarOpen}
                        toggle={this.sidebarToggleClickHandler}
                    />
                </Sidebar>
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