import React, { Component } from 'react';
import './App.css';
import resume from "./resume.json";
import {Experience} from "./Experience";
import {Education} from "./Education";
import {Languages} from "./Languages";
import {Interests} from "./Interests";
import {Skills} from "./Skills";

class App extends Component {
  renderExperience(){
    let resultsArray = [];
    resume.experience.map((item, i) => {
      resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }

  renderEducation(){
    let resultsArray = [];
    resume.education.map((item, i) => {
      resultsArray.push(<Education item={item} key={i} />);
    });
    return resultsArray;
  }

  renderLanguages(){
    let resultsArray = [];
    resume.languages.map((item, i) => {
      resultsArray.push(<Languages item={item} key={i} />);
    });
    return resultsArray;
  }

  renderInterests(){
    let resultsArray = [];
    resume.interests.map((item, i) => {
      resultsArray.push(<Interests item={item} key={i} />);
    });
    return resultsArray;
  }

  renderSkills(){
    let resultsArray = [];
    resume.skills.map((item, i) => {
      resultsArray.push(<Skills item={item} key={i} />);
    });
    return resultsArray;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src={resume.image} alt="" />
            <h1 className="name">{resume.name}</h1>
            <h3 className="tagline">Full Stack Developer</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
              <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
              {/*<li className="website"><i className="fas fa-globe"></i><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">portfoliosite.com</a></li>*/}
              <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/aiya-akatayeva-3091a1173/" target="_blank">{resume.linkedin}</a></li>
              <li className="github"><i className="fab fa-github"></i><a href="https://github.com/Akataya" target="_blank">{resume.github}</a></li>
              {/*<li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>*/}
            </ul>
          </div>

          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {this.renderEducation()}
          </div>

          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
              {this.renderLanguages()}
            </ul>
          </div>

          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
              {this.renderInterests()}
            </ul>
          </div>

        </div>

        <div className="main-wrapper">

          <section className="section summary-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
            <div className="summary">
              <p>{resume.summary}</p>
            </div>
          </section>

          <section className="section experiences-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experience</h2>

            {this.renderExperience()}

          </section>

          <section className="skills-section section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
            <div className="skillset">
              {this.renderSkills()}
            </div>
          </section>

        </div>
      </div>
    );
  }
}

export default App;
