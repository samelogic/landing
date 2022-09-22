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
import imgBrand from "./Integrations Hero Output.png";

import Hero from "../components/Hero";
import ContentLeftCopy from "../components/ContentLeftCopy";
import ContentRightCopy from "../components/ContentRightCopy";

import AmplitudeImg1 from "./Amplitude-1.png";
import AmplitudeImg2 from "./Amplitude-2.png";
import AmplitudeImg3 from "./Amplitude-3.png";
import AmplitudeOGImage from "./Amplitude-OG-Image.png";
import AmplitudeTwitterImage from "./Amplitude-Twitter-Image.png";

const IntegrationDetails = ({ data }) => {
  const siteUrl = get(data, "site.siteMetadata.siteUrl");
  return (
    <>
      {" "}
      <Seo
        title="Amplitude and Samelogic Integration"
        description="Import mock from your design system. Place it in your live product. 
        Collect and send the conversion rate and survey feedback to Amplitude. No code needed."
        twitterCard="summary_large_image"
        meta={[
          {
            property: "twitter:image",
            content: siteUrl + AmplitudeTwitterImage,
          },
          {
            property: "og:image",
            content: siteUrl + AmplitudeOGImage,
          },
        ]}
      />
      <PageWrapper footerDark>
        <Hero
          img={imgBrand}
          title="Send Concept Testing analytics to Amplitude"
          subTitle="Skip the engineers. Validate your idea in hours, not weeks"
          bodyList={[
            "Import components from your design mockups",
            "Drag and drop it anywhere on your website",
            "Get real-time analytics and feedback from real users!",
          ]}
        />

        <Video videoUrl="https://youtu.be/HU1lxZfNSqM" />

        <ContentLeftCopy
          img={AmplitudeImg1}
          title="Deeply understand your user behavior"
          body="Combine Samelogic's research data with Amplitude's
          quantitative data for a full user journey of what they are doing before
          and after participating in the experiment."
        />
        <ContentRightCopy
          img={AmplitudeImg2}
          title="Prioritize ideas based on ROI"
          body="Dig into which category of users are gravitating towards your idea. 
           Ensure you are building the right idea for the right segment of users."
        />
        <ContentLeftCopy
          img={AmplitudeImg3}
          title="Evidence-based decision making"
          body="Quickly run intent and demand tests for new features. Make decisions with
          as much data presented simply. Know who wants what and why."
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
