import React from 'react';
import logo from './man.png';
import './UserTab.css';

export class UserTab extends React.Component {

    render() {
        return (
            <div className="tab-container">
                <div className="logo-content">
                    <img src={logo}></img>
                </div>
                <div className="name-content">
                    <p>Hola,</p>
                    <h1>Santiago</h1>
                </div>
            </div>
        );
    }
}