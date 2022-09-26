import React, { useContext } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Span,
} from "../../../components/Core";
import CTAButton from "../../../components/CTAButton";

import { device } from "../../../utils";

const ULStyled = styled.ol`
  margin: 0;
  padding-top: 0;
  padding-left: 0;
  list-style: inside decimal;

  li {
    &:nth-child(odd) {
      @media ${device.sm} {
        margin-right: 40px;
      }
    }
    color: #19191b;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
    line-height: 50px;
    margin-bottom: 5px;
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

const Body = ({ body, bodyList }) => {
  if (bodyList) {
    return (
      <ULStyled>
        {bodyList.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ULStyled>
    );
  }
  if (body) {
    return <Text>{body}</Text>;
  }
};

const Hero = ({ img, title, subTitle, body, slogan, bodyList }) => {
  return (
    <>
      <Section>
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
                  <Box mb={4}>
                    <h2>{slogan}</h2>
                  </Box>
                  <Title variant="hero">{title}</Title>
                  <h3>{subTitle}</h3>
                  <Box mb={4} mt={4}>
                    <Body body={body} bodyList={bodyList} />
                  </Box>
                  <CTAButton mb={2} />

                  <Text fontSize={"18px"} color="ash" fontWeight={500}>
                    Learn more about{" "}
                    <a
                      href="https://samelogic.com/blog/10-advantages-of-using-painted-door-tests"
                      target="blank"
                    >
                      <Span color="secondary">Fake Door Testing</Span>
                    </a>
                  </Text>
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
