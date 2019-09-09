import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPosts from "../components/HomePage/FeaturedPosts"

const IndexPage = ({ data: { featuredPosts } }) => (
  <Layout>
    <SEO title="Home" />
    <FeaturedPosts />
    <Link to="/posts/">Blogs</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    featuredPosts: allContentfulPost(
      filter: { featured: { eq: true } }
      limit: 2
    ) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          content {
            childMarkdownRemark {
              html
            }
          }
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
