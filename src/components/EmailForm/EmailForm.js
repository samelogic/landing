import React, { useState } from "react";
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
import useForm from "./useForm";

function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}

function submit(values) {
  alert(JSON.stringify(values, null, 2));
}

const EmailForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="position-relative">
        <InputGroup
          icon={<i className="icon icon-email-84" />}
          placeholder="Email address"
          border="none"
          name="email"
          type="email"
          value={values.email || ""}
          onChange={handleChange}
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
      {}
    </form>
  );
};

export default EmailForm;
