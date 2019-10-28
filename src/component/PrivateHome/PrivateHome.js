import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';
import RouteForm from '../RouteForm/RouteForm.js';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';

export class PrivateHome extends React.Component{

    /*autocomplete() {
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
    }*/

    render(){
        return(
            <React.Fragment>
                <MyNavBar/>
                <MapComponent/>
                {/*<RouteForm autoComplete={this.autoComplete}/>*/}
            </React.Fragment>
        );
    }
   
}