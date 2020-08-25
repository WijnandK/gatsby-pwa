/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-bootstrap",
    description: "This is a gatsby js website for practise",
    keywords: "gatsby, gatbyjs, gatsby project",
    image: "/static/gatsby.jpg",
    url: "https://www.gatsbyjs.com/",
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `practice.codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
