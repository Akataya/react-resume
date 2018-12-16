import React, {Component} from 'react';
import resume from './resume.json';

export class Education extends Component{
  render(){
    return(
      <div class="item">
          <h4 class="degree">{this.props.item.degree}</h4>
          <h5 class="meta">{this.props.item.university}</h5>
          <div class="time">{this.props.item.period}</div>
      </div>
    );
  }
}
