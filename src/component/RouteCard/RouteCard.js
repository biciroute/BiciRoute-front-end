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

export default function RouteCard(props) {
  const classes = RouteCardStyles();

  const [route]=React.useState("origin["+props.origin.lat+","+props.origin.lng+"] - destination["+props.destination.lat+","+props.destination.lng+"]");
  const [showInfo, setShowInfo] = React.useState(false);

  const handleOpen = () =>{
    setShowInfo(true);
  }

  const handleClose = () => {
    setShowInfo(false);
  };

  return (
    <React.Fragment>
      <InfoRouteCard key={showInfo} open={showInfo} onClose={handleClose}
        data={{
          route: route,
          date: props.date,
          accompaniers: "20"
        }}/>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={route}
          subheader={props.date}
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
