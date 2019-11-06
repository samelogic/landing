import * as React from 'react';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import SurveyForm from './SurveyForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 100,
      maxWidth: 400
    },
    paper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(0.5)
    }
  })
);

type SurveyProps = {
  id: string;
  open: boolean;
  placement: PopperPlacementType;
  anchorEl: HTMLElement;
  handleClickAway: (event: React.MouseEvent<Document>) => void;
};

const Survey: React.FunctionComponent<SurveyProps> = ({
  id,
  open,
  anchorEl,
  placement,
  handleClickAway,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      className={classes.root}
      transition
    >
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <SurveyForm onSubmitted={handleClickAway} />
            </Paper>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  );
};
export default Survey;
