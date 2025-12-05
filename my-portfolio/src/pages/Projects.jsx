import { useState } from "react";
import { data } from "../data";
import "/src/styles/Projects.css"; 

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <div className="container">
        <h2>Meus Projetos</h2>
        <p className="section-description">Clique em um projeto para ver detalhes</p>
        
        <div className="projects-grid">
          {data.projects.map(p => (
            <div 
              key={p.id} 
              className="project-card compact"
              onClick={() => handleProjectClick(p)}
            >
              {p.image && (
                <div className="project-image">
                  <img src={p.image} alt={p.title} />
                  <div className="project-overlay">
                    <span className="view-details">Ver detalhes →</span>
                  </div>
                </div>
              )}
              
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Expanded View */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={handleCloseModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            
            <div className="modal-content">
              {/* Image at the top */}
              {selectedProject.image && (
                <div className="modal-image-top">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
              )}
              
              {/* Content below image */}
              <div className="modal-body">
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                </div>
                
                <div className="modal-description">
                  <p>{selectedProject.description}</p>
                </div>
                
                {selectedProject.video && (
                  <div className="modal-video">
                    <h3>Demonstração</h3>
                    <video src={selectedProject.video} controls />
                  </div>
                )}
                
                <div className="modal-links">
                  <h3>Links</h3>
                  <div className="modal-link-buttons">
                    {selectedProject.github && (
                      <a href={selectedProject.github} className="modal-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-icon">📂</span>
                        <div>
                          <div className="link-title">Código</div>
                          <div className="link-subtitle">Ver no GitHub</div>
                        </div>
                      </a>
                    )}
                    {selectedProject.itch && (
                      <a href={selectedProject.itch} className="modal-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-icon">🎮</span>
                        <div>
                          <div className="link-title">Jogar</div>
                          <div className="link-subtitle">Acessar site do jogo</div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}