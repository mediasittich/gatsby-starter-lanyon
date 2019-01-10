const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require(`gatsby-paginate`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                posts: allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                date(formatString: "DD MMMM YYYY")
                            }
                            fields {
                                slug
                            }
                            html
                            excerpt
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors) {
                throw result.errors
            }

            createPaginatedPages({
                edges: result.data.posts.edges,
                createPage: createPage,
                pageTemplate: `src/templates/index.js`,
                pageLength: 2,
                pathPrefix: ``,
                context: {}
            });

            const posts = result.data.posts.edges

            posts.map(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        slug: node.fields.slug
                    }
                });
            });
            resolve();
        })
    });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}