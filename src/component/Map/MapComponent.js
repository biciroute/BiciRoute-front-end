import React from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import "./Map.css"
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Modal from '@material-ui/core/Modal';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system';




const mapStyles = {
    width: '100%',
    height: '100%',
};


const useStyles = theme => ({
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    Modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }

});




class MapComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            university: { lat: 4.782715, lng: -74.042611 },
            open: false,
            pathRoute: [],
            position: null
        };

        // Modal
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        // Route
        this.autocomplete = this.autocomplete.bind(this);
        this.setDirectionRoute = this.setDirectionRoute.bind(this);
        //this.renderDirections =  this.renderDirections.bind(this);

    }

    setRefInput(ref) {
        this.autocomplete = ref;
    }

    handleClose(e) {
        this.setState({
            open: false
        });
    }

    rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    getModalStyle() {
        const top = 50 + this.rand();
        const left = 50 + this.rand();
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen(e) {
        this.setState({
            open: true
        })
    }

    async getLanLnt(address) {
        const { google, map } = this.props;
        const geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {

                    resolve(results[0].geometry.location)
                } else {
                    window.alert('Directions ' + address + ' request failed due to ' + status);
                    reject(status)
                }
            });
        })
    }

    async getCenterMap() {

        const { google, map } = this.props;
        const temporalRoutes = []
        const sourceRoute = document.getElementById("source").value
        const targetRoute = document.getElementById("target").value
        const coordinatesDestinations = []
        var x = await this.getLanLnt(sourceRoute)
        var y = await this.getLanLnt(targetRoute)
        coordinatesDestinations.push(x);
        coordinatesDestinations.push(y);
        var bounds = new google.maps.LatLngBounds();     
        console.log("aqui " + coordinatesDestinations + " " + coordinatesDestinations.length)
        for (var i = 0; i < coordinatesDestinations.length; i++) {
            console.log(coordinatesDestinations[i].lat()+ " " + coordinatesDestinations[i].lng());
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(coordinatesDestinations[i].lat(), coordinatesDestinations[i].lng()),
                map: map
            });
            //extend the bounds to include each marker's position
            bounds.extend(marker.position);

        }
        this.setState({
            position : bounds.getCenter()
        });
        console.log("Aca   "  + bounds.getCenter());
        map.fitBounds(bounds);
        

        console.log(coordinatesDestinations);
        return coordinatesDestinations
    }


    async setDirectionRoute() {
        var newPathRoute = await this.calculateRoute();
        const { google, map } = this.props;
        this.setState({
            pathRoute: newPathRoute.routes[0].overview_path,
            open: false
        });
        this.getCenterMap();
        
    }


    autocomplete() {
        const { google, map, ...rest } = this.props;
        if (!google || !map) return;
        var src = document.getElementById("source");
        var tgt = document.getElementById('target');
        var autoSrc = new google.maps.places.Autocomplete(src);
        var autoTgt = new google.maps.places.Autocomplete(tgt);
        autoSrc.bindTo('bounds', map);
        autoSrc.setFields(['address_components', 'geometry', 'icon', 'name']);
        autoTgt.bindTo('bounds', map);
        autoTgt.setFields(['address_components', 'geometry', 'icon', 'name']);

        autoSrc.setComponentRestrictions(
            { 'country': ['co'] });
        autoTgt.setComponentRestrictions(
            { 'country': ['co'] });


    }


    calculateRoute(travelMode, origin, destination, dateUniversity) {
        const { google, map, ...rest } = this.props;
        if (!google || !map) return;
        const directionsService = new google.maps.DirectionsService();
        let pathRoute;
        const request = {
            origin: document.getElementById("source").value,
            destination: document.getElementById("target").value,
            travelMode: "DRIVING",
        };
        return new Promise((resolve, reject) => {
            directionsService.route(request, (response, status) => {
                if (status === 'OK') {
                    window.alert("OK PASS");
                    pathRoute = response.routes[0];
                    resolve(response)
                } else {

                    window.alert('Directions request failed due to ' + status);
                    reject(status)
                }
            })
        }
        )
    }





    //https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
    componentDidMount() {
        this.autocomplete();
        if (navigator && navigator.geolocation) {
            //navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map) {
            this.autocomplete();

        }


    }


    // getModalStyle is not a pure function, we roll the style only on the first render

    render() {
        const { classes } = this.props;
        const modalStyle = this.getModalStyle;
        return (
            <div >
                <Map
                    className="map"
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={this.state.university}
                    centerAroundCurrentLocation={false}
                    mapTypeControl={false}
                    center={this.state.position}

                >

                    <Marker
                        title={'Escuela colombiana de ingenieria Julio Garavito'}
                        position={this.state.university}
                        animation={this.props.google.maps.Animation.DROP}
                        name={'Escuela colombiana de ingenieria Julio Garavito'}
                        description={'AK 45 #205-59 Bogota\nInstitucion universitaria'}
                    />


                    <Polyline
                        path={this.state.pathRoute}
                        geodesic={false}
                        options={{
                            strokeColor: '#38B44F',
                            strokeOpacity: 1,
                            strokeWeight: 7,
                        }}
                    />
                    <Button title="Begin your route with biciRoute" variant="contained" color="primary" onClick={this.handleOpen} id="buttonSearch" aria-label="delete" >
                        <NavigationIcon /> Search trip
                    </Button>


                </Map>



                <Modal open={this.state.open}
                    onClose={this.handleClose}
                    keepMounted={true}
                    id="modal"
                    //style={modalStyle}
                    className = {classes.Modal}
                >
                    <div className={classes.paper}>
                        <TextField
                            id="source"
                            type="search"
                            label="trip's start"
                            className={classes.textField}
                            margin="normal"
                        />

                        <br></br>
                        <TextField
                            id="target"
                            type="search"
                            label="trip's end"
                            className={classes.textField}
                            margin="normal"
                        />
                        <br></br>
                        <Button variant="contained" color="primary" onClick={this.setDirectionRoute}>
                            Search possible trips
                        </Button>

                    </div>
                </Modal>

            </div>
        );
    }

}
//https://es.reactjs.org/docs/hooks-reference.html#usestate
MapComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const MapWrapper = props => (
    <div className="unAbsolute">
        <Map className="map" google={props.google} visible={false}>
            <MapComponent {...props} />
        </Map>
    </div>
);

export default withStyles(useStyles)(GoogleApiWrapper({
    apiKey: 'AIzaSyCJuZIQnX6XR1vs6dBHuZHj8J5TrWmVi-8',
    language: "es",
})(MapWrapper));