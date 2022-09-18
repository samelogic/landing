import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../../components/Core";
import CTAButton from "../../../components/CTAButton";

import { device } from "../../../utils";

const ShapeTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const TopCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  top: 14%;
  left: 0;
  @media ${device.md} {
    left: -13%;
  }
  @media ${device.lg} {
    left: 2%;
  }
`;

const BottomCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  bottom: 12%;
  right: 0;
  @media ${device.md} {
    right: -13%;
  }
  @media ${device.lg} {
    right: -5%;
  }
  @media ${device.xl} {
    right: -33%;
  }
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = ({ img, title, body }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section>
        <div className="pt-5"></div>

        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="5" md="8" sm="9" className="order-lg-2">
              <div className="text-center text-lg-right position-relative">
                <div
                  className="img-main"
                  data-aos="fade-down"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <ImgRight src={img} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="7" className="order-lg-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero">{title}</Title>
                  <Text mb={4}>{body}</Text>

                  <CTAButton mb={2} />
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
