import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import HelpIcon from '@material-ui/icons/Help';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
    margin: "50px"
  },
}));

export default function SpeedDials() {
  const classes = useStyles();
  const [direction, setDirection] = React.useState('right');
  const [open, setOpen] = React.useState();

  const handleClose = () =>{
      setOpen(false);
  }

  const handleOpen = () =>{
      setOpen(true);
  }

  return (
    <React.Fragment>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<HelpIcon/>}
          direction={direction}
          onClick={handleOpen}
        >
        </SpeedDial>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">IMPORTANT!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    If you're a new user, you must learn the meaning of each one of our points!.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
  );
}