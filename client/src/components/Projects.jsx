import { useEffect, useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        projects.map((p) => (
          <div key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link && <a href={p.link} target="_blank" rel="noreferrer">Live Demo</a>}
          </div>
        ))
      )}
    </section>
  );
}
export default Projects;