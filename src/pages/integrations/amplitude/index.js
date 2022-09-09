import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../../components/PageWrapper";
import { Section, Title, Text, Box, Button } from "../../../components/Core";
import Seo from "../../../components/SEO";

import Video from "../components/Video";
import CTA from "../../../sections/landing4/CTA";
import imgBrand from "./logo.png";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Content3 from "../components/Content3";

import AmplitudeImg1 from "./Amplitude-1.png";
import AmplitudeImg2 from "./Amplitude-2.png";

const CaseStudyDetails = () => {
  return (
    <>
      {" "}
      <Seo title="Amplitude and Samelogic Integration" />
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box className="text-center" mb={4}>
                  <img src={imgBrand} alt="" className="img-fluid" />
                </Box>
                <Title variant="hero">
                  Send contextual user events to Amplitude
                </Title>
              </Col>
            </Row>

            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Box className="text-center">
                  <Text>
                    Send your quantitative and qualitative user research events
                    to Amplitude. Dig deeper into the how and why are users
                    interacting with your concept-test.
                  </Text>
                </Box>
                <Box className="text-center" mt={4}>
                  <a href="https://app.samelogic.com" className="cta-btn">
                    <Button mb={2}>Try for Free &nbsp;</Button>
                  </a>
                </Box>
              </Col>
            </Row>
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <Box mt={6}>
                  <Title>
                    Ensure you have all the evidence before building that
                    feature!
                  </Title>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section className="pb-6" borderBottom="1px solid #eae9f2;">
          <Video videoUrl="https://www.youtube.com/watch?v=n_qeKiMd-Fs" />
        </Section>
        <Content1
          img={AmplitudeImg1}
          title="Deeply understand your user behavior"
          body="Combine Samelogic's research data with Amplitude's
          quantitative data for a full user journey of what they are doing before
          and after participating in the experiment."
        />
        <Content2
          img={AmplitudeImg2}
          title="Measure the real impact of your idea"
          body="Dig into which category of users are gravitating towards your idea. 
          Use this to help prioritize and feature price."
        />
        <Content3 />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default CaseStudyDetails;
