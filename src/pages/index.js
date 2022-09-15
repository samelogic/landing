import React from "react";
import { graphql } from "gatsby";
import Hero from "../sections/landing4/Hero";
import Feature from "../sections/landing4/Feature";
import Clients from "../sections/landing4/Clients";
import Mockups from "../sections/landing4/Mockups";
import TestIdeas from "../sections/landing4/TestIdeas";
import Feedback from "../sections/landing4/Feedback";
import Science from "../sections/landing4/Science";
import Participate from "../sections/landing4/Participate";
import Testimonial from "../sections/landing4/Testimonial";
import Fact from "../sections/landing4/Fact";
import Pricing from "../sections/landing4/Pricing";
import Faq from "../sections/landing4/Faq";
import CTA from "../sections/landing4/CTA";
import PageWrapper from "../components/PageWrapper";
import Seo from "../components/SEO";
import SocialImage from "../assets/image/png/home-social-share.png";

const LandingPage4 = ({ data }) => {
  return (
    <>
      <Seo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        twitterCard="summary_large_image"
        meta={[
          {
            name: `twitter:image`,
            content: SocialImage,
          },
          {
            name: "og:image",
            content: SocialImage,
          },
        ]}
      />
      <PageWrapper headerDark footerDark>
        <Hero />
        {/* <Feature /> */}
        <Mockups />
        <Participate />
        <TestIdeas />
        <Science />
        <Feedback />
        <Testimonial />
        {/* <Clients /> */}
        <Fact />
        {/* <Pricing /> */}
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage4;

export const pageQuery = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
