import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";

import PageWrapper from "../../../components/PageWrapper";
import { Section, Title, Text, Box, Button } from "../../../components/Core";
import CTAButton from "../../../components/CTAButton/CTAButton";
import Seo from "../../../components/SEO";
import { get } from "lodash";

import Video from "../components/Video";
import CTA from "../../../sections/landing4/CTA";
import imgBrand from "./logo.png";

import Hero from "../components/Hero";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";

import AmplitudeImg1 from "./Amplitude-1.png";
import AmplitudeImg2 from "./Amplitude-2.png";
import AmplitudeImg3 from "./Amplitude-3.png";
import AmplitudeOGImage from "./Amplitude-OG-Image.png";

const IntegrationDetails = ({ data }) => {
  const siteUrl = get(data, "site.siteMetadata.siteUrl");
  return (
    <>
      {" "}
      <Seo
        title="Amplitude and Samelogic Integration"
        description="Send your quantitative and qualitative user research events
        to Amplitude. Dig deeper into the how and why are users
        interacting with your feature test."
        twitterCard="summary_large_image"
        meta={[
          {
            property: "twitter:image",
            content: siteUrl + AmplitudeOGImage,
          },
          {
            property: "og:image",
            content: siteUrl + AmplitudeOGImage,
          },
        ]}
      />
      <PageWrapper footerDark>
        <Hero img={imgBrand} />

        <Video videoUrl="https://youtu.be/HU1lxZfNSqM" />

        <Content1
          img={AmplitudeImg1}
          title="Deeply understand your user behavior"
          body="Combine Samelogic's research data with Amplitude's
          quantitative data for a full user journey of what they are doing before
          and after participating in the experiment."
        />
        <Content2
          img={AmplitudeImg2}
          title="Prioritize ideas based on ROI"
          body="Dig into which category of users are gravitating towards your idea. 
           Ensure you are building the right idea for the right segment of users."
        />
        <Content1
          img={AmplitudeImg3}
          title="Evidence-based decision making"
          body="Quickly run intent and demand tests for new features. Make decisions with
          as much data presented simply."
        />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IntegrationDetails;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
