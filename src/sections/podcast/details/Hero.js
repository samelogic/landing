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

const ImgRight = styled(Box)``;

const Hero = ({ date, title, subtitle, spotifyId, heroImage }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="#2DA8F2" className="position-relative">
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
                <img src={heroImage} alt="" className="img-fluid" />
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
                  <Text color="lightShade" variant="small" mt={2}>
                    {date}
                  </Text>
                  <Title color="light">{title}</Title>
                  <Text color="lightShade">{subtitle}</Text>

                  <Box my={4}>
                    <iframe
                      style={{ borderRadius: 12 }}
                      src={`https://open.spotify.com/embed/episode/${spotifyId}?utm_source=generator&theme=0`}
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
