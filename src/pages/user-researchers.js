import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="For User Researchers">
          We're building a tool that can help you conduct feature validation on
          the real user in the real environment without the need to touch code.
          <br />
          <br />
          Fake Door Tests can help you quickly find the users who are actually
          interested in the feature so you can conduct further research on them.
          Fail fast upfront before conducting larger concept tests with sprig
          and maze.
        </Hero>
        <Content />
      </PageWrapper>
    </>
  );
};
export default About;
