import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../../components/Core";
import CTAButton from "../../../components/CTAButton/CTAButton";

const SectionStyled = styled(Section)``;

const ContentLeftCopy = ({ img, title, body }) => {
  return (
    <>
      {/* <!-- Content1 section --> */}
      <SectionStyled>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
              <div
                data-aos="fade-right"
                data-aos-duration="450"
                data-aos-delay="150"
                data-aos-once="true"
              >
                <img src={img} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <Title>{title}</Title>
                <Text>{body}</Text>

                <Box mt={4}>
                  <CTAButton />
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default ContentLeftCopy;
