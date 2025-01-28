require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Freddies Portfolio',
    description: 'Official Contentful Gatsby Starter',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '5h997uwcejr9',
        accessToken: 'COGcJg_FMKxkoW4QqQV_WdzibPKKZUOexCbeDMPnoJ8',
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}
