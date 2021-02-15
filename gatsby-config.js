require('dotenv').config({
  path: `.env`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

const devHeapAppId = '2289581087'
const buildHeapAppId = process.env.CONTEXT === 'production' ? process.env.HEAP_APPID_PROD : process.env.HEAP_APPID_PREVIEW
const heapAppId = process.env.NODE_ENV !== 'production' ? devHeapAppId : buildHeapAppId
  

module.exports = {
  siteMetadata: {
    title: `Samelogic | Product Experiments with Micro-Surveys`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: heapAppId,
        enableOnDevMode: true
      },
    },
  ],
};
