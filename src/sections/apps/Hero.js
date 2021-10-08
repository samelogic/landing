import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Badge,
} from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import svgHeroShape from "../../assets/image/svg/hero-shape-svg.svg";
import imgL1HeroPhone from "../../assets/image/png/landing1-hero-phone.png";

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

const BadgeStyled = styled(Badge)`
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.15)};
  color: ${({ theme, bg }) => theme.colors[bg]};
  border: none;
  font-weight: 300;
  margin: 0 15px 10px 0;
`;

const Hero = ({ name, introduction, categories }) => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <div className="pt-5"></div>
        <ShapeTopLeft>
          <img src={svgHeroShape} alt="" className="img-fluid" />
        </ShapeTopLeft>
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
                  <ImgRight src={imgL1HeroPhone} alt="" />
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
                  {categories &&
                    categories.map((category, i) => (
                      <BadgeStyled key={i} bg="secondary">
                        {category}
                      </BadgeStyled>
                    ))}
                  <Title variant="hero">{name}</Title>
                  <Text mb={4}>{introduction}</Text>
                  <div className="d-flex flex-column align-items-start">
                    <Button mb={3}>Get Started</Button>
                    <a
                      href="https://app.samelogic.com"
                      className="text-decoration-none"
                      onClick={openVideoModal}
                    >
                      <Box color="secondary">
                        <i className="icon icon-triangle-right-17-2"></i> View
                        the documentation
                      </Box>
                    </a>
                  </div>
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
