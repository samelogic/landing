import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Button } from "../../components/Core";

const PricingCard = styled.div`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #fff;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  padding-top: 32px;
  .small-title {
    color: #696871;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 28px;
    margin-bottom: 22px;
  }
  .title {
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -1.03px;
    line-height: 56px;
    color: #1d293f;
    margin-bottom: 30px;
  }
  .time {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -1.03px;
    line-height: 1;
  }
`;

const ULStyled = styled.ul`
  color: #696871;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 1.6;
  list-style: none;
  padding: 0;
  padding-top: 10px;

  li {
    margin-bottom: 14px;
  }
`;

const ButtonGroup = styled.div`
  border-radius: 10px;
  padding: 5px;
  background-color: #f7f7fb;
  display: inline-flex;
  max-height: 65px;
  .btn {
    border-radius: 10px 0 0 10px;
    width: 160px;
    height: 55px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #19191b;
    &.active {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    }
    & + .btn {
      border-radius: 0 10px 10px 0;
    }
  }
`;

const ButtonStyled = styled(Button)`
  width: 100%;
  max-width: 305px;
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Pricing = () => {
  const [timeMonthly, setTimeMonthly] = useState(false);

  return (
    <>
      <Section className="pb-0">
        <Container>
          <Row className="text-md-center text-lg-left mb-5">
            <Col lg="7" xl="6">
              <div className="">
                <Title>Get the right plan for you and your team.</Title>
              </div>
            </Col>
            <Col
              lg="5"
              xl="6"
              className="d-flex justify-content-center justify-content-lg-end align-items-end"
            >
              We don't win if you don't win! If your tests fails, we don't
              charge.
            </Col>
          </Row>
          <Row className="justify-content-center mb-4 pricing-row">
            <Col lg="4" md="6" sm="8" className="mt-4">
              <PricingCard>
                <span className="small-title">Starter</span>
                <h2 className="title mt-3 mb-4">Free</h2>
                <ULStyled>
                  <li>Up to 10 tests</li>
                  <li>Up to 5 survey responses per test</li>
                  <li>Basic Support</li>
                </ULStyled>
                <Box className="mt-5">
                  <ButtonStyled href="https://buy.stripe.com/3cs6qMfcPb0wd4A28b">
                    Buy Now
                  </ButtonStyled>
                </Box>
              </PricingCard>
            </Col>

            <Col lg="4" md="6" sm="8" className="mt-4">
              <PricingCard>
                <span className="small-title">Pro</span>
                <h2 className="title mt-3 mb-4">
                  <span className="time"></span> $49
                  <span className="time">/month</span>
                </h2>
                <ULStyled>
                  <li>Up to 20 tests</li>
                  <li>Up to 25 survey responses</li>
                  <li>Audience/Segmentation</li>
                  <li>Basic Support</li>
                </ULStyled>
                <Box className="mt-5">
                  <ButtonStyled href="https://buy.stripe.com/fZeaH21lZc4A3u0001">
                    Buy Now
                  </ButtonStyled>
                </Box>
              </PricingCard>
            </Col>

            <Col lg="4" md="6" sm="8" className="mt-4">
              <PricingCard>
                <span className="small-title">Ultra</span>
                <h2 className="title mt-3 mb-4">
                  $2,999
                  <span className="time">/month</span>
                </h2>
                <ULStyled>
                  <li>Unlimited tests</li>
                  <li>Unlimited survey responses</li>
                  <li>Custom Integrations</li>
                  <li>Dedicated Support</li>
                </ULStyled>
                <Box className="mt-5">
                  <ButtonStyled href="https://buy.stripe.com/cN2cPac0Dd8E7KgeUW">
                    Buy Now
                  </ButtonStyled>
                </Box>
              </PricingCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Pricing;
