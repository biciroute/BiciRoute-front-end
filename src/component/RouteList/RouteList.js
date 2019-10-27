import React, {Component} from 'react';
import './RouteList.css';

import RouteCard from '../RouteCard/RouteCard.js';

export class RouteList extends Component{

    render(){

        const routeList = this.props.routeList.map((route, i) => {
            return (
                <RouteCard key={i}
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