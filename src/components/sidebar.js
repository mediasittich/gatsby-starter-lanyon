import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        // this.node = React.createRef();
        this.state = {
            checked: false
        }

        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    /**
     * Detect click outside the sidebar when sidebar is open
     * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
     */
    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick, false);
    }
    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleOutsideClick, false);
    }

    handleCheckboxClick(e) {
        let checkboxState = e.target.checked;

        this.setState({
            checked: checkboxState
        });
    }
    // Close sidebar when click outside
    handleOutsideClick(e) {
        if (this.node) {
            const domNode = ReactDOM.findDOMNode(this.node);

            if (!this.node.contains(e.target)) {
                this.setState({
                    checked: false
                })
            }
        }
    }

    render() {
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