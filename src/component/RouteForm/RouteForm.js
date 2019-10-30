import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RouteFormStyles from './RouteFormStyles.js';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import swal from 'sweetalert';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';

import DateFnsUtils from "@date-io/date-fns";
import TextField from '@material-ui/core/TextField';
import { Route, Redirect } from 'react-router';

export default function RouteForm(props) {
  const classes = RouteFormStyles();
  const [state, setState] = React.useState({origin: null, destination: null});
  const [routeFound, setRouteFound] = React.useState(false);
  const [confirm, setConfirm] = React.useState(null);

  const handleChangeState = prop => event =>{
    setState({
      ...state, [prop]: event.target.value
    });
  }

  const [selectedHour, setSelectedHour] = React.useState();
  const handleHourChange = hour => {
    setSelectedHour(hour);
  };


  const handleOnSearch = () =>{
    props.paintRoute();
    /*
    if(state.origin === null || state.destination=== null){
      swal({
        title: "Ooops!",
        text: "You must fill in origin and destination!!",
        icon: "error",
        button: false,
        timer: 2000
      });
    }else{
      props.paintRoute();
      swal({
        title: "loading",
        text: "The best route was found for you!!",
        icon: "success",
        timer: 3000,
        button: false,
      }).then(() => {
        setRouteFound(true);
        document.getElementById("source").disabled = true;
        document.getElementById("target").disabled = true;
        document.getElementById("hour").disabled = true;
      });*/
  }
  

  const handleOnConfirm = () =>{
    swal({
      title: "Good job!",
      text: "You have joined to this route!!!",
      icon: "success",
      timer: 3000,
      button: false,
    }).then(() => {
      setConfirm(true);
    });
  }

  const handleOnCancel = () =>{
    setConfirm(false);
    window.location.reload();
  }

  return (
    
    <Container className={classes.container}>
      {(confirm==false) ? <Redirect to="/home"/>:
       (confirm===true)? <Redirect to="/myroutes"/>: <React.Fragment></React.Fragment>}
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h3" align="center">
          Welcome {JSON.parse(localStorage.getItem('loggedUser')).firstName}!
        </Typography>
        <Divider variant="middle" />
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{width: "10%"}}>
                    <SearchIcon />
                </Grid>
                <Grid item style={{width: "90%"}}>
                    <TextField label="Origin"
                        fullWidth
                        id="source"
                        style={{color: "#212121"}}
                        onChange ={handleChangeState('origin')}
                    />
                </Grid>
            </Grid>
        </div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{width: "10%"}}>
                    <SearchIcon />
                </Grid>
                <Grid item style={{width: "90%"}}>
                    <TextField label="Destination"
                        fullWidth
                        id="target"
                        style={{color: "#212121"}}
                        onChange ={handleChangeState('destination')}
                    />
                </Grid>
            </Grid>
        </div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{width: "10%"}}>
                    <DirectionsBikeIcon />
                </Grid>
                <Grid item style={{width: "30%"}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} style={{width: "100%"}}>
                      <KeyboardTimePicker
                          id = "hour"
                          ampm = {false}
                          format =  "yyyy-MM-dd HH:mm:ss" 
                          margin="normal"
                          label="Departure time"
                          value={selectedHour}
                          onChange={handleHourChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                            'fill': 'white',
                          }}
                          style={{width: "100%"}}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item style={{width: "60%"}}>
                  {(routeFound)?
                  <Container style={{textAlign: "center"}}>
                      <Button variant="contained" color="primary"
                        style={{width:"40%", backgroundColor: "#00FF00", color: "#FFFFFA", margin: "4px"}}
                          onClick={handleOnConfirm}>
                        Confirm
                      </Button>
                      <Button variant="contained" color="secondary"
                        style={{width:"40%", color: "#FFFFFA", margin: "4px"}}
                        onClick={handleOnCancel}
                        >
                        Cancel
                      </Button>
                  </Container>
                  :
                  <Container style={{textAlign: "center"}}>
                    <div>
                      <Button variant="contained" color="secondary"
                        style={{width:"70%", backgroundColor: "#212121", color: "#FFFFFA"}}
                        onClick={handleOnSearch}>
                        Search
                      </Button>
                    </div>
                  </Container>}
                  
                  
                </Grid>
            </Grid>
        </div>
      </Paper>
    </Container>
  );
}
