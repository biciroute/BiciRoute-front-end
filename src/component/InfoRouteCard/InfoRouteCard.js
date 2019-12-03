import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import InfoRouteCardStyles from './InfoRouteCardStyles.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import MapComponent from '../Map/MapComponent.js';
import Container from '@material-ui/core/Container';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function InfoRouteCard(props) {
    const classes = InfoRouteCardStyles();
    const [data, setData] = React.useState(props.data);

    const routeLatLng = {
        origin: {
            lat: props.data.origin.lat,
            lng: props.data.origin.lng
        },
        destination: {
            lat: props.data.destination.lat,
            lng: props.data.destination.lng
        },
        commonRoute: {
            origin:{
                lat: props.data.commonRoute.origin.lat,
                lng: props.data.commonRoute.origin.lng
            },
            destination:{
                lat: props.data.commonRoute.destination.lat,
                lng: props.data.commonRoute.destination.lng
            },
        }
    }

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
            <MapComponent route={routeLatLng}
                location={{ 
                    latLng: props.data.origin,
                    name: "Escuela Colombiana de Ingeniería Julio Garavito"
                }}/>
        </Dialog>
    );
}