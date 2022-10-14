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
    "Uri Ashi is a senior product designer at Gong.io, the leading Revenue Intelligence platform, leveraging AI to go beyond traditional CRM and transform revenue teams. Besides that, Uri (pronounced Oori) is also a peace activist, a published author and illustrator, an award-winning animator, an entrepreneur (x2), a basso in a choir, a backing vocalist, and a guitar player in Gong’s band, a husband and a father.";

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
          subtitle="Episode #29: Uri Ashi, Senior Product Designer at Gong.io"
          spotifyId="7zpJnMFaBNzWZsNHXKYCJ7"
          heroImage={imgHero}
        />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
