import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import PodcastList from "../sections/podcast/PodcastList";
import { graphql } from "gatsby";
import { get } from "lodash";

import Seo from "../components/SEO";
import SocialImage from "../assets/image/png/blog-social-share.png";

const PodcastRegular = ({ data }) => {
  const posts = data.allContentfulPodcast.edges.map(({ node }) => node);
  return (
    <>
      <Seo
        title="Podcasts"
        description={
          "Tips and stories to help you on the path of becoming a better product leader."
        }
        twitterCard="summary_large_image"
        meta={[
          {
            name: `twitter:image`,
            content: SocialImage,
          },
          {
            property: "og:image",
            content: SocialImage,
          },
        ]}
      />
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">The Samelogic Podcasts</Title>
                <Text>
                  Tips and stories to help you on the path of becoming a better
                  product leader.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <PodcastList posts={posts} />
      </PageWrapper>
    </>
  );
};
export default PodcastRegular;

export const pageQuery = graphql`
  query PodcastIndexQuery {
    site {
      siteMetadata {
        title
        podcast {
          title
        }
      }
    }
    allContentfulPodcast(sort: { order: DESC, fields: [createdAt] }) {
      edges {
        node {
          title
          published(formatString: "MMMM Do, YYYY")
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          heroImage {
            gatsbyImageData(layout: CONSTRAINED, width: 350, height: 196)
          }
          description {
            description
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
