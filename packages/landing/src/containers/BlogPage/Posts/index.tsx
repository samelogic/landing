import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostCard from '../../../components/PostCard/postCard';
import Pagination from '../../../components/Pagination/pagination';
import BlogPostsWrapper from './style';

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = props => {
  const Data = useStaticQuery(graphql`
    query BlogPostsPageQuery {
      allContentfulPost(limit: 1000) {
        edges {
          node {
            id
            title
            slug
            description {
              description
            }
            content {
              content
              childMarkdownRemark {
                excerpt(pruneLength: 300)
              }
            }
            heroImage {
              sizes(maxWidth: 1170, maxHeight: 690, resizingBehavior: SCALE) {
                ...GatsbyContentfulSizes_withWebp
              }
            }
            tags
            updatedAt
          }
        }
      }
    }
  `);

  const Posts = Data.allContentfulPost.edges;
  // const TotalPage = Data.allSitePage.nodes[0].context.numPages;
  // const CurrentPage = Data.allSitePage.nodes[0].context.currentPage;

  return (
    <BlogPostsWrapper>
      {Posts.map(({ node }: any) => {
        const title = node.title || node.slug;
        return (
          <PostCard
            key={node.slug}
            title={title}
            image={node.heroImage == null ? null : node.heroImage.sizes}
            url={`/blog/${node.slug}`}
            description={
              (node.description && node.description.description) ||
              node.content.childMarkdownRemark.excerpt
            }
            date={node.updatedAt}
            tags={node.tags}
          />
        );
      })}

      {/* {TotalPage >> 1 ? (
        <Pagination
          nextLink="/page/2"
          currentPage={CurrentPage}
          totalPage={TotalPage}
        />
      ) : (
        ''
      )} */}
    </BlogPostsWrapper>
  );
};

export default Posts;
