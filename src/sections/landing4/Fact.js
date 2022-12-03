import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)`
  background-color: #f7f7fb;
  border-bottom: 1px solid #ededf4;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`;

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="#f7f7fb" pt={5} pb={5}>
      <Container>
        <Row className="text-center">
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">2 mins</Title>
              <Text>Time it takes to implement and launch a Painted Door.</Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">20x</Title>
              <Text>
                Experimentation budget by using our tool. Test multiple ideas
                affordably and quickly.
              </Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">91%</Title>
              <Text>
                Users reported building vastly better products using Painted
                Door Tests.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
