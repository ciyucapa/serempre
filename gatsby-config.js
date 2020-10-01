/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api-u2yol.strapidemo.com`,
        queryLimit: 1000,
        contentTypes: [`tasks`],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://api-u2yol.strapidemo.com/graphql'
      }
    }
  ],
}
