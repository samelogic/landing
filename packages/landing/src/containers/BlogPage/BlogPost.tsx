import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PostCard from '../../components/PostCard/postCard';
import PostDetails from '../../components/PostDetails/postDetails';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton
} from 'react-share';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoReddit
} from 'react-icons/io';
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment
} from './BlogPost.style';

const BlogPostTemplate = ({ data, path }) => {
  const {
    title,
    description,
    slug,
    content,
    heroImage,
    tags,
    updatedAt
  } = data.contentfulPost;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const shareUrl = urljoin(siteUrl, 'blog', slug);

  const disqusConfig = {
    shortname: process.env.DISQUS_NAME,
    config: { identifier: slug, title }
  };
  return (
    <Layout path={path}>
      <SEO
        title={title}
        description={
          (description && description.description) ||
          content.childMarkdownRemark.excerpt
        }
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={title}
          date={updatedAt}
          preview={heroImage == null ? null : heroImage.sizes}
          description={content.childMarkdownRemark.html}
        />

        <BlogPostFooter>
          {/* {post.frontmatter.tags == null ? null : (
            <PostTags className="post_tags">
              {post.frontmatter.tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )} */}
          <PostShare>
            <span>Share This:</span>
            <FacebookShareButton url={shareUrl} quote={description}>
              <IoLogoFacebook />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <IoLogoTwitter />
            </TwitterShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${title}`}
            >
              <IoLogoReddit />
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>
        {/* <BlogPostComment>
          <DiscussionEmbed {...disqusConfig} />
        </BlogPostComment> */}
      </BlogPostDetailsWrapper>

      {/* {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.fields.slug}>
                <PostCard
                  title={node.frontmatter.title || node.fields.slug}
                  url={node.fields.slug}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  tags={node.frontmatter.tags}
                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )} */}
    </Layout>
  );
};

export default BlogPostTemplate;
export const pageQuery = graphql`
         query($slug: String!) {
           site {
             siteMetadata {
               siteUrl
             }
           }
           contentfulPost(slug: { eq: $slug }) {
             title
             description {
               description
             }
             slug
             content {
               childMarkdownRemark {
                 html
                 excerpt(pruneLength: 300)
               }
             }
             heroImage {
               sizes(
                 quality: 90
                 maxWidth: 1170
                 maxHeight: 690
                 resizingBehavior: SCALE
               ) {
                 ...GatsbyContentfulSizes_withWebp
               }
             }
             tags
             createdAt(formatString: "MMMM Do, YYYY")
             updatedAt(formatString: "MMMM Do, YYYY")
           }
         }
       `;
