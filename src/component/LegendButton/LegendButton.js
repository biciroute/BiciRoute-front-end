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
import bici from './img/bici.png';
import bicis from './img/bicis.png';
import final from './img/final.png';
import { width, height } from '@material-ui/system';
import "./LegendButton.css";

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

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <React.Fragment>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<HelpIcon />}
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
        <DialogTitle id="alert-dialog-title">Understand your route</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="tip"> 
              <img src={bici} style={{ width: "30px", height: "30px" }} />
              Your Start point
            </div>
            <div className="tip">
              <img src={bicis} style={{ width: "30px", height: "30px" }} />
              Meet Points
            </div>
            <div className="tip">
              <img src={final} style={{ width: "30px", height: "30px" }} />
              End of the route
            </div>
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