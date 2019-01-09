import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
    console.log(data)
    const posts = data.allMarkdownRemark.edges
    return (
        <Layout>
            <div className="posts">
                {posts.map(({ node }) => (
                    <article className="post" key={node.id}>
                        <h1 className="post-title">
                            {node.frontmatter.title}
                        </h1>

                        <span className="post-date">{node.frontmatter.date}</span>

                        {node.excerpt}
                    </article>
                ))}
            </div>
        </Layout>
    );
}

export const indexQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                    }
                    html
                    excerpt
                }
            }
        }
    }
`