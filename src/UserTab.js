import React from 'react';
import logo from './man.png';
import './UserTab.css';

export class UserTab extends React.Component {

    render() {
        return (
            <div>
                <div className="logo-content">
                    <img src={logo}></img>
                </div>
                <div className="name-content">
                    <span className="text">Hola,</span>
                    <span className="text-name">Santiago</span>
                </div>
            </div>
        );
    }
}