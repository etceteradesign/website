module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`
  ]
}
