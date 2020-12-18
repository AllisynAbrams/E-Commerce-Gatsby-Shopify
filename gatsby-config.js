require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `E-commerce`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `src/pages`,
        // name: `src`,
        // path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_SHOPIFY_STORE_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        apiVersion: "2020-10",
        verbose: true,
        paginationSize: 100,
        includeCollections: ["shop"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bagfavicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-shopify-buy`,
      options: {
        stores: {
          anyKeyForYourStore: {
            domain: `${process.env.GATSBY_SHOPIFY_STORE_NAME}.myshopify.com`,
            storefrontAccessToken:
              process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
