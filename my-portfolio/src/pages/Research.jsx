import { useState } from "react";
import { data } from "../data";
import "/src/styles/Research.css";

export default function Research() {
  const [activePlace, setActivePlace] = useState(null);

  const studyPlaces = data.studyPlaces

  return (
    <div className="research-container">
      <div className="container">
        <div className="research-header">
          <h2>Minha Educação e Experiência</h2>
        </div>

        <div className="research-content">
          <div className="research-card">
            <div className="research-icon"><span>📚</span></div>
            <div className="research-text">
              <h3>Área de Estudo</h3>
              <div className="mini-card-grid">
                {studyPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="mini-card"
                    onClick={() => setActivePlace(place)}
                  >
                    {place.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activePlace && (
            <div className="modal-overlay" onClick={() => setActivePlace(null)}>
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                {/* Add image at the top of the modal */}
                {activePlace.image && (
                  <div className="modal-image-container">
                    <img 
                      src={activePlace.image} 
                      alt={activePlace.name}
                      className="modal-image"
                    />
                  </div>
                )}
                <h3>{activePlace.name}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{activePlace.description}</p>
                <button className="close-btn" onClick={() => setActivePlace(null)}>Fechar</button>
              </div>
            </div>
          )}

          <div className="research-highlights">
            <h3>Área de Interesses</h3>
            <div className="highlight-grid">
              <div className="highlight-item">
                <span className="highlight-number">01</span>
                <h4>Game Dev</h4>
                <p>Crio jogos com Unity e C#.</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">02</span>
                <h4>Produção de Musica</h4>
                <p>Componho musica no FL Studio.</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">03</span>
                <h4>Modelação 3D</h4>
                <p>Modelo mundos e personagens no Blender.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
