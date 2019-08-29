import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import projectdata from '../projects.json';
import '../CSS/Projects.css';

class Projects extends Component {
  state = {
    projects: []
  };
  render() {
    return (
      <div className="projectcontainer">
        {this.state.projects.map((project, index) => {
          return <ProjectCard key={index} data={project} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.setState({ projects: projectdata });
  }
}

export default Projects;
