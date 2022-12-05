import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContent from "../../assets/image/png/feedback.png";
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
const ULStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 15px;
  padding-left: 0;

  @media ${device.sm} {
    padding-top: 35px;
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.lg} {
    justify-content: space-between;
  }

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
    display: flex;
    margin-bottom: 5px;

    &:before {
      content: "\f00c";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      display: inline-block;
      font-size: 13px;
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 500px;
      color: ${({ theme }) => theme.colors.secondary};
      position: relative;
      top: 9px;
      margin-right: 13px;
    }
  }
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section
      className="position-relative"
      py={["50px", null, "130px", null, "230px"]}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <div
              className="pl-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <ImgStyled src={imgContent} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9">
            <Box className="pt-5 pt-lg-0">
              <Title>
                The #1 Way to Validate Your Idea Without Building Anything
              </Title>
              <Text>
                Pairing up an Experiment with Contextual Qualitative Feedback
                helps get you the insights you need to get valuable feedback
                about your feature long before it even exists.
              </Text>

              <ULStyled>
                <li>Collect feedback without users leaving your website.</li>
                <li>Choose from a wide range of question types.</li>
                <li>
                  Pipe feedback to any platform you use via multiple
                  integrations.
                </li>
              </ULStyled>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
