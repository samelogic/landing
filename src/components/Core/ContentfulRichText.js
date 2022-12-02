import React from "react";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm">
        {text}
      </code>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-brand-default underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{createJumpLink(children)}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,

    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,

    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length < 1 || node.content[0].value === "") {
        return <br />;
      } else {
        return <p>{children}</p>;
      }
    },
    [BLOCKS.QUOTE]: (children) => (
      <blockquote>
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt={description}
          className="mb-10"
        />
      );
    },
  },
};

const ContentfulRichText = ({ richText }) => {
  return <div>{renderRichText(richText, options)}</div>;
};

export default ContentfulRichText;
