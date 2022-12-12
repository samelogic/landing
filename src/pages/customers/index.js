import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { get } from "lodash";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text } from "../../components/Core";

import CaseList from "../../sections/case-study/CaseList1";
import CaseList2 from "../../sections/case-study/CaseList2";
import CTA from "../../sections/landing4/CTA";
import Seo from "../../components/SEO";

import SocialImage from "../../assets/image/png/blog-social-share.png";

const CaseStudy = ({ data }) => {
  return (
    <>
      {" "}
      <Seo
        title="Customer Stories"
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
              <Col lg="6">
                <Title variant="hero">Customer Stories</Title>
                <Text>
                  Learn how some of the best product teams use Samelogic's Fake
                  Door Testing Platform to reduce their product discovery and
                  research costs.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseList />
        {/* <CaseList2 />
        <CaseList /> */}
        <CTA />
      </PageWrapper>
    </>
  );
};
export default CaseStudy;
