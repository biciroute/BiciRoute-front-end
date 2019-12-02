import React from 'react';
import MapComponent from '../Map/MapComponent.js';
import MyNavBar from '../MyNavBar/MyNavBar.js';
import Grid from '@material-ui/core/Grid';

export class PrivateHome extends React.Component{

    render(){

        return(
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <MyNavBar />
                </Grid>
                <Grid item xs={12}>
                    <div id="requestRouteMap" style={{marginTop: "1%"}}>
                        <MapComponent requestRoute="true"
                            location={{ 
                                latLng: {
                                    lat: 4.782715, lng: -74.042611
                                }, 
                                name: "Escuela Colombiana de Ingeniería Julio Garavito"
                            }}
                            />
                    </div>
                </Grid>
            </Grid>
        );
    }
   
}