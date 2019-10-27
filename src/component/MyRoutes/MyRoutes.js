import React, {Component} from 'react';
import {RouteList} from '../RouteList/RouteList.js';
import axios from 'axios';
import swal from 'sweetalert';
import MyAppBar from '../MyAppBar/MyAppBar.js';
import MyRoutesStyles from './MyRoutesStyles.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const classes = MyRoutesStyles;

export class MyRoutes extends Component{

    constructor(props){
        super(props);
        this.state = {
            routeList: [{
                origin: "escuelaing",
                destination: "santafe",
                date: "27 oct 2019, 9:14"
            },{
                origin: "el chorro",
                destination: "santafe",
                date: "25 oct 2019, 15:12"
            },{
                origin: "los andes",
                destination: "la escuela",
                date: "25 sep 2019, 17:20"
            }],
            pastRoutes: [{
                origin: "escuelaing",
                destination: "santafe",
                date: "27 oct 2019, 9:14"
            },{
                origin: "el chorro",
                destination: "santafe",
                date: "25 oct 2019, 15:12"
            },{
                origin: "los andes",
                destination: "la escuela",
                date: "25 sep 2019, 17:20"
            }],
            upcomingRoutes: [{
                origin: "santafe",
                destination: "calle 100",
                date: "14 jan 2020, 9:14"
            },{
                origin: "calle 100",
                destination: "aeropuerto el dorado",
                date: "16 dec 2019, 19:12"
            }],
            value: 0
        }
        this.changeRouteListHandler = this.changeRouteListHandler.bind(this);
        this.changeValueHandler = this.changeValueHandler.bind(this);
    }

    changeRouteListHandler(typeRoute){
        this.setState({
            routeList: (typeRoute==="past")? this.state.pastRoutes : this.state.upcomingRoutes
        });
    }

    changeValueHandler(event){
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return (
            <React.Fragment>
                <MyAppBar title="My routes"/>
                <RouteList routeList={this.state.routeList}/>
            </React.Fragment>
        );
    }
}
