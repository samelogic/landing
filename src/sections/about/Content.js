import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              Less time guessing, more time building.
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
              Product discovery is hard. There are so many steps involved to validate if a simple idea just works. 
              With our microsurveys, you can quickly gather the insights needed to build exactly what your users need. 
              Spend less time guessing and invest time in building the right product by contextually understanding users' needs.

            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
