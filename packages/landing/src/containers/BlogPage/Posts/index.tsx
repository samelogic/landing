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
            content {
              content
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
            image={null}
            url={`/blog/${node.slug}`}
            description={node.description}
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
