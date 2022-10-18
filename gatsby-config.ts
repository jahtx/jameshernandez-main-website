import type { GatsbyConfig } from "gatsby";
import siteConfig from "./src/data/siteConfig";

const config: GatsbyConfig = {
  siteMetadata: {
    title: siteConfig.title,
    siteUrl: siteConfig.siteUrl,
    keywords: siteConfig.keywords,
    author: siteConfig.author,
    description: siteConfig.description,
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
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [siteConfig.googleAnalyticsID],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Condensed`,
          `Roboto`,
          `Roboto Slab`,
          `Roboto Flex`,
          `Roboto Serif`,
          `Open Sans`,
          `Silkscreen`,
          `Space Grotesk`,
          `Satisfy`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
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
