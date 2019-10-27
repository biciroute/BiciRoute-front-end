import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MyAppBarStyles from './MyAppBarStyles.js';

export default function MyAppBar(props) {
  const classes = MyAppBarStyles();
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

  const urlBack = "/home";

  const linkBack = React.useMemo(
    () =>
    React.forwardRef((linkProps, ref) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <Link to={urlBack} {...linkProps} innerRef={ref} />
    )),
    [urlBack],
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#212121"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
            component={linkBack}>
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