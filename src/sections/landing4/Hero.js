import React from "react";
import styled from "styled-components";
import { saturate, lighten } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgHeroTab from "../../assets/image/png/l5-hero-image.png";
import Animated from "../../assets/image/svg/Animated.svg";

const SectionStyled = styled(Section)`
  background-image: ${({ theme }) => `radial-gradient(
    circle 961px at 49.94% 0%,
    ${lighten(0.114, saturate(0.0911, theme.colors.ash))} 0%,
    ${theme.colors.ash} 100%
  );`};
`;

const ImgRight = styled(Box)`
  position: relative;
  left: -100px;
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
              <img src={Animated}
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
                    Build exactly what <br className="d-none d-sm-block" />
                    your users need.
                  </Title>
                  <Text mb={4} color="light" opacity={0.7}>
                  Attach timed micro-surveys to elements within your website to understand exactly what your users need.
                  </Text>
                  <div className="d-flex flex-column align-items-start pt-3">
                    <Button mb={2}>Try It!</Button>
                    <Text
                      variant="small"
                      fontSize={"14px"}
                      color="light"
                      opacity={0.7}
                    >
                      Join our exclusive product community 
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
