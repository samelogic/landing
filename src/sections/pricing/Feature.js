import React from 'react'
import { rgba } from 'polished'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'

const FeatureCard = ({
  color = 'primary',
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box pt="15px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center mx-auto"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div className="text-center">
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
)

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="mb-3 text-center">
          <Col lg="12">
            <Title>Confidently know what next to build.</Title>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">

        <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="icon-energy-2"
              title="Fast Validation"
            >
              Say bye-bye to the Build Trap. Know exactly what your users need before writing a single line of code.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="secondary"
              iconName="icon-laptop-71"
              title="Data Driven"
            >
              Get the evidence you need by easily testing what resonates best with your users.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="icon-puzzle-10-2"
              title="Integrated"
            >
              Our integrations with our partners ensure quick validation of your ideas.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="warning"
              iconName="icon-roadmap"
              title="Contextual"
            >
              Know what direction to go by deeply understanding what moves your users.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="icon-voice-recognition-2"
              title="Support"
            >
              We love candid conversations. Whatever the question may be, will give you the best possible answer.
            </FeatureCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="warning"
              iconName="icon-bookmark-2-2"
              title="Rich Documentation"
            >
              If you'd love to understand how the Samelogic API and SDK works to become a Power User, you can.
            </FeatureCard>
          </Col>

         
        </Row>
      </Container>
    </Section>
  </>
)

export default Feature
