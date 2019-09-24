import React, {Component} from 'react';
import {CardRoute} from '../CardRoute/CardRoute.js';
import './RouteList.css';

export class RouteList extends Component{

    render(){

        const routeList = this.props.routeList.map((route, i) => {
            return (
                <CardRoute key={i}
                    origin = {route.origin}
                    destination = {route.destination}
                    description = {route.description}
                    date = {route.date}
                    />
            );
        });

        return(
            <div className="container">
                <table className="tableRoutes">
                    <tbody>
                        {routeList}
                    </tbody>
                </table>
            </div>
        );

    }

}