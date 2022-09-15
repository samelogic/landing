import React from "react";
import styled from "styled-components";
import { saturate, lighten } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgHeroTab from "../../assets/image/png/l5-hero-image.png";
import HeroImage from "../../assets/image/svg/Hero.svg";

import EmailForm from "../../components/EmailForm";
import CTAButton from "../../components/CTAButton";

const SectionStyled = styled(Section)`
  background-image: ${({ theme }) => `radial-gradient(
    circle 961px at 49.94% 0%,
    ${lighten(0.114, saturate(0.0911, theme.colors.ash))} 0%,
    ${theme.colors.ash} 100%
  );`};
`;

const ImgRight = styled(Box)`
  position: relative;
  @media ${device.md} {
    position: absolute;
    top: 0;
    max-width: 65%;
    min-width: 65%;
    right: 0;
    left: auto;
    transform: translateX(25%);
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled className="position-relative">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center align-items-center position-relative">
            <Col md="5" className="order-md-2 position-static">
              <ImgRight>
                <img
                  src={HeroImage}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-delay="1000"
                  data-aos-once="true"
                />
              </ImgRight>
            </Col>
            <Col md="7" className="order-md-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero" color="light">
                    Fast Product Critique, with Real Users
                  </Title>
                  <Text mb={4} color="light" opacity={0.7}>
                     Get the evidence you need to know which direction to take
                    your product.
                  </Text>
                  {/* <div className="d-flex flex-column pt-3">
                    <EmailForm />
                  </div>
                  <Text
                    variant="small"
                    fontSize={"14px"}
                    color="light"
                    opacity={0.7}
                  >
                    Request an Early Access Invite
                  </Text> */}
                  <div className="d-flex flex-column align-items-start pt-3">
                    <CTAButton mb={2} />
                    <Text
                      variant="small"
                      fontSize={"14px"}
                      color="light"
                      opacity={0.7}
                    >
                      Join our Early Access program
                    </Text>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
