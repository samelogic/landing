import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text } from "../../components/Core";
import EmailForm from "../../components/EmailForm";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7">
            <Box className="text-center">
              <Title color="light">Get Evidence, Build Confidently</Title>
              <Text mb={4} color="light" opacity={0.7}>
                The better way to figure out what works for your users.
              </Text>
              {/* <div className="d-flex flex-column align-items-center pt-3">
                <EmailForm />
                <Text
                  variant="small"
                  fontSize={"14px"}
                  color="light"
                  opacity={0.7}
                >
                  Request an Early Access Invite
                </Text>
              </div> */}{" "}
              <div className="d-flex flex-column align-items-center pt-3">
                <Button mb={2}>
                  <a
                    className="cta-btn"
                    style={{ color: "white !important" }}
                    href="https://app.samelogic.com"
                  >
                    Get Started
                  </a>
                </Button>
                <Text
                  variant="small"
                  fontSize={"14px"}
                  color="light"
                  opacity={0.7}
                >
                  Join our Early Access program
                </Text>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
