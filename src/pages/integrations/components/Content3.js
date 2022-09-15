import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../../components/Core";
import CTAButton from "../../../components/CTAButton";

import imgPhone from "../../../assets/image/png/l7-mobile-2.png";

const SectionStyled = styled(Section)``;

const Content3 = () => {
  return (
    <>
      {/* <!-- Content3 section --> */}
      <SectionStyled>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <img src={imgPhone} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <Title>Deeply understand your participants</Title>
                <Text>
                  Enrich your evidence with additonal customer data to help you
                  know if you should really build that idea and how to
                  prioritize or even price it.
                </Text>

                <Box mt={4}>
                  <CTAButton mb={2} />
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content3;
