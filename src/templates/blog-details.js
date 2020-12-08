import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";

const BlogDetails = ({data}) => {
  const post = data.contentfulPost;
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">
                  {post.title}
                </Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    <Link to="/">Jan 14, 2020 </Link>
                  </Text>
                  <Text mr={3}>
                    <Link to="/">Technology</Link>
                  </Text>
                  <Text>
                    <Link to="/">David Jones</Link>
                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-0">
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <PostDetails post={post} />
              </Col>
              {/* <Col lg="4" className="">
                <Sidebar />
              </Col> */}
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
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`
