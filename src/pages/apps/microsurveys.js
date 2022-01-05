import React from 'react'
import Hero from '../../sections/apps/Hero'
import Clients from '../../sections/apps/Clients'
import Feature from '../../sections/apps/Feature'
import Content1 from '../../sections/apps/Content1'
import Content2 from '../../sections/apps/Content2'
import Testimonial from '../../sections/apps/Testimonial'
import CTA from '../../sections/apps/CTA'
import PageWrapper from '../../components/PageWrapper'

const APP_DATA = {
  name: 'Microsurveys',
  introduction:
    'Microsurveys are powerful but short in-app product surveys to collect contextual feedback, such as user flows and features.',
  heroImage: '',
  // icon: https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=smile&m=free
  features: [
    {
      icon: 'arrows-alt',
      text: 'Position anywhere',
    },
    {
      icon: 'question',
      text: '3+ question types',
    },
    {
      icon: 'palette',
      text: 'Configure appearance',
    },
    {
      icon: 'code-branch',
      text: 'Question logic',
    },
    {
      icon: 'smile-beam',
      text: 'CSAT, CES, NPS',
    },
  ],
  categories: ['surveys', 'analytics'],
  testimonials: [
    {
      name: '',
      title: '',
      statement: '',
    },
  ],
  description: {
    title: 'Addtional Description',
    body: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Quis imperdiet massa tincidunt nunc. Dolor morbi non arcu risus quis varius quam. Eu volutpat odio facilisis mauris sit.
    <br/> <br/>
    Ultrices gravida dictum fusce ut placerat. Auctor elit sed vulputate mi sit amet. Eget est lorem ipsum dolor sit amet. Eget dolor morbi non arcu risus. Senectus et netus et malesuada. Morbi leo urna molestie at elementum eu facilisis sed. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Quisque id diam vel quam elementum pulvinar etiam. Mattis rhoncus urna neque viverra justo. Amet dictum sit amet justo donec enim diam. Bibendum neque egestas congue quisque. Nec feugiat nisl pretium fusce id.
    `,
    image: '',
  },
  publisher: {
    name: 'Samelogic Inc.',
    logo: '',
  },
}

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero {...APP_DATA} />
        {/* <Clients /> */}
        <Feature {...APP_DATA} />
        <Content1 {...APP_DATA} />
        {/* <Content2 />
        <Testimonial /> */}
        <CTA />
      </PageWrapper>
    </>
  )
}
export default IndexPage
