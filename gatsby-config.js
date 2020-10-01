module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'https://api-7ri8d.strapidemo.com',
        queryLimit: 1000,
        contentTypes: [`tasks`],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `https://api-7ri8d.strapidemo.com/graphql`
      }
    }
  ],
}
