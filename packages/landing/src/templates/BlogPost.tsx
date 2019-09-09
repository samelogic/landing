import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
const BlogPost = ({ data }) => {
  const { title, content, tags } = data.contentfulPost;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <div className="tags">
          {tags &&
            tags.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
        </div>
        <div
          className="body-text"
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html
          }}
        />
        <Link to="/posts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};
export default BlogPost;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      createdAt(formatString: "MMMM Do, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      tags
    }
  }
`;
