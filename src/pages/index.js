import React from "react";
import { graphql } from "gatsby";
import Hero from "../sections/landing4/Hero";
import Principle from "../sections/landing4/Principle";
import Segmentation from "../sections/landing4/Segmentation";
import ValidateWithoutBuilding from "../sections/landing4/ValidateWithoutBuilding";
import Why from "../sections/landing4/Why";
import Participate from "../sections/landing4/Participate";
import BetterProducts from "../sections/landing4/BetterProducts";
import What from "../sections/landing4/What";
import Fact from "../sections/landing4/Fact";
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
            property: "og:image",
            content: SocialImage,
          },
        ]}
      />
      <PageWrapper headerDark footerDark>
        <Hero />
        <Principle />
        <Participate />
        <Fact />
        <Segmentation />
        <BetterProducts />
        <ValidateWithoutBuilding />
        <Why />
        <What />
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
