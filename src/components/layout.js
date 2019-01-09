import React, { Component } from'react';

import Sidebar from './sidebar';
import SidebarToggler from './sidebarToggler';
import Header from './header';

import '../styles/poole.css';
import '../styles/lanyon.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    handleCheckboxClick(e) {
        let checkboxState = e;

        this.setState({
            checked: checkboxState
        })
    }

    render() {
        const { children } = this.props;

        return (
            <>
                <Sidebar
                    checked={this.state.checked}
                    onChange={(e) => {this.handleCheckboxClick(e.target.checked)}}
                />
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