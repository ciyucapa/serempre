module.exports = {
  plugins: [
      `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `https://api-7ri8d.strapidemo.com/graphql`
      }
    }
  ],
}
