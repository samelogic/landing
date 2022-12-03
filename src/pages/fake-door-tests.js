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
        <Hero title="Fake Door Testing">
          With our chrome plugin, you can modify your live website by copy and
          pasting existing elements and changing their style. This will be
          instrumented with a survey. You will get back the impressions and
          survey responses.
        </Hero>
        <Content />
      </PageWrapper>
    </>
  );
};
export default About;
