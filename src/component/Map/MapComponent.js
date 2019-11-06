import React from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import "./Map.css";
import NavigationIcon from '@material-ui/icons/Navigation';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SearchBar from './SearchBar.js';
import bici from './img/bici.png';
import bicis from './img/bicis.png';
import final from './img/final.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import RouteForm from '../RouteForm/RouteForm.js'
import LegendButton from '../LegendButton/LegendButton.js';
import swal from 'sweetalert';

const mapStyles = {
    width: '100%',
    height: '100%',
};

const useStyles = theme => ({
    paper: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    textField: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(2),
            width: "auto"
        },

    },
    Modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    fab: {
        margin: theme.spacing.unit, // You might not need this now
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

});




export class MapComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            university: { lat: 4.782715, lng: -74.042611 },
            open: false,
            dialogNoRoute  : false,
            dialogRoute  : false,
            createRouteST : null,
            pathRoute: [],
            pathRouteOriginPlace: [],
            pathRouteDestinationPlace: [],
            position: null,
            checked: false,
            suggestRouteJSON : null,
            msgSuggestRoute : null,
            markers: [
                {
                    university: { lat: 4.782715, lng: -74.042611 },
                    title: "Escuela colombiana de ingenieria Julio Garavito",
                    name: "Escuela colombiana de ingenieria Julio Garavito",
                    icon: bici,
                },
            ],
            carres: []
        };
        this.axios = axios.create({
            baseURL: 'http://localhost:8080/v1/'
            //headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Bearer") }
        });

        // Route
        this.autocomplete = this.autocomplete.bind(this);
        this.setDirectionRoute = this.setDirectionRoute.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleStatusChange= this.handleStatusChange.bind(this);
        this.changeStatus=this.changeStatus.bind(this);
        //Dialog
        this.handleDialogNoRouteOpen = this.handleDialogNoRouteOpen.bind(this);
        this.handleDialogNoRouteClose = this.handleDialogNoRouteClose.bind(this);
        
        this.handleDialogRouteOpen = this.handleDialogRouteOpen.bind(this);
        this.createANewRoute = this.createANewRoute.bind(this);
        this.confirmRoute = this.confirmRoute.bind(this);

        
    }



    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleOpen(e) {
        this.setState({ open: true });
    }

    handleClose(e) {
        this.setState({ open: false });
    }


    handleDialogNoRouteOpen(e){
        this.setState({ dialogNoRoute: true });
    }

    handleDialogNoRouteClose(e){
        
        this.setState({ dialogNoRoute: false });
    }

    handleDialogRouteOpen(e){

        this.setState({ dialogRoute: true });
    }


    handleDialogRouteClose(e){
        this.setState({ dialogRoute: false });
    }

    changeStatus(checked) {
        this.setState({ checked: checked });    
    }

   


    async getLanLnt(address) {
        const { google } = this.props;
        const geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {
                    resolve(results[0].geometry.location)
                } else {
                    console.log('Directions ' + address + ' request failed due to ' + status);
                    reject(status)
                }
            });
        })
    }

    
    async reverseGeocode(latLng) {
        
        const {google} = this.props;
        const geocoder = new google.maps.Geocoder;
        return new Promise((resolve, reject) => {
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    resolve(results[0].formatted_address)
                } else {
                    window.alert('Directions ' + latLng + ' request failed due to ' + status);
                    reject(status)
                }
            });
        })
    }


    async getCenterMap(sourceRoute, targetRoute) {
        const { google, map } = this.props;
        const coordinatesDestinations = []
        var x = await this.getLanLnt(sourceRoute)
        var y = await this.getLanLnt(targetRoute)
        coordinatesDestinations.push(x);
        coordinatesDestinations.push(y);
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < coordinatesDestinations.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(coordinatesDestinations[i].lat(), coordinatesDestinations[i].lng()),
                map: map,
                icon: bici,
            });
            bounds.extend(marker.position);
        }
        this.setState({
            position: bounds.getCenter()
        });
        map.fitBounds(bounds);
        return coordinatesDestinations;
    }


    async setDirectionRoute() {
        
        //this.handleOpen();
        localStorage.setItem("viaje", true);
        const origin =  document.getElementById("source").value;
        const destination = document.getElementById("target").value;
        var commonRoutePlace = []
        var commonRouteID = []
        
        for(var j = 0 ; j < this.state.carres.length ; j++){
            var commonRoute = this.state.carres[j];
            const latLng = {lat: parseFloat(commonRoute.latitude), lng: parseFloat(commonRoute.longitude)};
            var place = await this.reverseGeocode(latLng);
            commonRoutePlace.push(place) 
            commonRouteID.push(commonRoute._id)
        }
        console.log(commonRouteID)

        //Define route the  shortest of the origin to some place 
        var theBestOriginToPlace = [1e9, "undefine", null,null,null];
        var theBestDestinationToPlace = [1e9, "undefine", null,null,null];
        for (var i = 0; i < this.state.carres.length ; i++) {
            var newPathRoute = await this.calculateRoute(origin, commonRoutePlace[i]);
            var distance = newPathRoute.routes[0].legs[0].distance.text;
            distance = parseFloat(distance.split(" ")[0].replace(",", "."));
            if (distance < theBestOriginToPlace[0]) {
                theBestOriginToPlace[1] = commonRoutePlace[i];
                theBestOriginToPlace[0] = Math.min(distance, theBestOriginToPlace[0])
                theBestOriginToPlace[2] = newPathRoute.routes[0].overview_path;
                theBestOriginToPlace[3] = commonRouteID[i]
                theBestOriginToPlace[4] = this.state.carres[i]
            }
        }
        for (i = 0; i < this.state.carres.length; i++) {
                //place = await this.reverseGeocode(latLng);
                newPathRoute = await this.calculateRoute(destination, commonRoutePlace[i]);
                distance = newPathRoute.routes[0].legs[0].distance.text;
                distance = parseFloat(distance.split(" ")[0].replace(",", "."));
                if (distance < theBestDestinationToPlace[0] &&   theBestOriginToPlace[1] !== commonRoutePlace[i]) {
                    theBestDestinationToPlace[1] = commonRoutePlace[i];
                    theBestDestinationToPlace[0] = Math.min(distance, theBestDestinationToPlace[0])
                    theBestDestinationToPlace[2] = newPathRoute.routes[0].overview_path;
                    theBestDestinationToPlace[3] = commonRouteID[i]
                    theBestDestinationToPlace[4] =  this.state.carres[i]
                }
           
        }
        newPathRoute = await this.calculateRoute(theBestDestinationToPlace[1], theBestOriginToPlace[1]);
        this.setState({
            pathRoute: newPathRoute.routes[0].overview_path,
            pathRouteDestinationPlace: theBestDestinationToPlace[2],
            pathRouteOriginPlace: theBestOriginToPlace[2],
            open: false
        });
        var newJSON = {
            origin : origin,
            destination :  destination,
            pathRouteDestinationPlace : theBestDestinationToPlace[1],
            idpathRouteDestinationPlace : theBestDestinationToPlace[3],
            latLngpathRouteDestinationPlace : theBestDestinationToPlace[4],
            pathRouteOriginPlace : theBestOriginToPlace[1],
            idpathRouteOriginPlace : theBestOriginToPlace[3],
            latlngpathRouteOriginPlace : theBestOriginToPlace[4],
            latLngOrigin : await this.getLanLnt(origin),
            latLngDestination : await this.getLanLnt(destination)

        };
        this.setState({suggestRouteJSON : JSON.stringify(newJSON)})
        
        if (localStorage.getItem('lastroutes') === undefined || localStorage.getItem('lastroutes') === null ) {
            localStorage.setItem('lastroutes', JSON.stringify([newJSON]))
        }else{
            var tdListJSON = []
            var tdLists = JSON.parse(localStorage.getItem("lastroutes"));
            for(var i = 0 ; i < tdLists.length  ; ++i ){
                tdListJSON.push(tdLists[i]);
            } 
            tdListJSON.push(newJSON);
            localStorage.setItem("lastroutes",JSON.stringify(tdListJSON));
        }
        const places = [newJSON.latLngOrigin, newJSON.latLngDestination, newJSON.latLngpathRouteDestinationPlace, newJSON.latlngpathRouteOriginPlace]
        this.setState({
            markers: []
        })
        console.log(JSON.stringify(newJSON))
        for (i = 0; i < 4; ++i) {
            const latAndLng = places[i];
            
            var newMarker={};
            if(i===0){
                newMarker = {
                    university: { lat: latAndLng.lat(), lng: latAndLng.lng() },
                    title: newJSON.origin,
                    name: places[i],
                    icon:bici,
                }
            }
            else if(i===1){
                newMarker = {
                    university: { lat: latAndLng.lat(), lng: latAndLng.lng() },
                    title: newJSON.destination,
                    name: places[i],
                    icon:final,
                }
            }
            else{
                newMarker = {
                    university: { lat: latAndLng.latitude, lng: latAndLng.longitude },
                    title: places[i],
                    name: places[i],
                    icon: bicis,
                }
            }
            
            this.state.markers.push(newMarker);
        }
        await this.getCenterMap(origin, destination);
        
        var createRoute = {
            
            "origin" :{
                "latitude"  : newJSON.latLngOrigin.lat(),
                "longitude" : newJSON.latLngOrigin.lng()
            },
            "destination" : {
                "latitude"  : newJSON.latLngDestination.lat(),
                "longitude" : newJSON.latLngDestination.lng()
            },  
          
            "user" :{
                "_id" : localStorage.getItem("userId")
            }
        }
        
        this.state.createRouteST = createRoute;

        this.suggestRoute(newJSON);
        

    }


    hex(length, n) {
        n = n.toString(16);
        return (n.length===length)? n : "00000000".substring(n.length, length) + n;
    }

    jsonToStringId(json){
        var idToParse = json
        var idString = this.hex(8,idToParse.timestamp)+this.hex(6,idToParse.machineIdentifier)+this.hex(4,idToParse.processIdentifier)+this.hex(6,idToParse.counter);
        return idString
 
    }
  

    async suggestRoute(newJSON){
        var self = this;
        
        var suggestJSON = {
            
            "origin": {
                "_id": this.jsonToStringId(newJSON.idpathRouteOriginPlace)
            },
            "destination" : {
                "_id": this.jsonToStringId(newJSON.idpathRouteDestinationPlace) 
            }, 
            "hour" : new Date(document.getElementById("hour").value) 
        } 
        console.log(suggestJSON)
        this.axios.post('/routes/suggest' , (suggestJSON) )
            .then(function (response) {
                console.log(response.data);
                var listSuggest = response.data;
                console.log(listSuggest.length == 0)
                if(listSuggest.length == 0){
                    //swal.close()
                    suggestJSON["_id"] = null
                    self.state.createRouteST["commonRoute"] = suggestJSON
                    self.handleDialogNoRouteOpen();
                }else{
                    suggestJSON["_id"] = self.jsonToStringId(listSuggest[0]._id)
                    self.state.createRouteST["commonRoute"] = suggestJSON
                    console.log(self.state.createRouteST)
                    self.state.msgSuggestRoute = "We offer you the following common points, starting at "+ newJSON.pathRouteOriginPlace +" and ending the route at " + newJSON.pathRouteDestinationPlace +"."
                    self.handleDialogRouteOpen();
                } 
        }).catch(function (error) {
            console.log(error);
        });

        /*swal({
            title: "loading",
            text: "We are seraching the best route for you",
            icon: "info",
            button: false,
          })]*/
    }


    autocomplete() {
        const { google, map } = this.props;
        if (!google || !map) return;
        var src = document.getElementById("source");
        var tgt = document.getElementById("target");
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


    calculateRoute(origin, destination) {
        const { google, map } = this.props;
        if (!google || !map) return;
        const directionsService = new google.maps.DirectionsService();
        const request = {
            origin: origin,
            destination: destination,
            travelMode: "DRIVING",
            provideRouteAlternatives: true,
        };
        return new Promise((resolve, reject) => {
            directionsService.route(request, (response, status) => {
                if (status === 'OK') {
                    //console.log(response)
                    resolve(response)
                } else {
                    window.alert(destination + " ----- " + origin)
                    window.alert('Directions request failed due to ' + status);
                    reject(status)
                }
            })
        }
        )
    }

    getAllCommonRoutes(){
        var self = this;
        this.axios.get('/point/commonRoute')
            .then(function (response) {
            self.setState({ carres: response.data });
    
        }).catch(function (error) {
            console.log(error);
        });
    }

    //https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
    componentDidMount() {
        this.autocomplete();
        if (navigator && navigator.geolocation) {
            //navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
        }
    }

    createANewRoute(){
        console.log("Kha " +this.state.createRouteST)
        this.axios.post('/routes' , (this.state.createRouteST) )
            .then(function (response) {}
            ).catch(function (error) {
            console.log(error);
        });
    
        this.handleDialogNoRouteClose();
    
    }

    confirmRoute(){
        console.log("Kha " +this.state.createRouteST)
        this.axios.post('/routes' , (this.state.createRouteST) )
            .then(function (response) {}
            ).catch(function (error) {
            console.log(error);
        });
        this.handleDialogRouteClose();
    }

    componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map) {
            this.autocomplete();    
            this.getAllCommonRoutes();
        }
    }

    render() {
        const { classes } = this.props;
        var mark = this.state.markers.map((td) =>
            <Marker
                title={td.title}
                position={td.university}
                animation={this.props.google.maps.Animation.DROP}
                name={td.name}
                description={td.description}
                icon= {td.icon}
            />
        );

        return (
        <React.Fragment>               
            <div id="bar">                
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
                {mark}
                <Polyline
                    path={this.state.pathRoute}
                    geodesic={true}
                    options={{
                        strokeColor: '#354BD9',
                        strokeOpacity: 1,
                        strokeWeight: 2,
                    }}
                />

                <Polyline
                    path={this.state.pathRouteDestinationPlace}
                    geodesic={true}
                    options={{
                        strokeColor: '#38B44F',
                        strokeOpacity: 1,
                        strokeWeight: 2,
                    }}
                />

                <Polyline
                    path={this.state.pathRouteOriginPlace}
                    geodesic={true}
                    options={{
                        strokeColor: '#38B44F',
                        strokeOpacity: 1,
                        strokeWeight: 2,
                    }}
                />
                
                <div>
                    {/*<Button variant="outlined" color="primary" onClick={this.handleOpen}>
                        INFO
                    </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"IMPORTANTE"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Si eres un usuario nuevo, debes aprender el significado de cada uno de nuestros puntos.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                    </Dialog>*/}

                    <Dialog
                        open={this.state.dialogNoRoute}
                        onClose={this.handleDialogNoRouteClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="dialogNoRoute">{"Suggest a route"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Don't have routes avaliable, do u want to create a route?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleDialogNoRouteClose} color="primary">
                            Denied
                        </Button>
                        <Button onClick={this.createANewRoute} color="primary" autoFocus>
                            Accept
                        </Button>
                        </DialogActions>
                    </Dialog>



                    <Dialog
                        open={this.state.dialogRoute}
                        onClose={this.handleDialogRouteClose}
                        aria-labelledby="dialog-title"
                        aria-describedby="exitsroute-description">
                        <DialogTitle id="dialogRoute">{"Suggest a route"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="exitsroute">
                            {this.state.msgSuggestRoute}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleDialogRouteClose} color="primary">
                            Denied
                        </Button>
                        <Button onClick={this.confirmRoute} color="primary" autoFocus>
                            Accept
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Map>
        </div>
            <RouteForm paintRoute={this.setDirectionRoute} key={this.state.reloadForm} forceReload={this.handleForceReloadForm}/>
            <LegendButton />
            
        </React.Fragment>     
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
    apiKey: 'AIzaSyCVmCTy45uFYzpIslnjYBcVgt02M8KSQ84',
    language: "es",
})(MapWrapper));