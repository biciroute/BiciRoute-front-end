import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import MyAppBarStyles from './MyAppBarStyles.js';
import ElevationScroll from '../ElevationScroll/ElevationScroll.js';

export default function MyAppBar(props) {
  const classes = MyAppBarStyles();

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
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor: "#212121"}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
              component={linkBack}>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}