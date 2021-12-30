import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const SectionStyled = styled(Section)`
  padding-top: 90px;
`;

const FaqCard = styled(Box)`
  padding-left: 55px;
  position: relative;
  &::before {
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }
`;

const FaqTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
`;

const LinkStyle = styled.a`
  color: white !important;
`;

const Faq = () => (
  <>
    {/* <!-- Faq section --> */}
    <SectionStyled bg="dark" pb="0 !important">
      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>What Are Painted Doors?</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Painted doors are non-functional but visual features that are
                  placed in products to measure interest such as conversion
                  rates and feedback. We provide the infrastructure to quickly
                  do this.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>Why Painted Doors?</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Only 10% of Product Teams are using Painted Doors as they’re
                  difficult to implement. We exist to make this an order of
                  magnitude easier for every Product Team who wants to use them.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>What can Painted Doors be used to Test?</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Painted Doors are perfect for testing almost any mockup idea
                  you have with your real users. Do you have a specific Use Case
                  that you’d need a template for?{" "}
                  <LinkStyle href="mailto:dwayne@samelogic.com?subject=I need a Painted Door Template">
                    <b>Let’s Chat</b>
                  </LinkStyle>
                  .
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>
                  How do We Remove User Frustration from this process?
                </FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  We allow users to enroll themselves into the experiment and
                  inform them of a possible time the experiment will go live but
                  won’t say exactly when.
                </Text>
              </div>
            </FaqCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Faq;
