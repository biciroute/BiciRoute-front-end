import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import "./Map.css";
import { Menu } from '../Menu/Menu';
import { IconButton } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "95%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    hour: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    hour1:{
      marginLeft:10,
      alignItems: "center",
      justifyContent: "center"
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "80%",
      [theme.breakpoints.up("sm")]: {
        width:  "95%",
      },
    }
  }));
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
export default function SearchAppBar(props) {
  
  const [selectedHour, setSelectedHour] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleHourChange = hour => {
    setSelectedHour(hour);
  };
  
  const classes = useStyles();
  
  return (
          <div className={classes.grow}>
               <HideOnScroll {...props}>
                 <AppBar id="appBar" position="static">
                  <Toolbar>
                    <Grid
                      container
                      direction="column"
                      justify="space-between"
                      alignItems="strech"
                    >
                    <div id="from" className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase id="source"
                        placeholder="¿De dónde sales?"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>
                    <div id="to" className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase id="target"
                        placeholder="¿ A dónde vas?"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>
                    <Grid
                       container
                       direction="row"
                       justify="center"
                       alignItems="center"                     
                    >
                    <div id="hour" className={classes.hour}>
                    <div id="hour1" className={classes.hour1}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Hour"
                        value={selectedHour}
                        onChange={handleHourChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                      </MuiPickersUtilsProvider>
                      </div>
                    </div>
                    
                    </Grid>
                    </Grid>
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
          </div>

  );
}
