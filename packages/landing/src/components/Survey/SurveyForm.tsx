import React, { useState } from 'react';
import { useFormik } from 'formik';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import request from 'request-promise-native';
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
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const resp = await axios.post(
          'https://wh.automate.io/webhook/5dbf65b3cc8ec65400a5fc64',
          values,
          {}
        );
        console.log(resp);
      } catch (err) {
        console.error(err);
      }
      setSubmitting(false);
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <label htmlFor="isPM">Are you a Product Manager?</label>
        </Grid>
        <Grid item xs={12} justify="center">
          <ToggleInput
            value={formik.values.isPM}
            onChange={handleToggleChange}
          />
        </Grid>
        {isPmSet ? (
          <>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="What is your email?"
                margin="normal"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </Grid>
          </>
        ) : null}
      </Grid>
    </form>
  );
};
export default SurveyForm;
