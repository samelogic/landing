import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device } from "../utils";

const FormStyled = styled.form``;

const WidgetWrapper = styled(Box)`
  border-radius: 10px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  @media ${device.lg} {
    padding-left: 140px;
    padding-right: 150px;
  }
  @media ${device.xl} {
    padding-left: 150px;
    padding-right: 150px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

const Support = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <div className="banner-content">
                  <Title variant="hero">Support</Title>
                  <Text>
                    At Samelogic, we're product people helping{" "}
                    <br className="d-none d-md-block" /> other product folks
                    build right things their users will love.
                  </Text>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 pt-lg-5">
              <Col xl="12">
                <WidgetWrapper>
                  <Row>
                    <Box className="mb-5">
                      <Title variant="card" fontSize="24px">
                        Talk to Us Live!
                      </Title>
                      <Text>
                        Use the drift icon at the bottom right of this page.
                      </Text>
                    </Box>
                  </Row>

                  <Row>
                    <Box className="mb-5">
                      <Title variant="card" fontSize="24px">
                        Slack Community
                      </Title>
                      <Text>
                        Join the Samelogic Logicians Slack community to chat
                        with other members. Use{" "}
                        <a href="https://join.slack.com/t/samelogiclogicians/shared_invite/zt-1c3l4baph-ThoXlLduYq1e722EjrUxcg">
                          this link
                        </a>{" "}
                        to get an invite.
                      </Text>
                    </Box>
                  </Row>

                  <Row>
                    <Box className="mb-5">
                      <Title variant="card" fontSize="24px">
                        Email Us
                      </Title>
                      <Text>
                        The founders can be directly reached at the following
                        emails:
                      </Text>
                      <Text>
                        <a href="mailto:dwayne@samelogic.com">
                          dwayne@samelogic.com
                        </a>
                      </Text>
                      <Text>
                        <a href="mailto:shawn@samelogic.com">
                          shawn@samelogic.com
                        </a>
                      </Text>
                    </Box>
                  </Row>

                  <Row>
                    <Box className="mb-5">
                      <Title variant="card" fontSize="24px">
                        Call Us
                      </Title>
                      <Text>
                        The founders can be directly reached at the following
                        numbers:
                      </Text>
                      <Text>Dwayne: +1-876-435-4470</Text>
                      <Text>Shawn: +1-650-235-6537</Text>
                    </Box>
                  </Row>
                </WidgetWrapper>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Support;
