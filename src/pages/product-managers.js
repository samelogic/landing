import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="For Product Managers">
          We're building a tool that can help you prioritize your feature
          roadmap based on evidence coming directly from the users inside your
          product.
        </Hero>
        <Content />
      </PageWrapper>
    </>
  );
};
export default About;
