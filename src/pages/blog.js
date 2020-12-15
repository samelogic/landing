import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import BlogList from "../sections/blog/BlogList";
import { graphql } from 'gatsby'
import get from "lodash";

const BlogRegular = ({data}) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const posts = data.allContentfulPost.edges.map(({node}) => node);

  console.log(posts);

  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">The Samelogic Blog</Title>
                <Text>
                Tips and stories to help you on the path of becoming a better product leader.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList posts={posts} />
      </PageWrapper>
    </>
  );
};
export default BlogRegular;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

