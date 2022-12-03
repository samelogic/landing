import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="Samelogic AI">
          Product Discovery on steriods. Built on top of OpenAI, we can take
          user feedback and ideas, then give you a winning call-to-action design
          for that feature with hard evidence of who clicked it and why.
          <br />
          <br />
          Let us handle the work of parsing ideas and feedback. We'll formulate
          the hypothesis for the test, then generate a set of designs and get
          your approval.
          <br />
          <br />
          We will place those mocks infront of your real users, measure what
          they say and give you back that data.
          <br />
          <br />
          You can use our chrome plugin to train the model on your website to
          get more accurate results.
        </Hero>
        <Content />
      </PageWrapper>
    </>
  );
};
export default About;
