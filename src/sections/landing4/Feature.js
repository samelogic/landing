import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'

import iconLayout from '../../assets/image/svg/attach-explainer.svg'
import iconLayers from '../../assets/image/svg/feedback-explainer.svg'
import iconResponsive from '../../assets/image/svg/roadmap-explainer.svg'

const SectionStyled = styled(Section)`
  padding-top: 47px;
  padding-bottom: 23px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  @media ${device.md} {
    padding-top: 87px;
    padding-bottom: 63px;
  }
`

const FeatureCard = ({ iconImage, title, children, ...rest }) => (
  <Box {...rest}>
    <Box mb={[3, 3, 3, 4]} pb={2}>
      <img src={iconImage} alt="" />
    </Box>
    <Box>
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
)

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <SectionStyled>
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Attach Survey to UI" iconImage={iconLayout}>
              When Microsurveys are attached to UI elements it elicts contextual
              feedback based on related task.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Detailed Feedback" iconImage={iconLayers}>
              As feedback is based on the exact task at hand, it is given in
              extreme detail, which enables you and your team to be agile.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Optimize Roadmap" iconImage={iconResponsive}>
              With contextual, detailed feedback, optimizing your product
              roadmap because an easy and fun activity, as it should be!
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Feature
