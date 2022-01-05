import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'

const SectionStyled = styled(Section)`
  background-color: #f7f7fb;
  border-bottom: 1px solid #ededf4;
  padding-bottom: 30px;
  padding-top: 0;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="#f7f7fb" pt={0}>
      <Container>
        <Row className="text-center">
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">10 mins</Title>
              <Text>Time it takes to implement and launch a Painted Door.</Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">91%</Title>
              <Text>
                Product People said they built the right things when using
                Painted Doors.
              </Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">$</Title>
              <Text>
                Know what to build, quickly. Save a ton for your budget.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Fact
