import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <article className="post">
                <h1 className="post-title">{post.frontmatter.title}</h1>
                <span className="post-date">{post.frontmatter.date}</span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
            }
        }
    }
`