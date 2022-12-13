import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <li style={{ marginBottom: "5px" }}>
          <b>{children}</b>
        </li>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <li style={{ marginLeft: "16px", color: "#ddd" }}>{children}</li>
    ),
  },
};

const ContentfulTableOfContents = ({ richText }) => {
  // the body is the json object returned by the rich text field
  const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3];

  const json = JSON.parse(richText.raw);

  const headings = json.content.filter((item) =>
    headingTypes.includes(item.nodeType)
  );

  const document = {
    nodeType: "document",
    content: headings,
  };

  return (
    <div style={{ color: "#eee" }}>
      <h3 style={{ color: "white" }}>Table of Contents</h3>
      <ul>{documentToReactComponents(document, options)}</ul>
    </div>
  );
};

export default ContentfulTableOfContents;
