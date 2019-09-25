import React, {Component} from 'react';
import {RouteList} from '../RouteList/RouteList.js';

export class LastRoutes extends Component{
    render(){
        const lastroutes = (localStorage.getItem("lastroutes")===null) ? [] : JSON.parse(localStorage.getItem("lastroutes"));
        /*{[{
            origin: "suba",
            destination: "escuela",
            description: "Fue una ruta muy amigable",
            date: "23/09/2019"
        }, {
            origin: "portal norte",
            destination: "escuela",
            description: "No hay rutas para ciclistas",
            date: "23/09/2019"
        }]}*/
        return (
            <div>
                <RouteList routeList={lastroutes}/>
            </div>
        );
    }
}
