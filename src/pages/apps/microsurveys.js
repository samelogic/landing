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
  features: [""],
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
        <Feature />
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
