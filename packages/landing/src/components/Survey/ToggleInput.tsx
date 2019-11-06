import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0)
  },
  button: {
    maxWidth: 100
  }
}));

type ToggleInputProps = {
  value: boolean;
  onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void;
};

const ToggleInput: React.FunctionComponent<ToggleInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
    >
      <ToggleButton
        value="true"
        aria-label="Is Product Manager"
        className={classes.button}
      >
        Yes
      </ToggleButton>
      <ToggleButton
        value="false"
        aria-label="Not a Product Manager"
        className={classes.button}
      >
        No
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleInput;
