import React from "react";
import Hero from "../../sections/apps/Hero";
import Clients from "../../sections/apps/Clients";
import Feature from "../../sections/apps/Feature";
import Content1 from "../../sections/apps/Content1";
import Content2 from "../../sections/apps/Content2";
import Testimonial from "../../sections/apps/Testimonial";
import CTA from "../../sections/apps/CTA";
import PageWrapper from "../../components/PageWrapper";

const APP_DATA = {
  name: "Microsurveys",
  introduction:
    "Microsurveys are powerful but short in-app product surveys to collect contextual feedback, such as user flows and features.",
  heroImage: "",
  // icon: https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=smile&m=free
  features: [
    {
      icon: "arrows-alt",
      text: "Position anywhere",
    },
    {
      icon: "question",
      text: "3+ question types",
    },
    {
      icon: "palette",
      text: "Configure appearance",
    },
    {
      icon: "code-branch",
      text: "Question logic",
    },
    {
      icon: "smile-beam",
      text: "CSAT, CES, NPS",
    },
  ],
  categories: ["surveys", "analytics"],
  testimonials: [
    {
      name: "",
      title: "",
      statement: "",
    },
  ],
  description: {
    title: "Microsurveys Rock",
    body: `
    Microsurveys are a great way to gather contextual user research data that can be used immediately to validate ideas. 
    With Samelogic, you can create beautiful,  microsurveys that are easy to deploy and collect responses from. 
    We're confident that you'll find our platform to be the perfect tool for collecting quick, easy feedback from your users.

    <br/> <br/>
    Our team is always happy to help you get the most out of your Samelogic account. So if you have any questions, 
    don't hesitate to reach out! We're here to help you succeed.
    `,
    image: "",
  },
  publisher: {
    name: "Samelogic Inc.",
    logo: "",
  },
};

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero {...APP_DATA} />
        {/* <Clients /> */}
        <Feature {...APP_DATA} />
        <Content1 {...APP_DATA} />
        {/* <Content2 />
        <Testimonial /> */}
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
