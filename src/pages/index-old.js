import React from 'react'
import Hero from '../sections/apps/Hero'
import Clients from '../sections/apps/Clients'
import Feature from '../sections/apps/Feature'
import Content1 from '../sections/apps/Content1'
import Content2 from '../sections/apps/Content2'
import Testimonial from '../sections/apps/Testimonial'
import CTA from '../sections/apps/CTA'
import PageWrapper from '../components/PageWrapper'

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Clients />
        <Feature />
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage
