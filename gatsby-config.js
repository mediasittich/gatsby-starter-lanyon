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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {}
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 720,
                        }
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noopener noreferrer"
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}