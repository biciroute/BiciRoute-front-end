import React, {Component} from 'react';
import {RouteList} from '../RouteList/RouteList.js';
import './MyRoutes.css';
import axios from 'axios';
import swal from 'sweetalert';

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
            }]
        }
    }

    changeRouteListHandler(typeRoute){
        this.setState({
            routeList: (typeRoute==="past")? this.state.pastRoutes : this.state.upcomingRoutes
        });
    }

    render(){
        return (
            <div className="root-myroutes">
                <RouteList routeList={this.state.routeList}/>
            </div>
        );
    }
}
