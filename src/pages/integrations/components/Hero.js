import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../../components/Core";
import CTAButton from "../../../components/CTAButton/CTAButton";

const SectionStyled = styled(Section)``;

const Hero = ({ img, title, body }) => {
  return (
    <SectionStyled className="pb-0">
      <div className="pt-5"></div>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <Box className="text-center" mb={4}>
              <img src={img} alt="" className="img-fluid" />
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
                Send your quantitative and qualitative user research events to
                Amplitude. Dig deeper into the how and why are users interacting
                with your feature test.
              </Text>
            </Box>
            <Box className="text-center" mt={4}>
              <CTAButton />
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg="10">
            <Box mt={6}>
              <Title>
                Ensure you have all the evidence before building that feature!
              </Title>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
};

export default Hero;
