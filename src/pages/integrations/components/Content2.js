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

const Content2 = ({ img, title, body }) => {
  return (
    <>
      {/* <!-- Content2 section --> */}
      <SectionStyled pt="0!important">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
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
