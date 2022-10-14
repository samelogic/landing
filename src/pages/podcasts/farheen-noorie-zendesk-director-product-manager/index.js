import React from "react";
import { get } from "lodash";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import PageWrapper from "../../../components/PageWrapper";
import Seo from "../../../components/SEO";
import { Section, Title, Text, Box } from "../../../components/Core";
import imgHero from "./fareem.png";
import PodcastDetails from "../../../sections/podcast/PodcastDetails";
import social from "./social.png";

const LandingPage2 = ({ data }) => {
  const podcast = {
    title:
      "#28: Farheen Noorie, Director of Product Management Growth and Monetization at Zendesk",
    subtitle:
      "We spoke with Farheen about her background in engineering and what it was like transitioning over to Product Management. Check out this exciting episode below.",
    description:
      "Farheen has a background in engineering and worked at PayPal for many years before moving into Product Management at Zendesk. She currently leads Buying Experience, which is a part of the broader Growth and Monetization team. She is interested in anything related to growth and revenue drivers for a product, KPIs that matter vs. not, and solving complex business and technical problems. She is also interested in learning the guitar but has been procrastinating for over a year now.",
    content: {
      heroImage: imgHero,
      content: {
        childMarkdownRemark: {
          html: `
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4smpLfFOKQruKHWIEaUmYu?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        },
      },
    },
  };

  const siteUrl = get(data, "site.siteMetadata.siteUrl");
  return (
    <>
      <Seo
        title={podcast.title + " | The Samelogic Podcast"}
        description={podcast.description}
        twitterCard="summary_large_image"
        meta={[
          {
            name: `twitter:image`,
            content: imgHero,
          },
          {
            property: `og:image`,
            content: imgHero,
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
                  <Text mr={3}>{podcast.subtitle}</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-8 pt-2">
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                <PodcastDetails post={podcast.content} />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
