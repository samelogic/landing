require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Samelogic | The continuous concept testing platform`,
    description: `Get the evidence you need to know which direction to take your product with your real users.`,
    siteUrl: `https://samelogic.com/`,
    social: {
      twitter: `samelogicai`,
    },
    blog: {
      title: `Samelogic Blog`,
    },
    podcast: {
      title: `Samelogic Podcast`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    // "gatsby-plugin-readingtime-contentful",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-drift",
      options: {
        appId: "2756gthz52yn",
      },
    },
  ],
};
