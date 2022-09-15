import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { get } from "lodash";
import { getSrc } from "gatsby-plugin-image";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";
import Seo from "../components/SEO";

const BlogDetails = ({ data }) => {
  const siteTitle = get(data, "site.siteMetadata.blog.title");
  const post = data.contentfulPost;
  const heroSrc = getSrc(post.heroImage);
  return (
    <>
      <Seo
        title={post.title + " | The Samelogic Blog"}
        description={post.description.description}
        twitterCard="summary_large_image"
        meta={[
          {
            name: `twitter:image`,
            content: heroSrc,
          },
          {
            property: `og:image`,
            content: heroSrc,
          },
        ]}
      />
      <PageWrapper footerDark>
        <Section className="pb-4">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">{post.title}</Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    <Link to="/">{post.createdAt}</Link>
                  </Text>
                  {/* <Text mr={3}>
                    <Link to="/">Technology</Link>
                  </Text>
                  <Text>
                    <Link to="/">David Jones</Link>
                  </Text> */}
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-8 pt-2">
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                <PostDetails post={post} />
              </Col>
              <Col lg="4" className="">
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Section>
        {/* <Comments /> */}
      </PageWrapper>
    </>
  );
};
export default BlogDetails;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        blog {
          title
        }
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      description {
        description
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
