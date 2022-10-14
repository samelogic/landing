import React from "react";
import PageWrapper from "../../../components/PageWrapper";
import Hero from "../../../sections/podcasts/details/Hero";
import CTA from "../../../sections/landing4/CTA";

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper headerDark>
        <Hero
          date="Oct 14, 2022"
          title="Growth and Monetization at Zendesk"
          subtitle="Episode #28: Farheen Noorie, Director of Product Management"
          spotifyId="7zpJnMFaBNzWZsNHXKYCJ7"
        />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
