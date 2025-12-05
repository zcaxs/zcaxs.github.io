import { data } from "../data";
import "/src/styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="container">
        <h2>As Minhas Competências</h2>
        <p className="section-description">Tecnologias e ferramentas que domino</p>
        
        <div className="skills-grid">
          {data.skills.map(s => (
            <div key={s.id} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-level">{s.level}%</span>
              </div>
              
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar" 
                  style={{ width: `${s.level}%` }}
                  data-level={s.level}
                >
                  <div className="skill-progress-fill"></div>
                </div>
              </div>
              
              <div className="skill-indicator">
                <div className="skill-dots">
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`skill-dot ${i < Math.floor(s.level / 10) ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}