module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `https://api-3qw34.strapidemo.com/graphql`
      }
    }
  ],
}
