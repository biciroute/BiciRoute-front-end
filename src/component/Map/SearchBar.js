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
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import moment from 'moment';

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
      backgroundColor: fade(theme.palette.common.white, 0.20),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.35)
      },
      marginLeft: 0,
      width: "95%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        
      }
    },
    hour: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.20),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.35)
      },
      marginLeft:0,
      width: "95%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        
      }
    },
    hour1:{
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "80%",
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "80%",
      
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
  
  const [selectedHour, setSelectedHour] = React.useState();

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
                      <TextField fullWidth
                          className={classes.inputInput}
                          id="source"
                          placeholder="¿ Desde dónde?"
                        />
                    
                    </div>
                    <div id="to" className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <TextField fullWidth
                          className={classes.inputInput}
                          id="target"
                          placeholder="¿A dónde vas?"
                        />
                      </div>
                    <Grid
                       container
                       direction="column"
                       justify="center"
                       alignItems="strech"                     
                    >
                    <div id="hour" className={classes.hour}>
                    <div id="hour1" className={classes.hour1}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        placeholder="Hora de salida"
                        value={selectedHour}
                        onChange={handleHourChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                          'fill': 'white',
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
