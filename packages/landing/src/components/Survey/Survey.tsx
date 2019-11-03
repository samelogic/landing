import * as React from 'react';
import Popper from '@material-ui/core/Popper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    }
  })
);

type SurveyProps = {
  id: string,
  open: boolean,
  anchorEl: HTMLElement
};

const Survey: React.FunctionComponent<SurveyProps> = ({
  id,
  open,
  anchorEl,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Popper id={id} open={open} anchorEl={anchorEl}>
      <div className={classes.paper}>The content of the Popper.</div>
    </Popper>
  );
};
export default Survey;
