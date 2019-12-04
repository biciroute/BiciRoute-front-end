import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Grid from '@material-ui/core/Grid';
import RouteCardStyles from './RouteCardStyles.js';
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import InfoRouteCard from '../InfoRouteCard/InfoRouteCard.js';
import MapComponent from '../Map/MapComponent.js';

export default function RouteCard(props) {
  const classes = RouteCardStyles();

  const [showInfo, setShowInfo] = React.useState(false);
  const [origin, setOrigin] = React.useState("origin["+props.origin.lat+","+props.origin.lng+"]");
  const [destination, setDestination] = React.useState("destination["+props.destination.lat+","+props.destination.lng+"]");

  const handleOpen = () =>{
    setShowInfo(true);
  }

  const handleClose = () => {
    setShowInfo(false);
  };

  const resolvePointsToAddresses = (listAddresses) => {
    setOrigin(listAddresses[0]);
    setDestination(listAddresses[1]);
  }

  return (
    <React.Fragment>
      <InfoRouteCard key={showInfo} open={showInfo} onClose={handleClose}
        data={{
          origin: props.origin,
          destination: props.destination,
          commonRoute: props.commonRoute,
          accompaniers: "20"
        }}
        />
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.origin.address +" -> "+props.destination.address}
          subheader={props.commonRoute.hour}
        />
        <a onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL+ "/images/map.PNG"}
          />
        </a>

        {/*------------------------------------------------------*/}
        <CardContent>
          <Grid container>
            <Grid item xs={1}>
              <StarRoundedIcon />
            </Grid>
            <Grid item xs={1}>
              <StarRoundedIcon />
            </Grid>
            <Grid item xs={1}>
              <StarRoundedIcon />
            </Grid>
            <Grid item xs={1}>
              <StarRoundedIcon />
            </Grid>
            <Grid item xs={1}>
              <StarHalfRoundedIcon />
            </Grid>    
          </Grid>
        </CardContent>
      </Card>
      </React.Fragment>

  );
}
