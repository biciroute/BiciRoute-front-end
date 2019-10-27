import React from 'react';
import './UserTab.css';

export class UserTab extends React.Component {

    render() {
        return (
            <div className="tab-container">
                <div className="logo-content">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"></img>
                </div>
                <div className="name-content">
                    <p>Welcome, User</p>
                    <h1></h1>
                </div>
            </div>
        );
    }
}