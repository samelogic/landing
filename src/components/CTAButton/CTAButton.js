import React from "react";

import { Button } from "../Core";

const CTAButton = ({ href = "https://app.samelogic.com", ...rest }) => {
  return (
    <Button href={href} className="cta-btn" {...rest}>
      Try for Free &nbsp;
    </Button>
  );
};

export default CTAButton;
