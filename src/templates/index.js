import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/layout';

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url} className="pagination-item">{props.text}</Link>
    } else {
        return <span className="pagination-item">{props.text}</span>
    }
}

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
        <Layout>
            <div className="posts">
                {group.map(({ node }) => (
                    <div key={node.id} className="post">
                        <h1 className="post-title">
                            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </h1>

                        <span className="post-date">{node.frontmatter.date}</span>
                        
                        <div>{node.excerpt}</div>
                    </div>
                ))}
            </div>
            

            <div className="pagination">
                <NavLink test={last} url={nextUrl} text="Older" />
                <NavLink test={first} url={previousUrl} text="Newer" />
            </div>
            
        </Layout>
    );
}

export default IndexPage;