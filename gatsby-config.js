import {STRAPI_URL} from './src/config/constants';

module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: STRAPI_URL,
        queryLimit: 1000,
        contentTypes: [`tasks`],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `${STRAPI_URL}/graphql`
      }
    }
  ],
}
