import React, { useState } from 'react';
import { useFormik } from 'formik';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ToggleInput from './ToggleInput';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

type SurveyFormProps = {};

const SurveyForm: React.FunctionComponent<SurveyFormProps> = ({ ...props }) => {
  const [isPmSet, setPM] = useState(false);

  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      isPM: false,
      email: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: any
  ) => {
    formik.handleChange({
      target: {
        name: 'isPM',
        value: value
      }
    } as React.ChangeEvent<any>);
    setPM(true);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="isPM">Are you a Product Manager?</label>
      <ToggleInput value={formik.values.isPM} onChange={handleToggleChange} />
      {isPmSet ? (
        <>
          <label htmlFor="email">Whats your email?</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Submit</button>
        </>
      ) : null}
    </form>
  );
};
export default SurveyForm;
