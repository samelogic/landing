import React from "react";
import { get } from "lodash";
import PageWrapper from "../../../components/PageWrapper";
import Seo from "../../../components/SEO";
import Hero from "../../../sections/podcasts/details/Hero";
import CTA from "../../../sections/landing4/CTA";
import imgHero from "../../../assets/image/png/landing4-hero-img.png";
import social from "./social.png";

const LandingPage2 = ({ data }) => {
  const title = "Growth and Monetization at Zendesk";
  const body =
    "Farheen has a background in engineering and worked at PayPal for many years before moving into Product Management at Zendesk. She currently leads Buying Experience, which is a part of the broader Growth and Monetization team. She is interested in anything related to growth and revenue drivers for a product, KPIs that matter vs. not, and solving complex business and technical problems. She is also interested in learning the guitar but has been procrastinating for over a year now.";

  const siteUrl = get(data, "site.siteMetadata.siteUrl");
  return (
    <>
      {" "}
      <Seo
        title={title}
        description={body}
        twitterCard="summary_large_image"
        meta={[
          {
            property: "twitter:image",
            content: siteUrl + social,
          },
          {
            property: "og:image",
            content: siteUrl + social,
          },
        ]}
      />
      <PageWrapper headerDark>
        <Hero
          date="Oct 14, 2022"
          title={title}
          subtitle="Episode #28: Farheen Noorie, Director of Product Management"
          spotifyId="7zpJnMFaBNzWZsNHXKYCJ7"
          heroImage={imgHero}
        />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
