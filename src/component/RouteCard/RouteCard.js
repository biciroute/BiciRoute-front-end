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

export default function RouteCard(props) {
  const classes = RouteCardStyles();

  const [route]=React.useState(props.origin+" - "+props.destination);

  return (
    <div className="cardRoute">
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={route}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL+ "/images/map.PNG"}
          title="Paella dish"
        />
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
    </div>
  );
}
