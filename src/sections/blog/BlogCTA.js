import React from "react";

const BlogCTA = ({ title, body, cta }) => {
  return (
    <div style={{ borderTop: "1px solid #ddd", marginTop: "1rem" }}>
      <div
        style={{
          width: "100%",
          border: "1px solid #EEE",
          backgroundColor: "#eee",
          padding: "0px 15px",
          borderRadius: "8px",
          float: "left",
          marginTop: "3em",
        }}
      >
        <div style={{ float: "left", width: "65%", padding: "15px" }}>
          <p style={{ marginBottom: 0 }}>
            <b style={{ color: "#7616D5" }}>
              {title || "Ready to skip the Engineers and validate your ideas?"}
            </b>
          </p>
          <p
            style={{
              fontWeight: 300,
              fontSize: "13px",
              marginBottom: "5px",
              lineHeight: "19px",
              marginTop: 0,
            }}
          >
            {body ||
              "Drag your mocks from Figma, Sketch and Storybook into your website and start measuring in minutes!"}
          </p>
        </div>
        <a
          href="https://app.samelogic.com/"
          target="_blank"
          className="cta-btn"
          style={{
            float: "right",
            width: "31%",
            textAlign: "left",
            padding: "10px 15px",
            borderRadius: "4px",
            backgroundColor: "#7616D5",
            marginTop: "30px",
            marginBottom: "30px",
            marginRight: "12px",
          }}
        >
          <span style={{ float: "left", color: "white" }}>
            {cta || "Sign Up Now"}
          </span>
          <img
            src="https://raw.githubusercontent.com/Samelogic/assets/master/blog/right%20arrow.png"
            style={{ margin: "5px 0px 0px 10px", float: "right" }}
          />
        </a>
      </div>
    </div>
  );
};
export default BlogCTA;
