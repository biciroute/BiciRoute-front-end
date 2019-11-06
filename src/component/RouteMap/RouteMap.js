import React from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import "./Map.css";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import bici from './img/bici.png';
import RouteForm from '../RouteForm/RouteForm.js';
import bici from './img/bici.png';
import bicis from './img/bicis.png';
import final from './img/final.png';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class RouteMap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            location: props.origin,
            markers: [
                {
                    university: { lat: 4.782715, lng: -74.042611 },
                    title: "Escuela colombiana de ingenieria Julio Garavito",
                    name: "Escuela colombiana de ingenieria Julio Garavito",
                    icon: bici,
                },
            ],
            position: null
        };

    }

    async drawPoints(){
        const places = [this.props.origin, this.props.destination, this.props.commonRoute.origin, this.props.commonRoute.destination]
        this.setState({
            markers: []
        })
        for (i = 0; i < 4; ++i) {
            const latAndLng = places[i];
            var newMarker={};
            if(i===0){
                newMarker = {
                    place: { lat: latAndLng.lat(), lng: latAndLng.lng() },
                    title: "Origin",
                    name: places[i],
                    icon:bici,
                }
            }else if(i===1){
                newMarker = {
                    place: { lat: latAndLng.lat(), lng: latAndLng.lng() },
                    title: "Destination",
                    name: places[i],
                    icon: final,
                }
            }else{
                newMarker = {
                    place: { lat: latAndLng.latitude, lng: latAndLng.longitude },
                    title: "Common route",
                    name: places[i],
                    icon: bicis,
                }
            }
            this.state.markers.push(newMarker);
        }
        await this.getCenterMap(origin, destination);
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
            </Map>
        </div>
            <RouteForm paintRoute={this.setDirectionRoute} key={this.state.reloadForm} forceReload={this.handleForceReloadForm}/>            
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