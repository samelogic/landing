import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Container, Row, Col, FormControl } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Badge,
} from "../../../components/Core";
import GlobalContext from "../../../context/GlobalContext";

import imgHero from "../../../assets/image/png/landing4-hero-img.png";

const ImgRight = styled(Box)``;

const BoxPrice = styled(Box)`
  border-radius: 10px;
  background-color: #6565e9;
  padding-left: 25px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 10px;
  max-width: 322px;
  min-width: 322px;
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="secondary" className="position-relative">
        <div className="pt-5"></div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col
              lg="5"
              className="position-static"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <ImgRight>
                <img src={imgHero} alt="" className="img-fluid" />
              </ImgRight>
            </Col>
            <Col lg="7">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box pt={[4, null, null, 0]}>
                  <Title color="light">
                    Enjoy every single
                    <br className="d-none d-sm-block" />
                    beat on headphone!
                  </Title>
                  <Text color="lightShade">
                    For iPhone, iPad, and Android users, be sure your product’s
                    firmware is up to date through the Bose connect app.
                  </Text>

                  <Box my={4}>
                    <iframe
                      style={{ borderRadius: 12 }}
                      src="https://open.spotify.com/embed/episode/7zpJnMFaBNzWZsNHXKYCJ7?utm_source=generator&theme=0"
                      width="100%"
                      height={152}
                      frameBorder={0}
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </Box>
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
