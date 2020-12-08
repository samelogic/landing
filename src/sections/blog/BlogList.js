import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { Section, Box } from "../../components/Core";
import PostCard from "../../components/PostCard";
import Pagination, { PageItem } from "../../components/Pagination";

const BlogList = ({posts}) => (
  <>
    {/* <!-- Blog section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
            {posts.map((post) => {
              return ( 
            <Col lg="4" key={post.slug} className="mb-5">
              <PostCard
              img={post.heroImage.fluid.src}
              preTitle={post.createdAt}
              title={post.title}
              href={"/blog/"+post.slug}
              readMore
            >
              <span
              dangerouslySetInnerHTML={{
                __html:post.description.childMarkdownRemark.html
              }}
              />
            </PostCard>
          </Col>
              )
            })}
        </Row>
        {/* <Box className="d-flex justify-content-center" mt={4}>
          <Pagination>
            <PageItem>
              <FaAngleLeft />
            </PageItem>
            <PageItem>1</PageItem>
            <PageItem>2</PageItem>
            <PageItem>3</PageItem>
            <PageItem>...</PageItem>
            <PageItem>9</PageItem>
            <PageItem>
              <FaAngleRight />
            </PageItem>
          </Pagination>
        </Box> */}
      </Container>
    </Section>
  </>
);

export default BlogList;
