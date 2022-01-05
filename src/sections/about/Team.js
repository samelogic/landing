import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'

import imgU1 from '../../assets/image/svg/Dwayne.svg'
import imgU2 from '../../assets/image/svg/Shawn.svg'
import imgU3 from '../../assets/image/svg/Nic.svg'
import imgU4 from '../../assets/image/svg/Steven.svg'

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  border: 1px solid #eeeeee;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`

const TeamCard = ({ userImg, title, children, ...rest }) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...rest}
  >
    <CardImage>
      <img src={userImg} className="img-fluid" alt="" />
    </CardImage>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {title}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
)

const Team = () => (
  <>
    {/* <!-- Team section --> */}
    <Section className="position-relative pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center pb-3">
            <div className="">
              <Title>Meet the team</Title>
              <Text>
                We're passionate about solving this problem. Want to chat with
                any of us? Reach us at firstname@samelogic.com 😊{' '}
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU1} title="Dwayne Samuels">
              Co-founder and CEO
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU2} title="Shawn Mclean">
              Co-founder and CTO
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU3} title="Nicolas Brown">
              Founding Software Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={imgU4} title="Steven Samuels">
              Junior Marketing Manager
            </TeamCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Team
