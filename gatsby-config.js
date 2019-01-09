module.exports = {
    siteMetadata: {
        title: `Lanyon`,
        tagline: `A Gatsby Theme`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}