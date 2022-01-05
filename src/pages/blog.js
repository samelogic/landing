import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PageWrapper from '../components/PageWrapper'
import { Section, Title, Text } from '../components/Core'

import BlogList from '../sections/blog/BlogList'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import Seo from '../components/SEO'
import SocialImage from '../assets/image/png/blog-social-share.png'

const BlogRegular = ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.blog.title')
  const posts = data.allContentfulPost.edges.map(({ node }) => node)
  return (
    <>
      <Seo
        title={siteTitle}
        description={
          'Tips and stories to help you on the path of becoming a better product leader.'
        }
        twitterCard="summary_large_image"
        meta={[
          {
            name: `twitter:image`,
            content: SocialImage,
          },
          {
            name: `og:image`,
            content: SocialImage,
          },
        ]}
      />
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title variant="hero">The Samelogic Blog</Title>
                <Text>
                  Tips and stories to help you on the path of becoming a better
                  product leader.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList posts={posts} />
      </PageWrapper>
    </>
  )
}
export default BlogRegular

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        blog {
          title
        }
      }
    }
    allContentfulPost(sort: { order: DESC, fields: [createdAt] }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
