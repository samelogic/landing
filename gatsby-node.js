const Promise = require("bluebird");
const path = require("path");
const {
  documentToPlainTextString,
} = require("@contentful/rich-text-plain-text-renderer");
const words = require("lodash/words");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|thanks|reset|coming/)) {
    page.context.layout = "bare";
    createPage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const podcastDetails = path.resolve("./src/templates/podcast-details.js");
    const blogPost = path.resolve("./src/templates/blog-details.js");
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulPodcast {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulPost.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });

        const podcasts = result.data.allContentfulPodcast.edges;
        podcasts.forEach((podcast, index) => {
          createPage({
            path: `/podcast/${podcast.node.slug}/`,
            component: podcastDetails,
            context: {
              slug: podcast.node.slug,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const timeToRead = (content) => {
    let TTR;
    // Change the WPM amount (240) below to higher number if your readers are faster
    // or lower if your readers are slower
    const avgWPM = 240;
    const wordCount = words(content).length;
    TTR = Math.round(wordCount / avgWPM);
    if (TTR === 0) {
      TTR = 1;
    }
    return TTR;
  };

  // Change the "ContentfulBlogArticle" below to match your Content Type
  if (node.internal.type === "ContentfulPost") {
    // Match the "bodyContent" below to match the name of your rich text field
    const data = JSON.parse(node.body.raw);
    const allText = documentToPlainTextString(data);
    const timeToReadValue = timeToRead(allText);
    createNodeField({ node, name: "timeToRead", value: timeToReadValue });
  }
};
