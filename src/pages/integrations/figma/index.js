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
import imgBrand from "./Integrations Hero Input.png";

import Hero from "../components/Hero";
import ContentLeftCopy from "../components/ContentLeftCopy";
import ContentRightCopy from "../components/ContentRightCopy";

import Img1 from "./1.png";
import AmplitudeImg2 from "./Amplitude-2.png";
import AmplitudeImg3 from "./Amplitude-3.png";
import AmplitudeOGImage from "./Amplitude-OG-Image.png";

const IntegrationDetails = ({ data }) => {
  const body =
    "Skip the Engineers and validate your idea in hours. Drag your figma component into your live website. Get real-time feedback and analytics to know if users really want it.";
  const siteUrl = get(data, "site.siteMetadata.siteUrl");
  return (
    <>
      {" "}
      <Seo
        title="Figma and Samelogic Integration"
        description={body}
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
        <Hero
          img={imgBrand}
          title="Concept Testing with Figma"
          subTitle="Skip the engineers. Validate your idea in hours, not weeks"
          bodyList={[
            "Import components from your design mockups",
            "Drag and drop it anywhere on your website",
            "Get real-time analytics and feedback from real users!",
          ]}
        />

        <Video videoUrl="https://youtu.be/SoQVWgY4mc4" />

        <ContentLeftCopy
          img={Img1}
          title="Fake Door Test using your design system"
          body="Literally drag figma components unto your website. 
          Setup who sees the test.
          We will take care of the analytics and surveys.
          Don't wait on UX or Engineers to implement your test!"
        />
        <ContentRightCopy
          img={AmplitudeImg2}
          title="Real environment with real users"
          body="Get unbiased analytics and feedback. 
          Your users using pretotyped features inside your product is the best testing grounds."
        />
        <ContentLeftCopy
          img={AmplitudeImg3}
          title="Who is doing what"
          body="
          Powerful combination of qual and quant, such as conversion funnel and user feedback.
          Send these events to your analytics tool for further investigation.
          Understand who really wants the feature and why!"
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
