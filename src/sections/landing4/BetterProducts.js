import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box, Text } from "../../components/Core";

import imgMobile from "../../assets/image/png/better-products.png";

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section bg="#F7F7FB">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className=" mb-4 mb-lg-0 pl-lg-5 order-lg-2">
            <div
              data-aos="fade-left"
              data-aos-duration="450"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <img src={imgMobile} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9" className="order-lg-1">
            <div>
              <Title>Get Better Data. Build Better Products.</Title>
              <Text mb={4}>
                Product managers, engineers and all involved in product-creation
                can use the Samelogic tool to gather imperative data about a
                feature before the feature is built. Qualitative Research
                Methods tell us why with low certainty while experimental
                methods tell us if we should, with high certainty. We combine
                them both.
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
