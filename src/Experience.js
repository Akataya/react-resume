import React, {Component} from 'react';
import resume from './resume.json';

export class Experience extends Component{
  render(){
    const dutiesArray = this.props.item.duties.map((duty) => <li>{duty}</li>);
    return(
      <div class="item">
          <div class="meta">
              <div class="upper-row">
                  <h3 class="job-title">{this.props.item.title}</h3>
                  <div class="time">{this.props.item.period}</div>
              </div>
              <div class="company">{this.props.item.company}</div>
          </div>
          <div class="details">
            <ul>{dutiesArray}</ul>
          </div>
      </div>
    );
  }

}
