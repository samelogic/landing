require("dotenv").config({
  path: `.env`,
});

//#region Google Tag Manager Configurations
const gtmConfig = {
  id: process.env.GTM_ID,
  includeInDevelopment: false,
};

//#endregion

//#region Contentful Configuration
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}
//#endregion

module.exports = {
  siteMetadata: {
    title: `Samelogic | Product Experiments with Microsurveys`,
    description: `Attach a microsurvey to any element within your website to contextually understand your users.`,
    siteUrl: `https://samelogic.com/`,
    social: {
      twitter: `samelogicai`,
    },
    blog: {
      title: `Samelogic Blog`,
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
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: gtmConfig,
    },
  ],
};
