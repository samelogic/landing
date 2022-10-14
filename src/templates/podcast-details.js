import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { get } from "lodash";
import { getSrc } from "gatsby-plugin-image";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";
import CTA from "../sections/landing4/CTA";

import Sidebar from "../sections/podcast/Sidebar";
import Seo from "../components/SEO";
import styled from "styled-components";

import iconQuote from "../assets/image/png/quote-icon.png";

const Post = styled(Box)`
  font-size: 1rem;

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol {
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.heading} !important;
  }

  a {
    text-decoration: underline;
  }

  ol li {
    list-style-type: decimal;
    margin-left: 1.25rem;
  }

  ul li {
    list-style-type: disc;
    margin-left: 1.25rem;
  }

  blockquote {
    margin-bottom: 1.25rem;
    padding-left: 50px;
    position: relative;
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 20px;
    &::after {
      content: url(${iconQuote});
      display: inline-block;
      min-width: 28px;
      max-width: 28px;
      margin-top: 8px;
      margin-right: 23px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img,
  iframe,
  video {
    max-width: 100%;
    margin-bottom: 2rem;
    display: block;
  }
`;

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
                <Post>
                  <div>
                    <img
                      className="pb-6"
                      style={{ borderRadius: "10px" }}
                      src={getSrc(podcast.heroImage)}
                      alt=""
                    />
                  </div>
                  <div className="pb-3">{podcast.subTitle.subTitle}</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: podcast.content.childMarkdownRemark.html,
                    }}
                  />
                </Post>
              </Col>
              <Col lg="4" className="">
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Section>
        <CTA />
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
