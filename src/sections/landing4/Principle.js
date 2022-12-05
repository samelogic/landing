import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";
import imgContent from "../../assets/image/png/drag-drop.png";

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section
      bg="#F7F7FB"
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
              <img src={imgContent} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9" className="order-lg-1">
            <div>
              <Title>Fake Doors, Real Data</Title>
              <Text mb={4}>The painted door testing principle</Text>

              <Text>
                There is nothing worse than building a product that your users
                don’t want. That’s where Samelogic comes in. <br /> <br />
                The painted door test is a proven method of concept testing
                based on the idea of theoretically painting a fake door to gauge
                user interest instead of building one. Why spend time and money
                on materials to build a door with no guarantee that anyone will
                open it, when you can paint a fake door and see how many people
                attempt to open it?{" "}
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
