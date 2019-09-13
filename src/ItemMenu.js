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
            <div className={"item-contaner " + (this.state.hover ? "item-contaner-hover" : "item-contaner-normal")}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>
                {this.props.children}
            </div>
        );
    }

    onMouseOver(e) {
        this.setState({hover: true })
    }

    onMouseLeave(e){
        this.setState({hover:false})
    }



}