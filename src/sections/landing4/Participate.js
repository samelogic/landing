import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { rgba } from "polished";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import image from "../../assets/image/png/report.png";

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

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section>
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
              <ImgStyled src={image} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9">
            <Box className="pt-5 pt-lg-0">
              <Title>Fake Doors, Real Analytics</Title>
              <Text mb={4}>
                Painted doors are non-functional but visual features that are
                placed in products to measure user interest, such as conversion
                rates and other forms of feedback. Samelogic offers painted
                doors that you can create and implement on your website in
                minutes.{" "}
              </Text>

              <Box mt={4} pt={3}>
                <ULStyled>
                  <li>
                    Generate or upload your mockups and place them on your
                    website with our easy drag-and-drop interface
                  </li>
                  <li>Customize your in-app survey questions and design.</li>
                  <li>
                    Confidently display your Painted Door to the correct sample
                    population.
                  </li>
                </ULStyled>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
