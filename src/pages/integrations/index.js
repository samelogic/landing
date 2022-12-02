import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text } from "../../components/Core";

import CTA from "../../sections/case-study/CTA";

const CaseStudy = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">Integrations</Title>
                <Text>Page will update soon.</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CTA />
      </PageWrapper>
    </>
  );
};
export default CaseStudy;
