import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  InputGroup,
} from "../../components/Core";
import { device } from "../../utils";

const EmailForm = () => {
  const onSubmit = () => {
    alert("Form submitted");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="position-relative">
        <InputGroup
          icon={<i className="icon icon-email-84" />}
          placeholder="Email address"
          border="none"
          css={`
            @media${device.sm} {
              padding-right: 210px;
            }
          `}
        />
        <Button
          css={`
            margin-top: 1rem;
            @media${device.sm} {
              margin-top: 0;
              position: absolute;
              top: 50%;
              right: 5px;
              transform: translateY(-50%);
            }
          `}
        >
          Get Started
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
