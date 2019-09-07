import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polyline } from 'google-maps-react';
import "./Map.css"
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';



const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            university: { lat: 4.782715, lng: -74.042611 },
        };
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={this.state.university}

            >
            <Marker
                title={'Escuela colombiana de ingenieria Julio Garavito'}
                position={this.state.university}
                animation = {this.props.google.maps.Animation.DROP}

                name={'Escuela colombiana de ingenieria Julio Garavito'}
                description={'AK 45 #205-59 Bogota\nInstitucion universitaria'}
            />
            <Fab id="text" variant="extended" aria-label="delete" >
                <NavigationIcon/> Search trip
             </Fab>
            </Map>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapComponent);