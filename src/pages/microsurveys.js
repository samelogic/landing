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
        <Hero title="Gather feedback on any element">
          Attach our survey to any element and collect metrics on when that
          element was shown, how many people clicked it and what they are
          saying. Design the survey to match the look and feel of your website
        </Hero>
        <Content />
      </PageWrapper>
    </>
  );
};
export default About;
