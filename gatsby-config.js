/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api-1xhfx.strapidemo.com`,
        queryLimit: 1000,
        contentTypes: [`tasks`],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://api-1xhfx.strapidemo.com'
      }
    }
  ],
}
