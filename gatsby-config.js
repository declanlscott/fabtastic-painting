module.exports = {
  siteMetadata: {
    siteTitle: `Fabtastic Painting`,
    siteDescription: `Fabtastic Painting provides high-quality interior and exterior painting services and more for commercial and residential customers alike. 
    We go above and beyond to make your next project look Fabtastic. No matter the size of the job, big or small, we will paint it all.`,
    siteUrl: `https://fabtasticpainting.com`,
    image: `/src/images/fp-logo.webp`,
    author: `Fabtastic Painting`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/testimonials`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fabtastic Paingint`,
        short_name: `Fabtastic Painting`,
        start_url: `/`,
        icon: `src/images/fp-icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      option: {
        rule: {
          include: `src/images/svg`
        }
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./types/graphql/graphql-types.ts`
      }
    },
  ],
}
