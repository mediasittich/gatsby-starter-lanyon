module.exports = {
    siteMetadata: {
        title: `Lanyon`,
        tagline: `A Gatsby Theme`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
    ],
}