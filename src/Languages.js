import React, {Component} from 'react';
import resume from './resume.json';

export class Languages extends Component{
  render(){
    return(
      <li>{this.props.item.name} <span class="lang-desc">({this.props.item.details})</span></li>
    );
  }
}
