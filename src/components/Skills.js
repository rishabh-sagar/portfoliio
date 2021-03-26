import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map((skillss, i) =>{
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skillss.skills.classE} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skillss.skills.name}
                
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skills2 = this.props.sharedSkills.icons2.map((skillss, i) =>{
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skillss.skills.classE} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skillss.skills.name}
                
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skills3 = this.props.sharedSkills.icons3.map((skillss, i) =>{
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skillss.skills.classE} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skillss.skills.name}
                
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }   
    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12">
            <h1 className="section-title-2">
              <span className="text-white">Languages</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
        <div className="col-md-12">
            <h1 className="section-title-2">
              <span className="text-white">frameworks</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills2}</ul>
          </div>
          <div className="col-md-12">
            <h1 className="section-title-2">
              <span className="text-white">ui & others</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills3}</ul>
          </div>
      </section>
    );
  }
}

export default Skills;
