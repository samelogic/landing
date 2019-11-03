import * as React from 'react';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      margin: theme.spacing(0.5),
      backgroundColor: theme.palette.background.paper
    }
  })
);

type SurveyProps = {
  id: string,
  open: boolean,
  placement: PopperPlacementType,
  anchorEl: HTMLElement,
  handleClickAway: (event: React.MouseEvent<Document>) => void
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
    <Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classes.paper}>
          <div>The content of the Popper.</div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </ClickAwayListener>
    </Popper>
  );
};
export default Survey;
