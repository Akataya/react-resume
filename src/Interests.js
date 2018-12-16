import React, {Component} from 'react';
import resume from './resume.json';

export class Interests extends Component{
  render(){
    return(
        <li>{this.props.item}</li>
    );
  }
}
