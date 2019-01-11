import React, { Component } from 'react';
import { Link } from 'gatsby';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }

        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick, false);
    }
    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleOutsideClick, false);
    }

    handleCheckboxClick(e) {
        // console.log(e.target.checked)
        let checkboxState = e.target.checked;

        this.setState({
            checked: checkboxState
        });
    }

    handleOutsideClick(e) {
        // console.log(e.target)
        
        if (this.state.checked && !this.node.contains(e.target)) {
            console.log('clicked outside sidebar')
            this.setState({
                checked: !this.state.checked
            })
        }
    }

    render() {
        // console.log(this.state.checked)
        // console.log(this.props)
        return (
            <>
                {/* Target for toggling the sidebar '.sidebar-checkbox' is for regular styles, '#sidebar-checkbox' for behaviour. */}
                <input
                    type="checkbox"
                    id="sidebar-checkbox"
                    className="sidebar-checkbox"
                    checked={this.state.checked}
                    onChange={(e) => this.handleCheckboxClick(e)}
                ></input>

                {/* Toggleable sidebar */}
                <aside className="sidebar" id="sidebar" ref={node => { this.node = node; }}>
                    <header className="sidebar-item">
                        <p>
                        A reserved Gatsby theme, ported from the Jekyll theme of the same name, that places the utmost gravity on content with a hidden drawer. Made by <a href="https://twitter.com/mediasittich">@mediasittich</a>.
                        </p>
                    </header>

                    <nav className="sidebar-nav">
                        <Link to="/" className="sidebar-nav-item">Home</Link>
                        <Link to="/about" className="sidebar-nav-item">About</Link>
                        <a href="http://github.org" className="sidebar-nav-item">GitHub project</a>
                    </nav>

                    <footer className="sidebar-item">
                        &copy; {new Date().getFullYear()}. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </aside>
            </>
        );
    }
}

export default Sidebar;