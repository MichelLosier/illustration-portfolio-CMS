import React from 'react';

import ProjectCard from '../project-card/project-card.component';
import ProjectService from '../../services/project.service';

const projectService = new ProjectService();

class ProjectSelection extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: [],
            selectedProject: null
        }
    }

    componentDidMount(){
        this.getProjects();
    }

    getProjects = () => {
        projectService.getProjectAll().then((data) => {
           this.setState({projects: data});
        });
    }

    handleProjectClick = (id) => {
        this.setState({selectedProject: id})
    }

    handleProjectDelete = (id) => {
        projectService.deleteProject(id).then(() => {
            this.setState((prevState) => {
                prevState.projects = prevState.projects.filter((project) => {
                   return project._id != id
                })
                return prevState;
            })
        })
    }

    projects = () => {
        const {selectedProject, projects} = this.state;

        return projects.map((project) => {
            let selected = (selectedProject == project._id) 
            let className = (selected) ? 'selected' : '';
            return( 
                <li
                    id={project._id}
                    key={project._id}
                    onClick={()=>{this.handleProjectClick(project._id)}}
                    className={className}
                >
                    <div className="card-container">
                        <ProjectCard
                            selected={selected}
                            project={project}
                            handleDelete={this.handleProjectDelete}
                        />
                    </div>
                </li>
            )
        })
    }

    render(){
        return(
            <div className="project-selection">
                <ul>
                    {this.projects()}
                </ul>
            </div>
        )
    }
}

export default ProjectSelection;