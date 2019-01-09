import React from 'react';
import { Link } from 'gatsby';

const Sidebar = props => {
    return (
        <>
        {/* Target for toggling the sidebar '.sidebar-checkbox' is for regular styles, '#sidebar-checkbox' for behaviour. */}
        <input
            type="checkbox"
            id="sidebar-checkbox"
            className="sidebar-checkbox"
            checked={props.checked}
            onChange={props.onChange}
        ></input>

        {/* Toggleable sidebar */}
        <aside className="sidebar" id="sidebar">
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

export default Sidebar;