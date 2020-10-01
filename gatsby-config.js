module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `https://api-7ri8d22222.strapidemo.com/graphql`
      }
    }
  ],
}
