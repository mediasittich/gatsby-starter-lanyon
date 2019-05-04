import React, { Component } from'react';

import Sidebar from './sidebar';
import SidebarCheckbox from './sidebarCheckbox';
import SidebarToggler from './sidebarToggler';
import Backdrop from './backdrop';
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
        this.sidebarToggleClickHandler = this.sidebarToggleClickHandler.bind(this);
    }
    

    UNSAFE_componentWillMount() {
        /* To apply themes and change placement of sidebar uncomment and update code below */
        
        // document.body.classList.add('layout-reverse'); // add class to reverse layout (sidebar on the right)
        // document.body.classList.add('sidebar-overlay'); // add class to make sidebar overlay viewport content
        // document.body.classList.add('theme-base-0f'); // add theme class to layout
    }

    sidebarToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideBarOpen: !prevState.sideBarOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideBarOpen: false});
    };

    render() {
        const { children } = this.props;
        let backdrop;

        if (this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
            <>
                <Sidebar
                    show={this.state.sideBarOpen}
                >
                    {/* Target for toggling the sidebar '.sidebar-checkbox' is for regular styles, '#sidebar-checkbox' for behaviour. */}
                    <SidebarCheckbox 
                        value={this.state.sideBarOpen}
                        toggle={this.sidebarToggleClickHandler}
                    />
                </Sidebar>
                <SidebarToggler
                    active={this.state.sideBarOpen}
                />
                <ContentWrapper
                    sidebarOpen={this.state.sideBarOpen}
                >
                    {backdrop}
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