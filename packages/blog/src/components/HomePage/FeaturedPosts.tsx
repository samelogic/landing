import React from "react"

import { useStaticQuery, Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const FeaturedPosts = () => {
  const data = useStaticQuery(graphql`
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
            description {
              description
            }
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
  `)
  return (
    <Grid container spacing={4}>
      {data.featuredPosts.edges.map(({ node }) => {
        return (
          <Grid item key={node.slug} xs={12} md={6}>
            <Link to={node.slug} style={{ textDecoration: "none" }}>
              <Card key={node.slug}>
                <CardActionArea>
                  {node.heroImage && <Img sizes={node.heroImage.sizes} />}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {node.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {node.description.description}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {node.createdAt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedPosts
