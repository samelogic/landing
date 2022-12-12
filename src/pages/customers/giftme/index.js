import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../../components/Core";

import CaseList from "../../../sections/case-study/CaseList1";
import CaseDetails from "../../../sections/case-study/CaseDetails";
import CTA from "../../../sections/landing4/CTA";
import imgBrand from "../../../assets/image/png/giftme-logo.png";
import Seo from "../../../components/SEO";
import SocialImage from "../../../assets/image/png/blog-social-share.png";

const CaseStudyDetails = () => {
  return (
    <>
      {" "}
      <Seo
        title="Giftme uses Samelogic for evidence-based feature prioritization"
        description={
          "Learn how we are helping user-centric product teams to validate and prioritize features based on the Fake Door Concept Testing method."
        }
        twitterCard="summary_large_image"
        meta={[
          {
            name: `twitter:image`,
            content: SocialImage,
          },
          {
            property: "og:image",
            content: SocialImage,
          },
        ]}
      />
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Box className="text-center" mb={4}>
                  <img src={imgBrand} alt="" className="img-fluid" />
                </Box>
                <Title variant="hero">
                  How Giftme uses Samelogic to test and prioritize revenue
                  generating features.
                </Title>
                <Text>
                  How Giftme's product team validated and gathered user feedback
                  on a new feature idea within two days, using no engineering
                  effort.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseDetails />
        {/* <CaseList /> */}
        <CTA />
      </PageWrapper>
    </>
  );
};
export default CaseStudyDetails;
