import React from "react";

import { Button } from "../Core";

const CTAButton = ({ href = "https://app.samelogic.com", ...rest }) => {
  return (
    <a href={href} className="cta-btn" style={{ textDecoration: "none" }}>
      <Button {...rest}>Try for Free &nbsp;</Button>
    </a>
  );
};

export default CTAButton;
