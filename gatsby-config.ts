import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `South Tejas Design`,
    siteUrl: `https://southtejasdesign.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            debug: true,
            sourceMap: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Aboreto`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

export default config;
