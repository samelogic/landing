import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import CustomerCard from "../../components/CustomerCard";

import imgCase1 from "../../assets/image/jpeg/case-card-img.jpg";
import imgBrand1 from "../../assets/image/png/giftme-logo.png";

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4" className="mb-5 mb-lg-0">
            <CustomerCard
              img={imgBrand1}
              title="Giftme"
              readMore={true}
              href="/customers/giftme"
            >
              A digital gift card company uses Samelogic to test and prioritize
              revenue generating features.
            </CustomerCard>
          </Col>
          {/* <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase2}
              imgBrand={imgBrand2}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase3}
              imgBrand={imgBrand3}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </PostCard>
          </Col> */}
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
