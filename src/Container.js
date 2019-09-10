import React from 'react';
import {Menu} from './Menu';

export class Container extends React.Component{

    render(){
        return(
           <div>
               <div style={{marginLeft:"64px"}}>{this.props.view}</div>
               <Menu />
           </div>
        );
    }

    componentDidMount(){
        console.log(this.props.view);
    }
}