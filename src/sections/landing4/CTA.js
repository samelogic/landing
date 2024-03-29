import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text } from "../../components/Core";
import CTAButton from "../../components/CTAButton";
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
                The better way to figure out what works for your users. Set up
                your first painted door test today.
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
                <CTAButton mb={2} style={{ color: "white !important" }} />
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
