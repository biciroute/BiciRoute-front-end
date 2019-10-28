import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import InfoRouteCardStyles from './InfoRouteCardStyles.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoRouteCard(props) {
    const classes = InfoRouteCardStyles();
    const [data, setData] = React.useState(props.data);

    return (
        <Dialog fullScreen open={props.open} onClose={props.onClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Route details
                </Typography>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                
                <Toolbar style={{flexGrow: 1}}>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        {props.data.route}
                    </Typography>
                    <Typography variant="h6">
                        {props.data.date}
                    </Typography>
                </Toolbar>

                <Box width={1} className={classes.containerImage}>
                    <img
                        src={process.env.PUBLIC_URL+ "/images/map.PNG"}
                        className={classes.mapImage}
                    />
                </Box>
            </Paper>

            
        </Dialog>
    );
}