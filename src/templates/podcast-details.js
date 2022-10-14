import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { get } from "lodash";
import { getSrc } from "gatsby-plugin-image";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PodcastContent from "../sections/podcast/PodcastContent";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";
import Seo from "../components/SEO";

const PodcastDetails = ({ data }) => {
  const siteTitle = get(data, "site.siteMetadata.blog.title");
  const podcast = data.contentfulPodcast;
  console.log(podcast);
  const heroSrc = getSrc(podcast.heroImage);
  return (
    <>
      <Seo
        title={podcast.title + " | The Samelogic Podcast"}
        description={podcast.description.description}
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
                <Title variant="hero">{podcast.title}</Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>{podcast.published}</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-8 pt-2">
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                <PodcastContent post={podcast} />
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
export default PodcastDetails;

export const pageQuery = graphql`
  query PodcastsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        blog {
          title
        }
      }
    }
    contentfulPodcast(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      subTitle {
        subTitle
      }
      description {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
