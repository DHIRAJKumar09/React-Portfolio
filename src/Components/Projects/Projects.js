import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
 // Importing the projects data
 import {  projects} from './project_data';

 export const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const fetchProjects = async () => {
    try {
      // Assuming projects is an array of objects
      setProjectsList(projects);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const selectedProject = projectsList[selectedProjectIndex];

  return (
    <section className="section" id='projects'>
      <div className="title">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {projectsList.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProjectIndex(index)}
              className={`job-btn ${index === selectedProjectIndex && 'active-btn'}`}
            >
              {project.title}
            </button>
          ))}
        </div>
        {/* project info */}
        <article style={{textAlign:"left"}}  className="job-info">
          <h3>{selectedProject.title}</h3>
          <h4>{selectedProject.subtitle}</h4>
          <p className="description">{selectedProject.description}</p>
          <ul className="tasks-list">
            {selectedProject.tasks.map((task, index) => (
              <li key={index}>
                <FaAngleDoubleRight className="job-icon" />
                {task}
              </li>
            ))}
          </ul>
          {/* <img src={selectedProject.image} alt={selectedProject.title} className="project-image" /> */}
          <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
           <button className='btn'>View Code"<></>"</button>
          </a>
        </article>
      </div>
    </section>
  );
};


