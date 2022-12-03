import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { rgba } from "polished";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgMobile from "../../assets/image/png/productroadmap.png";

const ImgStyled = styled.img`
  // transform: rotate(10deg);
  // box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 0px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: -100px;
  }
`;
const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section bg="#F7F7FB">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg="12" md="12">
            <div className="text-center">
              <Title>Why Should I Use Painted Door Testing?</Title>
              <Text mb={4}>
                Only 10% of Product Teams are using Painted Doors as they’re
                difficult to implement. But we make it easy!
              </Text>
              <Text mb={4}>
                The painted door test is arguably the fastest way to figure out
                what works for your users. This method of concept testing is a
                proven way to determine how useful a product or feature is prior
                to development. We exist to make this an order of magnitude
                easier for every Product Team who wants to use them. We allow
                users to enroll themselves into the experiment and inform them
                of a possible time the experiment will go live but won’t say
                exactly when.
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
