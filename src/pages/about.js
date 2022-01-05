import React from 'react'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/common/Hero'
import Content from '../sections/about/Content'
import Team from '../sections/about/Team'
import CTA from '../sections/about/CTA'

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="Our Mission">
          We're building tools that anyone can run product feedback experiments
          to make the discovery and creation process fun, emotional and
          insightful.
        </Hero>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default About
