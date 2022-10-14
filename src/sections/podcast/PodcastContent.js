import React from "react";
import styled from "styled-components";
import { getSrc } from "gatsby-plugin-image";

import { Box } from "../../components/Core";
import iconQuote from "../../assets/image/png/quote-icon.png";

const Post = styled(Box)`
  font-size: 1rem;

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol {
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.heading} !important;
  }

  a {
    text-decoration: underline;
  }

  ol li {
    list-style-type: decimal;
    margin-left: 1.25rem;
  }

  ul li {
    list-style-type: disc;
    margin-left: 1.25rem;
  }

  blockquote {
    margin-bottom: 1.25rem;
    padding-left: 50px;
    position: relative;
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 20px;
    &::after {
      content: url(${iconQuote});
      display: inline-block;
      min-width: 28px;
      max-width: 28px;
      margin-top: 8px;
      margin-right: 23px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img,
  iframe,
  video {
    max-width: 100%;
    margin-bottom: 2rem;
    display: block;
  }
`;

const PodcastContent = ({ podcast }) => (
  <>
    {/* <!-- Blog section --> */}
    <Post>
      <div>
        <img
          className="pb-6"
          style={{ borderRadius: "10px" }}
          src={getSrc(podcast.heroImage)}
          alt=""
        />
      </div>
      <div>{podcast.subTitle.subTitle}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: podcast.content.childMarkdownRemark.html,
        }}
      />
    </Post>
  </>
);

export default PodcastContent;
