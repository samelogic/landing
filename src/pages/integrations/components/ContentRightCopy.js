import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../../components/Core";
import CTAButton from "../../../components/CTAButton";

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

const ContentRightCopy = ({ img, title, body }) => {
  return (
    <>
      {/* <!-- Content2 section --> */}
      <SectionStyled pt="0!important">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <div
                data-aos="fade-left"
                data-aos-duration="450"
                data-aos-delay="150"
                data-aos-once="true"
              >
                <img src={img} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9}>
              <div>
                <Title>{title}</Title>
                <Text>{body}</Text>

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

export default ContentRightCopy;
