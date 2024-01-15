import "./ProjectList.css"
import React from "react";

class ProjectList extends React.Component {
  render () {
    return (
      <div className="img-list">
        {this.props.projects.map((project, index) => <img key={index} className="img-list__img" src={project.img} alt="1"/>)}
      </div>
    );
  }
}

export default ProjectList;