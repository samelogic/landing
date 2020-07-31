module.exports = {
  siteMetadata: {
    title: `Samelogic`,
    description: `Turn your product into a live interactive canvas for customer feedback. It's like Heap Analytics without wasting time guessing what all the metrics mean.`,
    author: `@samelogicAI`,
    siteUrl: `https://samelogic.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cdteg4ybalbr`,
        accessToken: `xDoouTi1b_kYU2beViDWyTr3qFN0A0Rb0Kjv3s6LvHA`,
      },
    },
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    //Heap Analytics
    {
      resolve: "gatsby-plugin-heap",
      options: {
        appId: "100207806",
        enableOnDevMode: false, // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
    //Drift Chat Widget
    {
      resolve: "gatsby-plugin-drift",
      options: {
        appId: "2756gthz52yn",
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `100`,
              `100i`,
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`, `800`],
          },
          {
            family: `Raleway`,
            variants: [`500`, `600`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
