import React from 'react';
import './ItemMenu.css';

export class ItemMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hover: false };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        return (
            <a href={this.props.href}>
                <div className={"item-container " + (this.state.hover ? "item-container-hover " : "item-container-normal ") + (this.props.clicked ? "item-container-select" : "")}
                    onMouseOver={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.props.onClick}>
                    {this.props.children}
                </div>
            </a>
        );
    }

    onMouseOver(e) {
        this.setState({ hover: true })
    }

    onMouseLeave(e) {
        this.setState({ hover: false })
    }




}