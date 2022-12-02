import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { getSrc } from "gatsby-plugin-image";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Sidebar from "../sections/blog/Sidebar";
import Seo from "../components/SEO";

const BlogDetails = ({ data }) => {
  const post = data.contentfulPost;
  const heroSrc = getSrc(post.heroImage);

  return (
    <>
      <Seo
        title={post.title}
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
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      ctaTitle
      ctaBody
      ctaButton
    }
  }
`;
