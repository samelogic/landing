import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContent from "../../assets/image/png/segmentation.png";

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

const Segmentation = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section
      className="position-relative"
      py={["50px", null, "130px", null, "230px"]}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className=" mb-4 mb-lg-0 pl-lg-5 order-lg-2">
            <div
              data-aos="fade-left"
              data-aos-duration="450"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <img src={imgContent} alt="Audience" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9" className="order-lg-1">
            <div>
              <Title>Fake Doors, Real Users</Title>
              <Text mb={4}></Text>

              <ULStyled>
                <li>
                  Users can elect to participate in your experiment - either
                  way, you get results.
                </li>
                <li>
                  Segment users and display your painted door to a sample
                  population.
                </li>
                <li>Get real-time analytics from your painted door test.</li>
              </ULStyled>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Segmentation;
