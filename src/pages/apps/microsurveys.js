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
  // icon: react-icons name. See https://react-icons.github.io/react-icons
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
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
