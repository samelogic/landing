import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../../components/Core";

import imgC2 from "../../../assets/image/jpeg/l7-content2-image-2.jpg";
import imgC1 from "../../../assets/image/jpeg/l7-content2-image-1.jpg";
import imgC3 from "../../../assets/image/jpeg/l7-content2-image-3.jpg";
import imgC4 from "../../../assets/image/jpeg/l7-content2-image-4.jpg";

const SectionStyled = styled(Section)``;

const SingleImage = styled(Box)`
  display: flex;
  flex-direction: column;
  img {
    padding-bottom: 15px;
    padding-right: 15px;
    border-radius: 8px;
  }
`;

const Content2 = () => {
  return (
    <>
      {/* <!-- Content2 section --> */}
      <SectionStyled pt="0!important">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <Box className="d-flex">
                <SingleImage>
                  <img
                    src={imgC1}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-once="true"
                  />
                  <img
                    src={imgC2}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-delay="500"
                    data-aos-once="true"
                  />
                </SingleImage>
                <SingleImage>
                  <img
                    src={imgC3}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-delay="1000"
                    data-aos-once="true"
                  />
                  <img
                    src={imgC4}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-delay="1500"
                    data-aos-once="true"
                  />
                </SingleImage>
              </Box>
            </Col>
            <Col lg="6" md={9}>
              <div>
                <Title>Measure the real impact of your idea</Title>
                <Text>
                  Since the experiment is done in the same environment as your
                  users, the evidence will be of the highest unbiased quality
                  when combined with real world events.
                </Text>

                <Box mt={4}>
                  <a href="https://app.samelogic.com" className="cta-btn">
                    <Button mb={2}>Try for Free &nbsp;</Button>
                  </a>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content2;
