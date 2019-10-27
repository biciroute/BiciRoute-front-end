import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MyAppBar(props) {
  const classes = useStyles();
  const [typeRoutes, setTypeRoutes] = React.useState("past");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnClickPast = () =>{
        setTypeRoutes("past");
        handleClose();
  }

  const handleOnClickUpcoming = () =>{
      setTypeRoutes("upcoming");
      handleClose();
  }

  const onClickBack = () =>{
    window.location.href = "/home";
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#212121"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onClickBack}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {(props.title==="My routes") ?
          <React.Fragment>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color: "#FFFFFF"}}>
                  <ExpandMoreIcon/>
                  {typeRoutes}
            </Button>
              <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                  <MenuItem onClick={handleOnClickPast}>past</MenuItem>
                  <MenuItem onClick={handleOnClickUpcoming}>upcoming</MenuItem>
              </Menu>
          </React.Fragment>: <React.Fragment></React.Fragment>}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}