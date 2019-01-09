import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Header = ({ data }) => (
    <header className="masthead">
        <div className="container">
            <h3 className="masthead-title">
                <Link to="/">{data.site.siteMetadata.title}</Link>
                <small>{data.site.siteMetadata.tagline}</small>
            </h3>
        </div>
    </header>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        tagline
                    }
                }
            }
        `
        }
        render={data => <Header data={data} {...props} />}
    />   
)