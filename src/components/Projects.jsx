import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import projectdata from '../projects.json';

class Projects extends Component {
  state = {
    projects: []
  };
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <p>Here's where project cards will go</p>
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
